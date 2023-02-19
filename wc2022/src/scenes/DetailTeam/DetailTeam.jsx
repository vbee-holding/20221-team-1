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
        <div>
            <div style={{ color: 'white', textAlign: 'center', backgroundColor: '#56042C', border: '1px solid wheat' }}>Thông tin về {idTeam}</div>
            <SubNavForTeam />
            <div className="match-team-group-knock">
                {
                    GroupMatch && (
                        <>
                            <div style={{ color: 'white', fontWeight: 'bold' }}>Trận đấu vòng bảng</div>
                            <div className="match-team-group">
                                {GroupMatch.map((match, index) => {
                                    return (
                                        <div key={index}>
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
                            <div style={{ color: 'white', fontWeight: 'bold' }}>Trận đấu loại vòng loại trực tiếp</div>
                            <div className="match-team-knockout">
                                {KnockoutMatch.map((match, index) => {
                                    return (
                                        <div key={index}>
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
