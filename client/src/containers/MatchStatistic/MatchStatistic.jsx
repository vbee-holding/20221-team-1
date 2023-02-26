import './MatchStatistic.css';

const MatchStatistic = (props) => {
    const homeStatistic = props.homeStatistic;
    const awayStatistic = props.awayStatistic;

    const homeTeam = props.homeTeam;
    const awayTeam = props.awayTeam;

    return (
        <>
            {homeStatistic && awayStatistic && homeTeam && awayTeam && (
                <div className="match-statistic">
                    <div className="match-statistic-detail">
                        <div className="home-team-statistic-info">
                            <div>
                                <img className="home-team-flag" style={{ width: '80px', height: '60px' }} src={homeTeam[0]} alt="team" />
                            </div>
                            <div className="home-team-name">
                                {homeTeam[1]}
                            </div>
                        </div>

                        <div className="demo">
                            Số liệu thống kê của hai đội
                        </div>

                        <div className="away-team-statistic-info">
                            <div >
                                <img className="away-team-flag" style={{ width: '80px', height: '60px' }} src={awayTeam[0]} alt="team" />
                            </div>
                            <div className="away-team-name">
                                {awayTeam[1]}
                            </div>
                        </div>
                    </div>

                    <div className="match-statistic-info">
                        <div className='match-statistic-about'>
                            <div className="home-statis-info">
                                {homeStatistic?.possession}%
                            </div>
                            <div className="statistic-info">
                                Quyền kiểm soát bóng
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.possession}%
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.attempted_passes}
                            </div>
                            <div className="statistic-info">
                                Số đường chuyền
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.attempted_passes}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.completed_passes}
                            </div>
                            <div className="statistic-info">
                                Số đường chuyền chính xác
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.completed_passes}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.total_shots}
                            </div>
                            <div className="statistic-info">
                                Số cú sút
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.total_shots}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.on_target}
                            </div>
                            <div className="statistic-info">
                                Số cú sút trúng đích
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.on_target}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.fouls}
                            </div>
                            <div className="statistic-info">
                                Phạm lỗi
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.fouls}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.corners}
                            </div>
                            <div className="statistic-info">
                                Phạt góc
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.corners}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.tackles}
                            </div>
                            <div className="statistic-info">
                                Tắc bóng
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.tackles}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.aerials_won}
                            </div>
                            <div className="statistic-info">
                                Không chiến
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.aerials_won}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.offsides}
                            </div>
                            <div className="statistic-info">
                                Việt vị
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.offsides}
                            </div>
                        </div>

                        <div className="match-statistic-about">
                            <div className="home-statis-info">
                                {homeStatistic?.throw_ins}
                            </div>
                            <div className="statistic-info">
                                Ném biên
                            </div>
                            <div className="away-statis-info">
                                {awayStatistic?.throw_ins}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default MatchStatistic;
