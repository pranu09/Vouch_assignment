import React, { useState } from 'react'
import './Sidebar.css';
import searchIcon from '../../images/search.png'
import Avatar from '../../images/avatars.png'
import Logout from '../../images/logout.png'
import { Link, useNavigate } from 'react-router-dom';


const Sidebar = () => {

    const [issearch, setIssearch] = useState(false);
    const [isPlaceHolder, setIsPlaceHolder] = useState(true);
    const [activeTab,setActiveTab] = useState("VIEW_CLIENT")
    const navigate = useNavigate();

    function handleHumber() {
        const menu_toggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        menu_toggle.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    }
    function handlesearchChange() {
        setIssearch(true);
        setIsPlaceHolder(false);
    }

  const userLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }

    return (
        <>
            <div className="app">
                <div className="menu-toggle" onClick={handleHumber}>
                    <div className="hamburger">
                        <span onClick={() =>console.log("hfhdhdhdh")}></span>
                    </div>
                </div>

                <aside className="sidebar">
                    <h3 className='TITLE_VIEW'>Company Name</h3>
                    <div className='searchBar'>
                        {isPlaceHolder ? <>
                            <img className='searchIcon' src={searchIcon} />
                        </> : ''}
                        <input onChange={handlesearchChange} className='searchSidebar' type="text" placeholder='Search modules' />
                        {/* {issearch ? <p>Ak</p> : ''} */}

                    </div>
                    <h4>Client Master</h4>
                    <nav className="menu">
                        <Link to="/" className={activeTab === "VIEW_CLIENT" ? "menu-item is-active":"menu-item"} onClick={() =>setActiveTab("VIEW_CLIENT") }>View Clients</Link>
                        <Link to="/add_client" className={activeTab === "ADD_CLIENT" ? "menu-item is-active":"menu-item"} onClick={() =>setActiveTab("ADD_CLIENT") }>Add Client</Link>
                    </nav>
                    <div className='sideFooter'>
                        <div className='AvatarImg'>
                            <img src={Avatar} />
                        </div>
                        <div className='Avdetails'>
                            <h6>James Burton <br /><span>james@thevouch.digital</span></h6>

                        </div>
                        <div className='sidelogout'>
                            <img src={Logout} onClick={userLogout} />

                        </div>
                    </div>
                </aside>
              

            </div>
        </>
    )
}

export default Sidebar