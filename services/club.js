const club = require('../models/club');

const { filterUndefined } = require('../utils');

const createClub = clubData => club.create(clubData);

const getClub = clubId => club.findById(clubId).exec();

const listClubs = () => club.find().exec();

const updateClub = (clubId, { title, description }) => {
  const clubData = { title, description };
  return club.findOneAndUpdate({ _id: clubId }, { $set: filterUndefined(clubData) });
};

const deleteClub = clubId => club.findByIdAndRemove(clubId);

module.exports = {
  createClub,
  getClub,
  listClubs,
  updateClub,
  deleteClub,
};
