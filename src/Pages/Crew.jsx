import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Crew = () => {
  const [crews, setCrews] = useState([])
  const [activeCrew, setActiveCrew] = useState('douglas hurley')

  useEffect(() => {
    const getData = async () => {
      await fetch('data.json')
        .then((res) => res.json())
        .then((data) => setCrews(data.crew))
        .catch((e) => console.error(e))
    }
    getData()
  }, [])

  return (
    <div className="crew w-screen h-screen overflow-y-auto">
      <div className="flex items-center justify-start pt-[80px] md:pt-[125px] lg:ml-20">
        <h1 className="w-full font-sans text-white text-center text-[16px] tracking-[2.7px] md:text-left md:pl-6 lg:text-[28px] lg:tracking-[4.72px]">
          <span className="font-bold opacity-30">02</span>&nbsp; MEET YOUR CREW
        </h1>
      </div>
      {/* CREW DETAILS */}
      {crews
        .filter((item) => item.name.toLowerCase() === activeCrew)
        .map((item) => (
          <div
            key={item.name}
            className="w-[80%] flex flex-col items-center justify-center mx-auto md:flex-col-reverse lg:flex-row-reverse lg:gap-4"
          >
            {/* IMAGE DIV */}
            <div className="flex justify-center items-center mx-auto mt-8 border-b-[0.5px] border-b-gray-500 md:border-none  ">
              <img
                src={item.images.webp}
                alt={item.name}
                className=" object-center w-[177.12px] h-[222px] mx-auto md:w-full md:h-[572px] lg:w-[568.07px] lg:h-[712px]"
              />
            </div>
            {/* DETAILS DIV */}
            <div className="mt-8 flex flex-col items-center justify-start  md:flex-col-reverse md:gap-12">
              {/* DOTS */}
              <AnimatePresence>
                <ul className="flex items-center justify-center gap-4 md:gap-5 md:mt-8 lg:justify-start lg:mr-auto lg:mt-32">
                  <motion.li
                    initial={{ opacity: 0, y: '-1rem' }}
                    animate={{ opacity: 100, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
                    className={`w-2 h-2 cursor-pointer ${
                      activeCrew === 'douglas hurley'
                        ? 'bg-white'
                        : 'bg-gray-500'
                    } hover:opacity-100 rounded-full md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]`}
                    onClick={() => setActiveCrew('douglas hurley')}
                  ></motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: '-1rem' }}
                    animate={{ opacity: 100, y: 0 }}
                    transition={{ delay: 1, duration: 0.5, ease: 'easeIn' }}
                    className={`w-2 h-2 cursor-pointer ${
                      activeCrew === 'mark shuttleworth'
                        ? 'bg-white'
                        : 'bg-gray-500'
                    } hover:opacity-100 rounded-full md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]`}
                    onClick={() => setActiveCrew('mark shuttleworth')}
                  ></motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: '-1rem' }}
                    animate={{ opacity: 100, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5, ease: 'easeIn' }}
                    className={`w-2 h-2 cursor-pointer ${
                      activeCrew === 'victor glover'
                        ? 'bg-white'
                        : 'bg-gray-500'
                    } hover:opacity-100 rounded-full md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]`}
                    onClick={() => setActiveCrew('victor glover')}
                  ></motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: '-1rem' }}
                    animate={{ opacity: 100, y: 0 }}
                    transition={{ delay: 2, duration: 0.5, ease: 'easeIn' }}
                    className={`w-2 h-2 cursor-pointer ${
                      activeCrew === 'anousheh ansari'
                        ? 'bg-white'
                        : 'bg-gray-500'
                    } hover:opacity-100 rounded-full md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]`}
                    onClick={() => setActiveCrew('anousheh ansari')}
                  ></motion.li>
                </ul>
              </AnimatePresence>
              {/* CREW INFO */}
              <div className="mt-6 flex flex-col items-center justify-start md:2-[458px] md:h-[182px] lg:items-start">
                {/* DESIGNATION */}
                <h2 className="font-serif text-white text-center text-[16px] uppercase opacity-50 md:text-[24px] lg:text-left">
                  {item.role}
                </h2>
                {/* NAME */}
                <h1 className="mt-2 font-serif text-white text-[24px] uppercase md:text-[40px] lg:text-left">
                  {item.name}
                </h1>
                {/* DESCRIPTION */}
                <p className=" mt-4 text-bodyText text-customBlue text=[16px[ leading-[25px] text-center w-[327px] px-6 md:leading-[28px] md:w-[458px] md:px-12 lg:text-left lg:px-0 lg:pr-36 lg:text-[18px] lg:leading-[32px]">
                  <TypeAnimation
                    sequence={item.bio}
                    speed={50}
                    repeat={0}
                    cursor={false}
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Crew
