import styles from './AboutUsPage.module.css'
import { AspectRatio, Button, ButtonGroup, Container } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const AboutUsPage = () => {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="about-us">ABOUT US</Link>
        </div>
      <h1>The Story</h1>
      </div>
      <Container className={styles.Content}>
        <p>It all started in the dawn of the new millenia. As the great, incessant wave of Information Technology (IT) started to take over our lives, it became inevitable that education, as a vital part of civilisation, adopted IT.</p>
        <h2>From the need, came the birth of us...</h2>
        <p>From the adoption, came the need to have an organization to provide IT services to the NUS community. From the need, came the birth of us, the NUS Students’ Union Committee for Information Technology (NUSSU commIT) .</p>
        <p>Today, apart from providing IT services at our two centres at YIH and AS8, we provide plenty of software training workshops and specialised training events catered to the NUS community. Our aim is to provide the NUS community with any technology necessary for them to ace their studies and to equip them with the IT skills necessary to excel and differentiate themselves in their future careers.</p>
      </Container>
    </div>
  )
}

export default AboutUsPage
