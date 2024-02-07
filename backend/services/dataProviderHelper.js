class Legislator {
  id;
  name;
  supportedBill;
  opposedBills;

  constructor(legislator, voteResults) {
    this.id = legislator.id;
    this.name = legislator.name;
    this.setBillsInformation(voteResults);
  }

  setBillsInformation(voteResult) {
    let supportedBills = 0;
    let opposedBills = 0;
    voteResult.forEach((vote) => {
      if(vote.legislator_id === this.id) {
        if(vote.vote_type === 1) supportedBills++;
        if(vote.vote_type === 2) opposedBills++;
      }
    });

    this.supportedBill = supportedBills;
    this.opposedBills = opposedBills;
  }
}

class Bill {
  id;
  title;
  supporters;
  opposers;
  primarySponsor;
  primarySponsorId;
  voteId;

  constructor(bill, votes, voteResult, legislators) {
    this.id = bill.id;
    this.title = bill.title;
    this.primarySponsorId = bill.sponsor_id;
    this.setVoterId(votes);
    this.setVotersInformation(voteResult);
    this.setSponsor(legislators);
  }

  setVoterId(votes) {
    votes.forEach((vote) => {
      if(vote.bill_id === this.id) {
        this.voteId = vote.id;
        return;
      }
    });
  }

  setVotersInformation(voteResult) {
    let supporters = 0;
    let opposers = 0;
    voteResult.forEach((vote) => {
      if(vote.vote_id === this.voteId) {
        if(vote.vote_type === 1) supporters++;
        if(vote.vote_type === 2) opposers++;
      }
    });
    this.supporters = supporters;
    this.opposers = opposers;
  }

  setSponsor(legislators) {
    legislators.forEach((legislator) => {
      if(legislator.id === this.primarySponsorId) {
        this.primarySponsor = legislator.name;
        return;
      }
    });
  }
}

module.exports = { Legislator, Bill };
