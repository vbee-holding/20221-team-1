const Link = {
    url_coach: 'http://localhost:8081/coaches/',
    url_venue: 'http://localhost:8081/stadiums/',
    url_team: 'http://localhost:8081/teams/',
    url_player: {
        url_playerById :  'http://localhost:8081/players/',
        url_topPlayer : 'http://localhost:8081/players-top50',
        url_playerByTeam : 'http://localhost:8081/player/'
    },
    url_group : 'http://localhost:8081/group-stage/',
    url_match : 'http://localhost:8081/matches/',
    url_knockout : 'http://localhost:8081/knockout-stage/',
    url_statistic : 'http://localhost:8081/statistic',
    url_post : {
        url_allPost : 'http://localhost:8081/posts/',
        url_postByMatch : 'http://localhost:8081/post/'
    }
}

export default Link;
