const parseCsv = require('./csvParser.js');
const { Legislator, Bill } = require('./dataProviderHelper.js');
const fs = require('fs');

const baseUrl = "./dataSource";

const legislatorsFile = fs.createReadStream(`${baseUrl}/legislators.csv`);
const legislatorsPromise = parseCsv(legislatorsFile);

const votesFile = fs.createReadStream(`${baseUrl}/votes.csv`);
const votesPromise = parseCsv(votesFile);

const billsFile = fs.createReadStream(`${baseUrl}/bills.csv`);
const billsPromise = parseCsv(billsFile);

const votesResultFile = fs.createReadStream(`${baseUrl}/vote_results.csv`);
const votesResultPromise = parseCsv(votesResultFile);

async function getData() {
  let result;
  try {
    result = await Promise.all([legislatorsPromise, votesPromise, billsPromise, votesResultPromise]);
  } catch (error) {
    return [];
  }
  const [legislators, votes, bills, votesResult] = result;
  const legislatorsInfo = [];
  const billsInfo = [];

  for (const legislator of legislators) {
    legislatorsInfo.push(new Legislator(legislator, votesResult));
  }
  for (const bill of bills) {
    billsInfo.push(new Bill(bill, votes, votesResult));
  }

  return {
    legislators: legislatorsInfo,
    bills: billsInfo
  };
}

module.exports = getData;
