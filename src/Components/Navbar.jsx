import { useState } from 'react'
import Logo from '../assets/shared/logo.svg'
import menuBtn from '../assets/shared/icon-hamburger.svg'
import { NavLink } from 'react-router-dom'
import SideMenu from '../Components/SideMenu'

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false)

  const liveLink = 'navText underline decoration-2, underline-offset-[40px]'

  return (
    <>
      <nav className="w-screen h-[96px] py-3 pl-3 pr-3 lg:pl-3 lg:py-3 flex items-center justify-between fixed top-0">
        {/* LOGO */}
        <img
          src={Logo}
          alt="logo"
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
        />
        {/* MENU */}
        <div className=" w-[55%] ml-auto py-10 hidden md:flex items-center justify-evenly bg-transparent lg:bg-[#979797] lg:bg-opacity-10 lg:backdrop-blur-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? liveLink
                : 'navText hover:underline hover:decoration-2 hover:underline-offset-[40px]'
            }
            onClick={() => setActiveTab('home')}
          >
            <span className="hidden lg:inline">00</span> HOME
          </NavLink>
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive
                ? liveLink
                : 'navText hover:underline hover:decoration-2 hover:underline-offset-[40px]'
            }
            onClick={() => setActiveTab('destination')}
          >
            <span className="hidden lg:inline">01</span> DESTINATION
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive
                ? liveLink
                : 'navText hover:underline hover:decoration-2 hover:underline-offset-[40px]'
            }
            onClick={() => setActiveTab('crew')}
          >
            <span className="hidden lg:inline">03</span> CREW
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive
                ? liveLink
                : 'navText hover:underline hover:decoration-2 hover:underline-offset-[40px]'
            }
            onClick={() => setActiveTab('technology')}
          >
            <span className="hidden lg:inline">04</span> TECHNOLOGY
          </NavLink>
        </div>
        {/* MENU TOGGLE BUTTON */}
        {!isOpen && (
          <button onClick={() => setIsOpen(true)}>
            <img
              src={menuBtn}
              alt="menu-button"
              className="text-defaultBlue md:hidden"
            />
          </button>
        )}
      </nav>
      <SideMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  )
}

export default Navbar
