import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './OurFamily.module.css'

const OurFamily = () => {
  return (
    <div className={styles.OurFamily}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/our-family">OUR FAMILY</Link>
        </div>
        <h1>Our Family</h1>
      </div>
      <div className={styles.Content}>
        <p>
          We are a group of fun-loving people, committed to serving and empowering the NUS community. We are driven by
          the same vision and the same belief.
        </p>
        <Image src="https://www.nussucommit.com/images/our-family.jpg"></Image>
        <p>
          We call ourselves a family, because we essentially are one, apart from the fact that we don’t have a HDB flat
          and a family car. We compensate that by having our own YIH centre, located strategically near a toilet, a
          water dispenser, a 7 Eleven, and we have the Kent Ridge MRT station nearby!
        </p>
        <p>
          In every semester, we have a few welfare events to bring all our family members together and have fun. We
          believe that varsity life should not be only about chiong-ing and getting good grades, it is also about
          building ever-lasting friendships! Our long history of lovely relationships stemming from NUSSU commIT is a
          testament to that.
        </p>
        <p>
          We have our own orientation event, cooking event, talent event, photo-taking sessions, and sports event. After
          a long year of working hard together, we round it all up with our NUSSU commIT Appreciation Dinner where we
          will perform to each other by cells, have great food and say farewell to each other as we embark onto another
          year, knowing that, we will never walk alone once we are a part of the NUSSU commIT family.
        </p>
        <p>Interested and want to be a part of this family? Come join us at our recruitment events!</p>
      </div>
    </div>
  )
}

export default OurFamily
