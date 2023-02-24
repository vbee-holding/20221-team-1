import { useEffect } from "react";
import { useState } from "react"
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getMatch } from "../../apis/matchAPI";
import { InfoTeam } from "../Team/Team";
import './Match.css';

const Match = (props) => {
    const [match, setMatch] = useState({});

    const id = props.idMatch;
    const isInfo = props.isInfo;
    const isBracket = props.isBracket;

    const loadMatch = async () => {
        const result = await getMatch(id);
        setMatch(result);
    }

    const date = new Date(match.datetime);

    const home_team = match.home_team_country;
    const away_team = match.away_team_country;

    const homeTeam = InfoTeam({ idTeam: home_team });
    const awayTeam = InfoTeam({ idTeam: away_team });

    useEffect(() => {
        loadMatch();
    }, [])
    
    return (
        <>
            {match && !isInfo && !isBracket &&
                <div className="about-match">
                    <NavLink to={`/matches/${id}`} className='my-nav-link-match'>
                        <div className="left__about-match">
                            <div className="name-stage">
                                {match.stage_name}
                            </div>
                            {
                                home_team && away_team && homeTeam && awayTeam && (
                                    <div className="info-match">                                     
                                    <div className="img"><img className="img-match-team" src={homeTeam[0]} alt="team" /></div>
                                        <div className="team-name"><h4>{match.home_team.name}</h4></div>
                                        <div className="team-goal"><h4>{match.home_team.goals}{(match.home_team.goals === match.away_team.goals)&&(match.stage_name!=="First stage") ? (
                                            ` (${match.home_team.penalties})`
                                        ) : null}</h4></div>

                                        <div className="img"><img className="img-match-team" src={awayTeam[0]} alt="team" /></div>
                                        <div className="team-name"><h4>{match.away_team.name}</h4></div>
                                        <div className="team-goal"><h4>{match.away_team.goals}{(match.home_team.goals === match.away_team.goals)&&(match.stage_name!=="First stage") ? (
                                            ` (${match.away_team.penalties})`
                                        ) : null}</h4></div>
                                    </div>
                                )
                            }
                        </div>
                    </NavLink>
                    <div className="right__about-match">
                        <h4>Kết thúc</h4>
                        <h5>{`${date.getDate()}/${date.getMonth() + 1}`}</h5>
                        <h5>Highlights</h5>
                        <Button variant="contained" href={match.url} target='_blank' style={{background: '#56042C',fontSize:'0.8rem',fontWeight:'200',marginBottom:'3px' }}>Video</Button>
                    </div>
                </div>
            }
            {match && isInfo && (
                <div className="info-match-for-statistic">
                    <div className="two-team-for-statistic">
                        {match.home_team_country} vs {match.away_team_country}
                    </div>
                    <div className="match-num-time-for-statistic">
                        <div className="time-match-for-statistic">
                            {`${date.getDate()}/${date.getMonth() + 1}`}
                        </div>
                        <div className="num-attend-for-statistic">
                            {isInfo}
                        </div>
                    </div>
                </div>
            )}

            {match && isBracket && (
                <NavLink to={`/matches/${id}`} className='my-nav-link-match'>
                    <div className="left__about-match-for-bracket">
                        <div className="name-stage-bracket">
                            <h4>{match.stage_name}</h4>
                            <h4 className="date-match-bracket">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h4>  
                        </div>                      
                        {
                            home_team && away_team && homeTeam && awayTeam && (
                                <div className="info-match-bracket">
                                    <div className="img"><img className="img-match-team" src={homeTeam[0]} alt="team" /></div>
                                    <div className="team-name"><h4>{match.home_team.name}</h4></div>
                                    <div className="team-goal"><h4>{match.home_team.goals}{match.home_team.goals === match.away_team.goals ? (
                                        ` (PK ${match.home_team.penalties})`
                                    ) : null}</h4>
                                    </div>

                                    <div className="img"><img className="img-match-team" src={awayTeam[0]} alt="team" /></div>
                                    <div className="team-name"><h4>{match.away_team.name}</h4></div>
                                    <div className="team-goal"><h4>{match.away_team.goals}{match.home_team.goals === match.away_team.goals ? (
                                        ` (PK ${match.away_team.penalties})`
                                    ) : null}</h4>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </NavLink>
            )}
        </>
    )
}

export default Match;
