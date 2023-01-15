const { Data } = require('../connect');

// lấy danh sách tất cả hlv
const getAllCoach = async (req, res) => {
    try {
        (Data("Coach")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy hlv theo id
const getCoach = async (req, res) => {
    try {
        const coachId = req.params.id;
        const cursor = (Data("Coach")).collectionName.find({
            id: coachId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy hlv theo tên đội
const getCoachByTeamId = async (req, res) => {
    try {
        const team = req.params.teamId;

        const cursor = (Data("Coach")).collectionName.find({
            idTeam: team
        })

        cursor.forEach(result => {
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllGroup = async (req, res) => {
    try {
        (Data("Groups")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy thông tin về 1 bảng đấu
const getGroup = async (req, res) => {
    try {
        const groupName = req.params.letter;
        const cursor = (Data("Groups")).collectionName.find({
            letter: groupName
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy thông tin các trận đấu vòng bảng của 1 đội
const getGroupByTeamId = async (req, res) => {
    try {
        const id = req.params.idTeam;
        const cursor = Data("match").collectionName.find({
            stage_name: 'First stage',
            $or: [
                {
                    home_team_country: id
                },
                {
                    away_team_country: id
                }
            ]
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách tất cả các trận từ vòng knockout (round of 16, tứ kết, bán kết, chung kết)
const getAllKnockoutStage = (req, res) => {
    try {
        (Data("match")).collectionName.find({
            stage_name: { $ne: 'First stage' }
        }).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách các trận đấu từ vòng knockout của 1 đội
const getKnockoutStageById = async (req, res) => {
    try {
        const id = req.params.idTeam;
        (Data("match")).collectionName.find({
            stage_name: { $ne: 'First stage' },
            $or: [
                {
                    home_team_country: id
                },
                {
                    away_team_country: id
                }
            ]
        }).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllMatches = async (req, res) => {
    try {
        (Data("match")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getMatch = async (req, res) => {
    try {
        const matchId = req.params.id;

        const cursor = (Data("match")).collectionName.find({
            id: Number(matchId)
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllPlayers = async (req, res) => {
    try {
        (Data("player")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPlayer = async (req, res) => {
    try {
        const playerId = req.params.id;

        const cursor = (Data("player")).collectionName.find({
            id: playerId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTopPlayer = async (req, res) => {
    try {
        const cursor = Data("player").collectionName.find({
            isTop50: true
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPlayerByTeam = async (req, res) => {
    try {
        const id = req.params.teamId;
        const cursor = Data("player").collectionName.find({
            idTeam: id
        })
        cursor.toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy bài báo về 1 đội
const getPostAboutTeam = async (req, res) => {
    try {
        const id = req.params.idTeam;
        Data("post").collectionName
            .find({
                type: "teamPost",
                teamId: id
            })
            .project({ teamId: 1, header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy bài báo về trận đấu
const getPostAboutMatch = async (req, res) => {
    try {
        const id = req.params.matchId;
        Data("post").collectionName
            .find({
                type: "matchPost",
                matchId: Number(id)
            })
            .project({ matchId: 1, header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách tất cả bài báo
const getAllPost = async (req, res) => {
    try {
        Data("post").collectionName
            .find({})
            .project({ header: 1, URL: 1, imgUrl: 1 })
            .toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy thống kê của giải đấu 
const getStatistic = async (req, res) => {
    try {
        const cursor = (Data("statistic")).collectionName.find({})
        cursor.forEach(result => {
            res.status(200).json(result);
        })

    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllTeams = async (req, res) => {
    try {
        (Data("team")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTeam = async (req, res) => {
    try {
        const teamId = req.params.id;

        const cursor = (Data("team")).collectionName.find({
            country: teamId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllVenue = async (req, res) => {
    try {
        (Data("venue")).collectionName.find({}).toArray((err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getVenue = async (req, res) => {
    try {
        const venueId = req.params.id;

        const cursor = (Data("venue")).collectionName.find({
            id: venueId
        })
        cursor.forEach(result => {
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getCoach, getAllCoach, getCoachByTeamId,
    getAllGroup, getGroup, getGroupByTeamId,
    getAllKnockoutStage, getKnockoutStageById,
    getAllMatches, getMatch,
    getPlayer, getAllPlayers, getTopPlayer, getPlayerByTeam,
    getPostAboutMatch, getPostAboutTeam, getAllPost,
    getStatistic,
    getTeam, getAllTeams,
    getAllVenue, getVenue
};
