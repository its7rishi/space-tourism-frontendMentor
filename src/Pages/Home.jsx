import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactTyped from 'react-typed'

const Home = ({ setActiveTab }) => {
  // const navigate = useNavigate()

  const descText =
    "Let's face it; if you want to go to space, you might as well genuinely go to the outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience"

  /* 'Let&apos;s face it&semi; if you want to go to space, you might as
  well genuinely go to outer space and not hover kind of on the edge of
  it. Well sit back, and relax because we&apos;ll give you a truly out
  of this world experience!'` */

  const handleClick = () => {
    setActiveTab('destinations')
  }
  return (
    <section className="mt-16 flex flex-col items-center justify-start w-full h-screen lg:flex-row lg:justify-around overflow-y-auto">
      <div className="mt-12 px-8 flex flex-col justify-center items-center gap-3 max-w-[327px] md:max-w-[450px] max-h-[324px] lg:max-h-[382] md:mt-44 md:px-12 md:gap-5 lg:items-start lg:px-5">
        <h5 className="font-sans text-center text-[16px]  tracking-[2.7px] font-ultrathin text-customBlue md:text-[20px] md:tracking-[3.28px] lg:text-left lg:text-[28px] lg:tracking-[4.72px]">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="font-serif text-white text-[80px] leading-[100px] md:text-[150px] md:leading-[150px] lg:text-left lg:text-[150px] lg:leading-auto">
          SPACE
        </h1>
        <p className="paraText text-[15px] min-h-[118px] text-center text-customBlue leading-[25px] md:text-[16px] md:leading-[28px] lg:text-left lg:text-[18px] lg:leading-[32px] lg:px-7 lg:min-h-[118px]">
          <ReactTyped
            strings={[`${descText}`]}
            typeSpeed={30}
            cursorChar="|"
            showCursor={false}
          />
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.1, ease: 'easeIn' }}
      >
        <Link
          to="/destinations"
          className="mt-24 w-[150px] h-[150px] rounded-full flex items-center justify-center bg-white font-serif text-[20px] tracking-[1.25px] outline-none active:outline-none ring-0  hover:ring-[30px] hover:ring-gray-400 hover:ring-opacity-20 transition duration-500 ease-in-out lg:w-[274px] lg:h-[274px] lg:text-[32px] lg:tracking-[2px] lg:hover:ring-[50px]"
          onClick={handleClick}
        >
          EXPLORE
        </Link>
      </motion.div>
    </section>
  )
}

export default Home
