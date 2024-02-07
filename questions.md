# Questions
**Discuss your strategy and decisions implementing the application. Please, consider time complexity, effort cost, technologies used and any other variable that you understand important on your development process.**

  Main steps for implementation:
  1. Decided on what I would need to show on frontend regarding the data;
  2. Decided on what data structure I would need based on the previous step;
  3. Decided on how I would get this data. Decided to go with an internal API;
  4. Developed backend, exposing API to be later consumed by the frontend;
  5. Finished UI mockup on Figma so development would focus only on implementation and technical issues.

  #### Time complexity:

  The time complexity of the parsing data process is roughly O(n), n being the array size of each CSV file. This complexity indicates that the app’s performance will linerly depend on the size of the CSV files, degrading for bigger datasets. Since most of the parsing data process is about searching IDs in tables, the time complexity of the application can be improved by using hash tables, which has better performance for searching over arrays.

#### Technologies used:
React was the chosen FE framework/library. It is easy to use and one of the stacks used by Quorum.

Node.js was the chosen BE framework. It is simple, does not require any extra complexity and allows the usage of the popular Express framework.

Papaparse is the library being used on the BE to parse CSV data. It has been chosen because of its active community, simple usability and supports the creation of CSV files.

**How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or “Co-Sponsors”?**

To support a "Bill Voted On Date" feature, a "voted_on_date" Date column could be added to the bills table and used as an index to be used during search.

To support "Co-Sponsors" a new table would have to be created, called "co_sponsors", with two columns "bill_id" and "co_sponsor_id". This table would define the M:N relationship between bills and co-sponsors.

**How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?**

I would use the same library chosen for the app (papaparse) as it supports creating CSV files. The list of legislators and bills should be transformed to a JSON format, as this is the format Papaparse supports for the generation and the payload could be sent on a PUT request to the backend.

**How long did you spend working on the assignment?**

About 5 hours. The decision to create an API and Dockerize the project was an extra effort, but these decisions allow the app to be more reliable and flexible.
