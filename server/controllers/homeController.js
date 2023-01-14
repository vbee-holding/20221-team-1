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
        Data("team").collectionName
            .find({ country: id })
            .project({ post: 1 })
            .forEach(result => {
                res.status(200).json(result);
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy bài báo về trận đấu
const getPostAboutMatch = async (req, res) => {
    try {
        const id_match = req.params.matchId;
        (Data("match")).collectionName
            .find({ id: Number(id_match) })
            .project({ post: 1 })
            .forEach(result => {
                res.status(200).json(result)
            })
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy danh sách tất cả bài báo
// const getAllPost = async (req, res) => {
//     try {
//         const cursor = Data("team").collectionName
//             .aggregate([{
//                 $lookup: {
//                     from: "match",
//                     localField: "country",
//                     foreignField: "home_team_country",
//                     as: "allPost"
//                 }
//             }])

//         cursor.find({})
//             .project({ allPost: 1 })
//             .toArray((err, result) => {
//                 if (err) throw err;
//                 res.status(200).json(result);
//             })

//         // Data("team").collectionName
//         //     .find({})
//         //     .project({ post: 1 })
//         //     .forEach(result => {
//         //         res.status(200).json(result);
//         //     })

//     } catch (error) {
//         res.status(500).json(error);
//     }
// }

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
    getPostAboutMatch, getPostAboutTeam,
    getStatistic,
    getTeam, getAllTeams,
    getAllVenue, getVenue
};
