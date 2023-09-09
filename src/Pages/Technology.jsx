import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Technology = () => {
  const [activeTech, setActiveTech] = useState('launch vehicle')
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch('data.json')
        .then((res) => res.json())
        .then((data) => setTechnologies(data.technology))
        .catch((e) => console.error(e))
    }
    getData()
  }, [])

  return (
    <div className="technology w-screen h-screen flex flex-col items-center justify-start overflow-y-auto">
      {/* HEADING DIV */}
      <div className="w-full mt-[80px] flex items-center justify-center md:mt-[150px] md:justify-start md:px-6">
        <h1 className="font-sans  text-white text-[18px] text-center tracking-[2.7px] md:text-left lg:text-[28px] lg:tracking-[4.72px] lg:ml-48">
          <span className="font-bold opacity-30">03</span> SPACE LAUNCH 101
        </h1>
      </div>

      {/* TECHNOLOGY DETAILS */}
      {technologies
        .filter((item) => item.name.toLowerCase() === activeTech)
        .map((item) => (
          <div
            key={item.name}
            className="mt-6 flex flex-col items-center justify-start md:mt-10 md:h-[310px] lg:flex-row-reverse lg:justify-evenly lg:h-full lg:w-screen lg:mb-20"
          >
            {/* IMAGE DIV */}
            <div className="w-full lg:w-[25%]">
              <img
                src={item.images.landscape}
                alt="item.name"
                className="object-cover lg:hidden"
              />
              <img
                src={item.images.portrait}
                alt="item.name"
                className="object-center hidden lg:flex w-full h-[527px]"
              />
            </div>

            {/* BUTTON & DETAILS DIV */}
            <div className="flex flex-col items-center justify-start gap-10 lg:flex-row lg:justify-center lg:w-[75%] lg:h-full lg:ml-24">
              {/* BUTTON  */}
              <AnimatePresence>
                <ul className="mt-6 flex items-center justify-center p-3 gap-4 font-serif text-[16px] md:mt-10 md:[text-24px] md:tracking-[1.5px] md:gap-6 lg:flex-col lg:text-[32px] lg:tracking-[2px] lg:w-[25%] lg:ml-[50px]">
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
                    className={`w-[40px] h-[40px] rounded-full cursor-pointer ${
                      activeTech === 'launch vehicle'
                        ? 'bg-white text-black border-none'
                        : 'bg-transparent text-white border border-white border-opacity-40'
                    } hover:border-none hover:bg-white hover:text-black flex items-center justify-center transition-all duration-500 ease-out md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] `}
                    onClick={() => setActiveTech('launch vehicle')}
                  >
                    1
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ delay: 1, duration: 0.5, ease: 'easeIn' }}
                    className={`w-[40px] h-[40px] rounded-full cursor-pointer ${
                      activeTech === 'spaceport'
                        ? 'bg-white text-black border-none'
                        : 'bg-transparent text-white border border-white border-opacity-40'
                    } hover:border-none hover:bg-white hover:text-black flex items-center justify-center transition-all duration-500 ease-out md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] `}
                    onClick={() => setActiveTech('spaceport')}
                  >
                    2
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    transition={{ delay: 1.5, duration: 0.5, ease: 'easeIn' }}
                    className={`w-[40px] h-[40px] rounded-full cursor-pointer ${
                      activeTech === 'space capsule'
                        ? 'bg-white text-black border-none'
                        : 'bg-transparent text-white border border-white border-opacity-40'
                    } hover:border-none hover:bg-white hover:text-black flex items-center justify-center transition-all duration-500 ease-out md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] `}
                    onClick={() => setActiveTech('space capsule')}
                  >
                    3
                  </motion.li>
                </ul>
              </AnimatePresence>

              {/* DETAILS DIV */}
              <div className="flex flex-col items-center justify-start gap-3 w-[327px] h-[420px] md:w-[458px] md:h-[237px] md:gap-5 lg:h-full lg:w-full lg:justify-center lg:items-start">
                {/* HEADER DIV */}
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h2 className="font-sans  text-[14px] tracking-[2.36px] text-customBlue md:text-[16px] md:tracking=[2.7px]">
                    THE TERMINOLOGY...
                  </h2>
                  <h1 className="font-serif text-[24px] text-white uppercase md:text-40px] lg:text-[56px] w-full">
                    {item.name}
                  </h1>
                </div>
                {/* DETAILS DIV */}
                <div className="lg:w-[444px]">
                  <p className="text-bodyText text-customBlue text-[15px] text-center leading-[25px] px-[6px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:text-left lg:p-[7px] lg:min-h-[174px]">
                    <TypeAnimation
                      sequence={item.description}
                      speed={50}
                      repeat={0}
                      cursor={false}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Technology
