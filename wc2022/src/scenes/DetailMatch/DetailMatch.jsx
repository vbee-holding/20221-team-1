import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { NavLink } from 'react-router-dom';
import { getMatch } from '../../apis/matchAPI';
import { InfoTeam } from '../../containers/Team/Team';
import Thumbnail from '../../containers/ThumbnailVideo/Thumbnail';
import MatchTab from '../../components/matchTab/MatchTab';
import Coach from '../../containers/Coach/Coach';
import CustomModal from '../../components/customModal/CustomModal';
import './DetailMatch.css';

const DetailMatch = () => {
    const [detailMatch, setDetailMatch] = useState({});

    const { id } = useParams();

    const loadMatch = async () => {
        const result = await getMatch(id);
        setDetailMatch(result);
    }

    const date = new Date(detailMatch.datetime);

    const home_team = detailMatch.home_team_country;
    const away_team = detailMatch.away_team_country;

    const homeTeam = InfoTeam({ idTeam: home_team });
    const awayTeam = InfoTeam({ idTeam: away_team });

    const homeTeamCoach = Coach({ idTeam: home_team });
    const awayTeamCoach = Coach({ idTeam: away_team });

    const home_team_event = detailMatch.home_team_events;
    const away_team_event = detailMatch.away_team_events;

    const home_team_lineup = detailMatch.home_team_lineup;
    const away_team_lineup = detailMatch.away_team_lineup;

    const [openHomeCoach, setOpenHomeCoach] = useState(false);
    const handleOpenHomeCoach = () => setOpenHomeCoach(true);
    const handleCloseHomeCoach = () => setOpenHomeCoach(false);

    const [openAwayCoach, setOpenAwayCoach] = useState(false);
    const handleOpenAwayCoach = () => setOpenAwayCoach(true);
    const handleCloseAwayCoach = () => setOpenAwayCoach(false);

    // const [openVenue, setOpenVenue] = useState(false);
    // const handleOpenVenue = () => setOpenVenue(true);
    // const handleCloseVenue = () => setOpenVenue(false);

    useEffect(() => {
        loadMatch();
    }, [])

    return (
        <div>
            {detailMatch &&
                (<>
                    <CustomModal
                        open={openHomeCoach}
                        handleClose={handleCloseHomeCoach}
                        coach={homeTeamCoach}
                    />

                    <CustomModal
                        open={openAwayCoach}
                        handleClose={handleCloseAwayCoach}
                        coach={awayTeamCoach}
                    />

                    {detailMatch && date && (
                        <div className="date-time-match">
                            {
                                `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
                            }
                        </div>
                    )}
                    {home_team && away_team && homeTeam && awayTeam && home_team_event && away_team_event && home_team_lineup && away_team_lineup && homeTeamCoach && awayTeamCoach && (
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
                                    {home_team_event.map((e, index) => {
                                        if (e.type_of_event === 'goal') {
                                            return (
                                                <div key={index} className='info-player-goal'>
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
                                    {away_team_event.map((e, index) => {
                                        if (e.type_of_event === 'goal') {
                                            return (
                                                <div key={index} className='info-player-goal'>
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

                            <div className="detail-match-tab">
                                <MatchTab detail={detailMatch} homeTeam={homeTeam} awayTeam={awayTeam} />
                            </div>

                            <div className="coach-team">
                                <div onClick={handleOpenHomeCoach} className="coach-home-team">
                                    {homeTeamCoach?.name}
                                </div>

                                <div className="demo-coach">
                                    Huấn luyện viên
                                </div>

                                <div onClick={handleOpenAwayCoach} className="coach-away-team">
                                    {awayTeamCoach?.name}
                                </div>
                            </div>

                            <div className="stadium" >
                                Sân vận động: {detailMatch?.venue}
                            </div>

                            <div className="bench-team">
                                <div className="bench-team-demo">Cầu thủ dự bị</div>
                                <div className="bench-team-detail">
                                    <div className="bench-home-team">
                                        {
                                            home_team_lineup?.substitutes.map((player, index) => {
                                                return (
                                                    <div key={index} className="bench-player">{player?.name}</div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="bench-away-team">
                                        {
                                            away_team_lineup?.substitutes.map((player, index) => {
                                                return (
                                                    <div key={index} className="bench-player">{player?.name}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>)}
        </div>
    )


}

export default DetailMatch;
