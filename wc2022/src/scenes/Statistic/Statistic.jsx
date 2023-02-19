import { useEffect, useState } from 'react';
import { getStatistic } from '../../apis/statisticAPI';
import Match from '../../containers/Match/Match';
import Player from '../../containers/Player/Player';
import './Statistic.css'

const Statistic = () => {
    const [statistic, setStatistic] = useState({});

    const loadStatistic = async () => {
        const result = await getStatistic();
        setStatistic(result);
    }

    const topGoal = statistic.top_goal;

    const topAssist = statistic.top_assist

    const topRed = statistic.top_red_card;

    const topAttend = statistic.top_attendance;

    useEffect(() => {
        loadStatistic();
    }, [])

    return (
        <div>
            {statistic && topGoal && (
                <div className='statistic'>
                    <div className="title-tour">
                        <div className="demo-title-tour">Danh hiệu</div>
                        <div className="golden-ball">
                            Quả bóng vàng: {statistic.golden_ball}
                        </div>
                        <div className="golden-boot">
                            Giày vàng: {statistic.golden_boot}
                        </div>
                        <div className="golden-glove">
                            Găng tay vàng: {statistic.golden_glove}
                        </div>
                        <div className="youngster">
                            Cầu thủ trẻ xuất sắc: {statistic.youngster}
                        </div>
                        <div className="fair-play">
                            Đội tuyển fair play: {statistic.fair_play}
                        </div>
                    </div>

                    <div className='top-goal'>
                        <div className='demo-top-goal'>Vua phá lưới</div>
                        <div className="top-goal-player">
                            {topGoal.map((player, index) => {
                                return (
                                    <div key={index}><Player playerId={player.idPlayer} isInfo={player.goal} /></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='top-assist'>
                        <div className='demo-top-assist'>Vua kiến tạo</div>
                        <div className="top-assist-player">
                            {topAssist.map((player, index) => {
                                return (
                                    <div key={index}><Player playerId={player.idPlayer} isInfo={player.assist} /></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="top-red">
                        <div className='demo-top-red'>Top thẻ đỏ</div>
                        <div className="top-red-player">
                            {topRed.map((player, index) => {
                                return (
                                    <div key={index}><Player playerId={player.idPlayer} isInfo={player.num_red_card} /></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="top-attend">
                        <div className="demo-top-attend">Các trận có đông khán giả nhất</div>
                        <div className="top-attend-match">
                            {topAttend.map((match, index) => {
                                return (
                                    <div key={index}><Match idMatch={match.matchId} isInfo={match.number_attend} /></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Statistic;
