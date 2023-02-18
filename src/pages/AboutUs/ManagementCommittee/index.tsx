import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ManagementCommittee.module.css'
import { Member } from './Member'
import { useManagementCommittees } from './useManagementCommittees'

const ManagementCommittee = () => {
  const { chairpersons, committees } = useManagementCommittees()
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
            {chairpersons.map(dir => {
              // @ts-ignore
              return <Member {...dir} />
            })}
          </div>
          <div className={styles.MemberContainer + ' container'}>
            {committees.map(member => {
              // @ts-ignore
              return <Member {...member} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagementCommittee
