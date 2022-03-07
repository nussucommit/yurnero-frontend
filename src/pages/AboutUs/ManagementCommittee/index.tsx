import { Link } from 'react-router-dom'
import styles from './ManagementCommittee.module.css'

const ManagementCommittee = () => {
  return (
    <div className={styles.ManagementCommittee}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/management-committee">MANAGEMENT COMMITTEE</Link>
        </div>
        <h1>30th Management Committee</h1>
      </div>
    </div>
  )
}

export default ManagementCommittee
