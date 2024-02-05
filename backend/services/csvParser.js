const Papa = require("papaparse");

function parseCsv(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      delimiter: ",",
      error: function(err) {
        reject(err);
      },
      complete: function(results) {
        resolve(results.data);
      }
    })
  });
}

module.exports = parseCsv;
