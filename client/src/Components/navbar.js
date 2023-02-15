import { Component } from "react";
import "./navbarStyle.css"
import { NavLink } from 'react-router-dom'
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <div>
                        <a href="index.html">
                            <img id="logo_wc" src="https://cdn-ukwest.onetrust.com/logos/236f1ae3-e97b-4fdf-9cb6-0803d748da2f/5ebc1394-b1a3-4a42-88c6-20bb30cc3831/48d0f561-6f01-496b-b552-aebd8fb0cbf3/logo_(1).png" alt="logo"></img>
                        </a>
                    </div>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            {/* <li>
                    <a href="#">Trận đấu</a>
                </li>
                <li>
                    <a href="#">Tin tức</a>
                </li>
                <li>
                    <a href="#">Sơ đồ thi đấu</a>
                </li>
                <li>
                    <a href="#">Cầu thủ</a>
                </li>
                <li>
                    <a href="#">Bảng xếp hạng</a>
                </li>
                <li>
                    <a href="#">Số liệu thống kê</a>
                </li> */}

                            <li><NavLink className='a_nav' to='/matches'>Trận đấu</NavLink></li>
                            <li><NavLink className='a_nav' to='/posts'>Tin tức</NavLink></li>
                            <li><NavLink className='a_nav' to='/knockout'>Sơ đồ thi đấu</NavLink></li>
                            <li><NavLink className='a_nav' to='/coaches'>Huấn luyện viên</NavLink></li>
                            <li><NavLink className='a_nav' to='/topPlayer'>Cầu thủ</NavLink></li>
                            <li><NavLink className='a_nav' to='/coaches'>Bảng xếp hạng</NavLink></li>
                            <li><NavLink className='a_nav' to='/coaches'>Số liệu thống kê</NavLink></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>

                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar; 