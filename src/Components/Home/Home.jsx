import { useEffect } from 'react'

import video from '../../assets/video1.mp4'
import aeroplane from '../../assets/aeroplane1.png'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500' >Fly with us and experience the world</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

export default Home
