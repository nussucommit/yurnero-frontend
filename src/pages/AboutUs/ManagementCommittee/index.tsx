import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ManagementCommittee.module.css'
import { Member } from './Member'
import { directors, comm } from './comm'

const ManagementCommittee = () => {
  return (
    <>
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
        <div className={styles.MainBody}>
          <div className={styles.DirectorContainer}>
            {directors.map(dir => {
              return <Member {...dir} />
            })}
          </div>
          <div className={styles.MemberContainer + ' container'}>
            {comm.map(member => {
              return <Member {...member} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagementCommittee
