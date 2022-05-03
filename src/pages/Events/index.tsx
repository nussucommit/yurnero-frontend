import { Link } from 'react-router-dom'
import { setDefaultResultOrder } from 'dns'
import { Image } from '@chakra-ui/react'
import styles from './Events.module.css'
import { link } from 'fs'

const Events = () => {
  return (
    <div className={styles.Events}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
        </div>
        <h1>Our Major Events</h1>
      </div>
      <div className={styles.Content}>
        <p>In NUSSU commIT, we strongly encourage our members to be actively involved in external projects and take on leadership roles. Each year, NUSSU commIT organizes three major projects, namely Cyberia Camp, CharITeach and CREATION.</p>
        <div className={styles.SubSection}>
          <h2>Cyberia Camp</h2>
          <Image src="" alt='Cyberia Poster'></Image>
          <p>This is a 3-day-2-night intensive learning camp where we impart IT skills in a fun and interactive camp setting. Our Adobe software trainings are conducted by IT training professionals during the term break in December. Upon completing the camp, every participant will receive an official training certificate.</p>
          <p>Cyberia Camp aims to raise the infocomm and technological knowledge of the general NUS student population. At the end of the camp, participants are expected to have basic proficiency in applications of the software. On top of being a training camp, students just wanna have fun, don’t we? Cyberia Camp synthesises the fun aspects of a camp, the joy of making new friends and a fruitful learning environment to create a truly memorable camp.</p>
          <p>Registration for Cyberia Camp usually opens in Semester 1 around October. Stay tuned to our announcements around campus, or <a href='./cyberia' className={styles.Link}><u>click here</u></a> for more information.</p>
        </div>
      </div>
    </div>
  )
}

export default Events
