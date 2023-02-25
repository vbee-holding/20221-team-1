import { useParams } from 'react-router-dom';
import { SubNavForTeam } from '../../components/subnav/SubNav';
import GroupByTeam from '../../containers/GroupByTeam/GroupByTeam';
import KnockoutByTeam from '../../containers/KnockoutByTeam/KnockoutByTeam';
import Match from '../../containers/Match/Match';
import './DetailTeam.css';

const DetailTeam = () => {
    const id = useParams();

    // đây sẽ là id để lấy thông tin về team
    const idTeam = id.id;

    const GroupMatch = GroupByTeam({ idTeam });

    const KnockoutMatch = KnockoutByTeam({ idTeam });
    return (
        <div className='team-match-detail'>
            <SubNavForTeam idTeam={idTeam} />
            <div className="match-team-group-knock">
                {
                    GroupMatch && (
                        <>
                            <div style={{ color: 'white', fontWeight: 'bold', margin:'0px 0px 10px 30px' }}>Trận đấu vòng bảng</div>
                            <div className="match-team-group">
                                {GroupMatch.map((match, index) => {
                                    return (
                                        <div className='match-box' key={index}>
                                            <Match idMatch={match.id} />
                                        </div>
                                    )
                                })}
                            </div>
                        </>)
                }
                {
                    KnockoutMatch && (
                        <>
                            <div style={{ color: 'white', fontWeight: 'bold', margin:'15px 0px 10px 30px' }}>Trận đấu loại vòng loại trực tiếp</div>
                            <div className="match-team-knockout">
                                {KnockoutMatch.map((match, index) => {
                                    return (
                                        <div className='match-box' key={index}>
                                            <Match idMatch={match.id} />
                                        </div>
                                    )
                                })}
                            </div>
                        </>)
                }
            </div>
        </div>
    )
}

export default DetailTeam;
