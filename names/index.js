const peopleList = require("../country/state/city/index");

const peopleFirstName = require("../utilities/utils/index");

const getPeopleInCity = (peopleList) => peopleFirstName(peopleList);

module.exports = getPeopleInCity;
