import { useState } from "react"
import { NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state);
    }

    return (
        <nav>
            <div>
                <NavLink to='/'>
                    <img id="logo_wc" src="https://cdn-ukwest.onetrust.com/logos/236f1ae3-e97b-4fdf-9cb6-0803d748da2f/5ebc1394-b1a3-4a42-88c6-20bb30cc3831/48d0f561-6f01-496b-b552-aebd8fb0cbf3/logo_(1).png" alt="logo"></img>
                </NavLink>
            </div>

            <div>
                <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
                    <li><NavLink className='a_nav' to='/'>Trận đấu</NavLink></li>
                    <li><NavLink className='a_nav' to='/posts'>Tin tức</NavLink></li>
                    <li><NavLink className='a_nav' to='/bracket'>Sơ đồ thi đấu</NavLink></li>
                    <li><NavLink className='a_nav' to='/topPlayer'>Cầu thủ</NavLink></li>
                    <li><NavLink className='a_nav' to='/rank'>Bảng xếp hạng</NavLink></li>
                    <li><NavLink className='a_nav' to='/statistic'>Số liệu thống kê</NavLink></li>
                </ul>
            </div>

            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={state ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
        </nav>
    )
}

export default Header
