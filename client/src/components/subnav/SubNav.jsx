import { Link } from "react-router-dom"
import './SubNav.css'

export const SubNavForTeam = (props) => {
    const { idTeam } = props;
    return (
        <>
            <div className="team-detail-header">
                <h3>Thông tin đội tuyển: {idTeam}</h3>
            </div>
            <ul className="sub-nav">
                <li><Link className='navlink_sub_nav' to={`/team/${idTeam}`} >Trận đấu</Link></li>
                <li><Link className='navlink_sub_nav' to={`/team/${idTeam}/postbyteam`} >Tin tức</Link></li>
                <li><Link className='navlink_sub_nav' to={`/team/${idTeam}/rankbyteam`} >Bảng xếp hạng</Link></li>
                <li><Link className='navlink_sub_nav' to={`/team/${idTeam}/playersbyteam`} >Cầu thủ</Link></li>
            </ul>
        </>
    )
}
