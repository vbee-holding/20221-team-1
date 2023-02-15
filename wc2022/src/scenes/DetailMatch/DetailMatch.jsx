import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { NavLink } from 'react-router-dom';
import { getMatch } from '../../apis/matchAPI';
import { InfoTeam } from '../../containers/Team/Team';
import './DetailMatch.css'
import Thumbnail from '../../containers/ThumbnailVideo/Thumbnail';
// import { SubNavForMatch } from '../../components/subnav/SubNav';

const DetailMatch = () => {
    const { id } = useParams();

    const [detailMatch, setDetailMatch] = useState({});

    useEffect(() => {
        loadMatch();
    }, [])

    const loadMatch = async () => {
        const result = await getMatch(id);
        setDetailMatch(result);
    }

    const date = new Date(detailMatch.datetime);

    const home_team = detailMatch.home_team_country;
    const away_team = detailMatch.away_team_country;

    const homeTeam = InfoTeam({ idTeam: home_team });
    const awayTeam = InfoTeam({ idTeam: away_team });

    const home_team_event = detailMatch.home_team_events;
    const away_team_event = detailMatch.away_team_events;

    return (
        <div>
            {detailMatch &&
                (
                    <>
                        {detailMatch && date && (
                            <div className="date-time-match">
                                {
                                    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
                                }
                            </div>
                        )}
                        {home_team && away_team && homeTeam && awayTeam && home_team_event && away_team_event && (
                            <div className='detail-match'>
                                <div className='detail-match-score'>

                                    <div className='home-team'>
                                        <NavLink to={`/team/${detailMatch?.home_team_country}`}>
                                            <div className="img-home-team">
                                                <img className='img' style={{ width: '100px', height: '100px' }} src={homeTeam[0]} alt="test" />
                                            </div>
                                        </NavLink>
                                        <NavLink to={`/team/${detailMatch?.home_team_country}`} style={{ color: 'white', textDecoration: 'none' }}>
                                            <div className="name-home-team">
                                                {homeTeam[1]}
                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className="two-team-score">
                                        {`${detailMatch.home_team.goals}-${detailMatch.away_team.goals}`}
                                        {detailMatch?.home_team?.penalties > 0 && detailMatch?.away_team?.penalties > 0 && (
                                            <div>Penalty: {`${detailMatch?.home_team?.penalties} - ${detailMatch?.away_team?.penalties}`}</div>
                                        )}
                                    </div>

                                    <div className='away-team'>
                                        <NavLink to={`/team/${detailMatch?.away_team_country}`}>
                                            <div className="img-away-team">
                                                <img className='img' style={{ width: '100px', height: '100px' }} src={awayTeam[0]} alt="test" />
                                            </div>
                                        </NavLink>
                                        <NavLink to={`/team/${detailMatch?.away_team_country}`} style={{ color: 'white', textDecoration: 'none' }}>
                                            <div className="name-away-team">
                                                {awayTeam[1]}
                                            </div>
                                        </NavLink>
                                    </div>

                                </div>

                                <div className="info-detail-match">
                                    {`${detailMatch.stage_name}`} {detailMatch.stage_name === 'First stage' && homeTeam[2]}
                                </div>
                                <div className="score-team">
                                    <div className="home-team-score">
                                        {home_team_event.map((e) => {
                                            if (e.type_of_event === 'goal') {
                                                return (
                                                    <div className='info-player-goal'>
                                                        <div className='player-goal'>
                                                            {e.player}
                                                        </div>
                                                        <div className="minute-player-goal">
                                                            {e.time}
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                    <div className='icon-football'>
                                        <SportsSoccerIcon />
                                    </div>
                                    <div className="away-team-score">
                                        {away_team_event.map((e) => {
                                            if (e.type_of_event === 'goal') {
                                                return (
                                                    <div className='info-player-goal'>
                                                        <div className="minute-player-goal">
                                                            {e.time}
                                                        </div>
                                                        <div className='player-goal'>
                                                            {e.player}
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        })}
                                    </div>
                                </div>

                                <div className="video-highlight">
                                    <Thumbnail link={detailMatch?.url} />
                                </div>

                                {/* <SubNavForMatch /> */}
                            </div>
                        )}
                    </>)}
        </div>
    )


}

export default DetailMatch;
