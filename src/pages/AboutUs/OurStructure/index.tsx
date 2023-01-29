import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './OurStructure.module.css'
import TeamCard from './TeamCard'
import { useOurStructure } from './useOurStructure'

const OurStructure = () => {
  const { overview, teams } = useOurStructure()
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
          {overview.map((component: any, index) => {
            if (component.type === 'paragraph') {
              const content = component.content.at(0)?.content
              return <p key={index}>{content}</p>
            } else if (component.type === 'heading') {
              return <h2 key={index}>{component.content}</h2>
            } else {
              return null
            }
          })}
        </div>
        <div className={styles.SubSection}>
          <h2>Our Teams</h2>
          <p className="mb-0">
            You do not need to be an IT expert to be part of our family. There are six teams in commIT with people with
            different talents in it.
          </p>
          <div className={styles.SubSection}>
            {teams.map(team => {
              // @ts-ignore
              return <TeamCard {...team} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStructure
