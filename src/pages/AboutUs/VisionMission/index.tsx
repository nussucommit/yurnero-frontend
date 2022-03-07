import { setDefaultResultOrder } from 'dns'
import styles from './VisionMission.module.css'
import { Link } from 'react-router-dom'

const VisionMission = () => {
  return (
    <div className={styles.VisionMission}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/vision-mission">VISION & MISSION</Link>
        </div>
        <h1>Our Family</h1>
      </div>
      <div className={styles.Content}>
        <h2>Our Vision</h2>
        <p>To prepare the NUS community for the future by equipping them with the necessary IT skills.</p>
        <h2>Our Mission</h2>
        <div className={styles.Mission}>
          <ul>
            <li>Provide top quality IT services that supports the functioning of the members of the NUS community.</li>
            <li>Provide the NUS community with opportunities to pick up relevant IT skills.</li>
            <li>Adapt to an ever-changing world and spearhead innovation in the IT field in the NUS community.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMission
