import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Destinations.css'
import { TypeAnimation } from 'react-type-animation'

const Destinations = () => {
  const [activeCard, setActiveCard] = useState('moon')
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch('data.json')
        .then((res) => res.json())
        .then((data) => setDestinations(data.destinations))
        .catch((e) => console.error(e))
    }
    getData()
  }, [])

  return (
    <div className="destination h-screen w-screen pt-[100px] overflow-y-auto">
      <h1 className="font-sans text-[16px] text-white tracking-[2.7px] text-center md:mt-6 md:text-left md:pl-8 lg:text-[28px] lg:tracking-[4.72px] lg:ml-40">
        <span className="font-bold opacity-30">01</span>&nbsp; PICK YOUR
        DESTINATION
      </h1>

      {destinations
        .filter((item) => item.name.toLowerCase() === activeCard)
        .map((item) => (
          <div
            className="flex flex-col items-center justify-start md:mt-12 lg:flex-row md:items-center md:justify-evenly lg:mt-2"
            key={item.name}
          >
            <img
              src={item.images['webp']}
              alt={item.name.toLowerCase()}
              className="w-[170px] h-[170px] mt-6 md:w-[300px] md:h-[300px] lg:w-[322px]"
            />

            {/* CARD */}
            <div className="flex flex-col items-center lg:items-start lg:min-w-[444px] lg:min-h-[486px]">
              {/* Card MENU */}
              <AnimatePresence>
                <ul
                  className={`mt-6 flex items-center justify-center gap-4 p-3 text-white font-sans text-[14px] md:mt-8 md:text-[16px] md:w-[285px] md:tracking-[2.7px] lg:justify-start lg:pl-0 lg:gap-9`}
                >
                  <motion.li
                    whileHover={{ scale: 2 }}
                    onHoverEnd={{ scale: 0 }}
                    className={`${
                      activeCard === 'moon'
                        ? 'underline underline-offset-8'
                        : ''
                    } cursor-pointer hover:underline hover:underline-offset-8`}
                    onClick={() => setActiveCard('moon')}
                  >
                    MOON
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 2 }}
                    onHoverEnd={{ scale: 0 }}
                    className={`${
                      activeCard === 'mars'
                        ? 'underline underline-offset-8'
                        : ''
                    } cursor-pointer hover:underline hover:underline-offset-8`}
                    onClick={() => setActiveCard('mars')}
                  >
                    MARS
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 2 }}
                    onHoverEnd={{ scale: 0 }}
                    className={`${
                      activeCard === 'europa'
                        ? 'underline underline-offset-8'
                        : ''
                    } cursor-pointer hover:underline hover:underline-offset-8`}
                    onClick={() => setActiveCard('europa')}
                  >
                    EUROPA
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 2 }}
                    onHoverEnd={{ scale: 0 }}
                    className={`${
                      activeCard === 'titan'
                        ? 'underline underline-offset-8'
                        : ''
                    } cursor-pointer hover:underline hover:underline-offset-8`}
                    onClick={() => setActiveCard('titan')}
                  >
                    TITAN
                  </motion.li>
                </ul>
              </AnimatePresence>

              {/* CARD TITLE */}
              <h1 className="font-serif text-white text-[56px] md:text-[80px] lg:text-[100px]">
                {item.name.toUpperCase()}
              </h1>

              {/* CARD DESCRIPTION */}
              <p className="font-bodyText text-customBlue text-[15px] text-center leading-[25px] min-h-[118px] max-w-[327px] md:text-[18px] md:leading-[28px] md:min-w-[573px] lg:leading-[32px] lg:max-w-[444px] lg:text-left lg:min-h-[128px]">
                <TypeAnimation
                  sequence={item.description}
                  speed={50}
                  repeat={0}
                  cursor={false}
                />
              </p>

              {/* HORIZONTAL LINE */}
              <hr className="w-[85%] mt-5 border-gray-00 md:mt-10" />

              {/* Card Footer */}
              <div className=" pt-6 flex flex-col items-center gap-3 md:flex-row md:gap-20">
                <motion.div
                  initial={{ x: '-3rem', opacity: 0 }}
                  animate={{ x: 0, opacity: 100 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="font-sans text-customBlue text-[14px] tracking-[2.36px]">
                    AVG. DISTANCE
                  </p>
                  <h2 className="font-serif text-[28px] uppercase text-center text-white">
                    {item.distance}
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ x: '3rem', opacity: 0 }}
                  animate={{ x: 0, opacity: 100 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="font-sans text-customBlue text-[14px] tracking-[2.36px]">
                    AVG. TRAVEL TIME
                  </p>
                  <h2 className="font-serif text-[28px] uppercase text-center text-white">
                    {item.travel}
                  </h2>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Destinations
