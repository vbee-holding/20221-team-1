import './MatchFormation.css'

const MatchFormation = (props) => {
    const home_team = props.home_team;
    const away_team = props.away_team;

    const home_team_start = home_team.starting_eleven;
    const away_team_start = away_team.starting_eleven;

    const playerHomeTeam = {};
    home_team_start.forEach(player => {
        if (!playerHomeTeam[player.position]) {
            playerHomeTeam[player.position] = [player];
        } else {
            playerHomeTeam[player.position].push(player);
        }
    });

    const playerAwayTeam = {};
    away_team_start.forEach(player => {
        if (!playerAwayTeam[player.position]) {
            playerAwayTeam[player.position] = [player];
        } else {
            playerAwayTeam[player.position].push(player);
        }
    });

    return (
        <>
            {home_team && away_team && home_team_start && away_team_start && playerHomeTeam && playerAwayTeam && (
                <div className='two-team-formation'>
                    <div className="home-team-formation">
                        <div className="home-goal-keeper">
                            <div className='shirt-number'>{playerHomeTeam.Goalkeeper[0].shirt_number}</div>
                            <div className="name-home-goal-keeper">{playerHomeTeam.Goalkeeper[0].name}</div>
                        </div>

                        <div className='home-defender'>
                            {playerHomeTeam.Defender.map((player, index) => {
                                return (
                                    <div key={index} className="detail-home-defender">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-home-def">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="home-midfield">
                            {playerHomeTeam.Midfielder.map((player, index) => {
                                return (
                                    <div key={index} className="detail-home-mid">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-home-mid">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="home-forward">
                            {playerHomeTeam.Forward.map((player, index) => {
                                return (
                                    <div key={index} className="detail-home-forward">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-home-forward">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="away-team-formation">
                        <div className="away-forward">
                            {playerAwayTeam.Forward.map((player, index) => {
                                return (
                                    <div key={index} className="detail-away-forward">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-away-forward">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="away-midfield">
                            {playerAwayTeam.Midfielder.map((player, index) => {
                                return (
                                    <div key={index} className="detail-away-mid">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-away-mid">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='away-defender'>
                            {playerAwayTeam.Defender.map((player, index) => {
                                return (
                                    <div key={index} className="detail-away-defender">
                                        <div className="shirt-number">{player.shirt_number}</div>
                                        <div className="name-away-def">{player.name}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="away-goal-keeper">
                            <div className='shirt-number'>{playerAwayTeam.Goalkeeper[0].shirt_number}</div>
                            <div className="name-away-goal-keeper">{playerAwayTeam.Goalkeeper[0].name}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MatchFormation;
