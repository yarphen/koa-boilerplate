const admin = require('../models/admin');
const { makeHash, filterUndefined } = require('../utils');

const createAdmin = (adminData) => {
  const { email, password, firstName, lastName } = adminData;
  return admin.create({ email, password: makeHash(password), firstName, lastName });
};

const getAdmin = adminId => admin.findById(adminId).exec();

const findAdminByEmail = email => admin.findOne({ email }).select('+password').exec();

const listAdmins = () => admin.find().exec();

const updateAdmin = (adminId, { firstName, lastName, email, password }) => {
  const profileUpdate = {
    firstName,
    lastName,
    email,
    password: password !== undefined ? makeHash(password) : undefined,
  };
  return admin.findOneAndUpdate({ _id: adminId }, { $set: filterUndefined(profileUpdate) });
};

const deleteAdmin = adminId => admin.findByIdAndRemove(adminId);

module.exports = {
  createAdmin,
  getAdmin,
  findAdminByEmail,
  listAdmins,
  updateAdmin,
  deleteAdmin,
};
