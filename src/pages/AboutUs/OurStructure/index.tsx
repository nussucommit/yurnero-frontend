import { Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './OurStructure.module.css'
import TeamCard from './TeamCard'
import { teams } from './teams'

const OurStructure = () => {
  return (
    <div className={styles.OurStructure}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/our-structure">OUR STRUCTURE</Link>
        </div>
        <h1>Our Structure</h1>
      </div>
      <div className={styles.Content}>
        <div className={styles.SubSection}>
          <h2>SIGN UP HAS ALREADY CLOSED!</h2>
          <p>Thank you for your interest. See you next year!</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Our Teams</h2>
          <p className="mb-0">
            You do not need to be an IT expert to be part of our family. There are six teams in commIT with people with
            different talents in it.
          </p>
          <div className={styles.SubSection}>
            {teams.map(team => {
              return <TeamCard {...team} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStructure
