const express = require('express');
const homeController = require('../controllers/homeController')
const route = express.Router();

// coach
route.get('/coaches', homeController.getAllCoach);
route.get('/coaches/:id', homeController.getCoach);
route.get('/coaches/team/:teamId', homeController.getCoachByTeamId);

// venue
route.get('/stadiums', homeController.getAllVenue);
route.get('/stadiums/:id', homeController.getVenue);

// team
route.get('/teams', homeController.getAllTeams);
route.get('/teams/:id', homeController.getTeam);

// player
route.get('/players', homeController.getAllPlayers);
route.get('/players/:id', homeController.getPlayer);
route.get('/players-top50', homeController.getTopPlayer);
route.get('/player/:teamId', homeController.getPlayerByTeam);

// groups
route.get('/group-stage', homeController.getAllGroup);
route.get('/group-stage/:letter', homeController.getGroup);
route.get('/group-stage/team/:idTeam', homeController.getGroupByTeamId);

// matches 
route.get('/matches', homeController.getAllMatches);
route.get('/matches/:id', homeController.getMatch);

// knock-out
route.get('/knockout-stage', homeController.getAllKnockoutStage);
route.get('/knockout-stage/:idTeam', homeController.getKnockoutStageById);

// statistic
route.get('/statistic', homeController.getStatistic);

// post 
// route.get('/posts', homeController.getAllPost);
route.get('/posts/:idTeam', homeController.getPostAboutTeam);
route.get('/post/:matchId', homeController.getPostAboutMatch);

module.exports = route;
