const passport = require('passport');

const clubService = require('../services/club');

const createClub = async (ctx) => {
  const newClub = await clubService.createClub(ctx.request.body);
  ctx.status = 200;
  ctx.body = newClub;
};

const getClub = async (ctx) => {
  const { clubId } = ctx.params;
  const club = await clubService.getClub(clubId);
  if (!club) {
    ctx.throw(404, 'Club not found');
  } else {
    ctx.status = 200;
    ctx.body = club;
  }
};


const listClubs = async (ctx) => {
  const clubs = await clubService.listClubs();
  ctx.status = 200;
  ctx.body = clubs;
};

const updateClub = async (ctx) => {
  const { clubId } = ctx.params;
  await clubService.updateClub(clubId, ctx.request.body);
  const updatedClub = await clubService.getClub(clubId);
  ctx.status = 200;
  ctx.body = updatedClub;
};

const deleteClub = async (ctx) => {
  const { clubId } = ctx.params;
  const deletedClub = await clubService.deleteClub(clubId);
  if (!deletedClub) {
    ctx.throw(404, 'Club not found');
  } else {
    ctx.status = 200;
    ctx.body = { message: 'Club deleted' };
  }
};

module.exports = (router) => {
  router.post('/clubs', passport.authenticate('jwt', { session: false }), createClub);
  router.get('/clubs', passport.authenticate('jwt', { session: false }), listClubs);
  router.get('/clubs/:clubId', passport.authenticate('jwt', { session: false }), getClub);
  router.patch('/clubs/:clubId', passport.authenticate('jwt', { session: false }), updateClub);
  router.delete('/clubs/:clubId', passport.authenticate('jwt', { session: false }), deleteClub);
};
