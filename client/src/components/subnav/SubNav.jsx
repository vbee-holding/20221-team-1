import { Link } from "react-router-dom"
import './SubNav.css'

export const SubNavForTeam = (props) => {
    const reload = () => {
        window.location.reload();
    }
    const { idTeam } = props;
    return (
        <>
            <div className="team-detail-header">
                <h3>Thông tin đội tuyển: {idTeam}</h3>
            </div>
            <ul className="sub-nav">
                <li  onClick={reload}><Link className='navlink_sub_nav' to={`/team/${idTeam}`} >Trận đấu</Link></li>
                <li  onClick={reload}><Link className='navlink_sub_nav' to={`/team/${idTeam}/postbyteam`} >Tin tức</Link></li>
                <li  onClick={reload}><Link className='navlink_sub_nav' to={`/team/${idTeam}/rankbyteam`} >Bảng xếp hạng</Link></li>
                <li  onClick={reload}><Link className='navlink_sub_nav' to={`/team/${idTeam}/playersbyteam`} >Cầu thủ</Link></li>
            </ul>
        </>
    )
}
