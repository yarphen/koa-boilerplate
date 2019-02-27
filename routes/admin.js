const passport = require('passport');

const adminService = require('../services/admin');

const createAdmin = async (ctx) => {
  const newAdmin = await adminService.createAdmin(ctx.request.body);
  ctx.status = 200;
  ctx.body = newAdmin;
};

const getAdmin = async (ctx) => {
  const { adminId } = ctx.params;
  const admin = await adminService.getAdmin(adminId);
  if (!admin) {
    ctx.throw(404, 'Admin not found');
  } else {
    ctx.status = 200;
    ctx.body = admin;
  }
};

const listAdmins = async (ctx) => {
  const admins = await adminService.listAdmins();
  ctx.status = 200;
  ctx.body = admins;
};

const updateAdmin = async (ctx) => {
  const { adminId } = ctx.params;
  await adminService.updateAdmin(adminId, ctx.request.body);
  const updatedAdmin = await adminService.getAdmin(adminId);
  ctx.status = 200;
  ctx.body = updatedAdmin;
};

const deleteAdmin = async (ctx) => {
  const { clubId } = ctx.params;
  const deletedAdmin = await adminService.deleteAdmin(clubId);
  if (!deletedAdmin) {
    ctx.throw(404, 'Admin not found');
  } else {
    ctx.status = 200;
    ctx.body = { message: 'Admin deleted' };
  }
};

module.exports = (router) => {
  router.post('/admins', passport.authenticate('jwt', { session: false }), createAdmin);
  router.get('/admins', passport.authenticate('jwt', { session: false }), listAdmins);
  router.get('/admins/:adminId', passport.authenticate('jwt', { session: false }), getAdmin);
  router.patch('/admins/:adminId', passport.authenticate('jwt', { session: false }), updateAdmin);
  router.delete('/admins/:adminId', passport.authenticate('jwt', { session: false }), deleteAdmin);
};
