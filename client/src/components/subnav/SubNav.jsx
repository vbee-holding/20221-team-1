import { NavLink } from "react-router-dom"
import './SubNav.css'

export const SubNavForTeam = (props) => {
    return (
        <ul className="sub-nav">
            <li><NavLink className='navlink_sub_nav' to=''>Trận đấu</NavLink></li>
            <li><NavLink className='navlink_sub_nav' to='post'>Tin tức</NavLink></li>
            <li><NavLink className='navlink_sub_nav' to='rank'>Bảng xếp hạng</NavLink></li>
            <li><NavLink className='navlink_sub_nav' to='players'>Cầu thủ</NavLink></li>
        </ul>
    )
}
