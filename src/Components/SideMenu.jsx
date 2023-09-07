import closeBtn from '../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SideMenu = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  const handleClick = (page) => {
    setActiveTab(page)
    setIsOpen(false)
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: '-100%' },
  }

  return (
    isOpen && (
      <motion.div
        animate={isOpen ? 'open' : 'close'}
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="z-10 flex sm:hidden flex-col items-start justify-start px-3 pt-5 absolute top-0 right-0 w-[254px] h-full bg-customDark bg-opacity-30 backdrop-blur-xl transition-all duration-500 ease-in-out"
      >
        {/* MENU CLOSE BUTTON */}
        <div className="w-full mt-3 flex items-center justify-end">
          <button onClick={() => setIsOpen(false)}>
            <img
              src={closeBtn}
              alt="close-button"
              className="w-[19.09px] h-[19.09px] bg-transparent text-customBlue"
            />
          </button>
        </div>

        {/* SIDE MENU */}
        <ul className="mt-[6rem] ml-[2rem] flex flex-col justify-start gap-8">
          <li
            className={`navText cursor-pointer ${
              activeTab === 'home' ? 'underline underline-offset-[15px]' : ''
            } hover:underline hover:underline-offset-[15px]`}
            onClick={() => handleClick('home')}
          >
            <Link to="/">
              <span className="font-bold md:hidden lg:inline">00</span>
              &nbsp;HOME
            </Link>
          </li>
          <li
            className={`navText cursor-pointer${
              activeTab === 'destination'
                ? 'underline underline-offset-[15px]'
                : ''
            } hover:underline hover:underline-offset-[15px]`}
            onClick={() => handleClick('destination')}
          >
            <Link to="/destinations">
              <span className="font-bold md:hidden lg:inline">01</span>
              &nbsp;DESTINATION
            </Link>
          </li>
          <li
            className="navText cursor-pointer${
              activeTab === 'crew' ? 'underline underline-offset-[15px]' : ''
            } hover:underline hover:underline-offset-[15px]"
            onClick={() => handleClick('crew')}
          >
            <Link to="/crew">
              <span className="font-bold md:hidden lg:inline">02</span>
              &nbsp;CREW
            </Link>
          </li>
          <li
            className="navText cursor-pointer${
              activeTab === 'technology' ? 'underline underline-offset-[15px]' : ''
            } hover:underline hover:underline-offset-[15px]"
            onClick={() => handleClick('technology')}
          >
            <Link to="/technology">
              <span className="font-bold md:hidden lg:inline">03</span>
              &nbsp;TECHNOLOGY
            </Link>
          </li>
        </ul>
      </motion.div>
    )
  )
}

export default SideMenu
