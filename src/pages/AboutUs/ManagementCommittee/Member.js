import { Image } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './ManagementCommittee.module.css'

export const Member = props => {
  const { name, pic, position, faculty, year, icon } = props
  return (
    <div className={styles.MemberBox}>
      <div className={styles.ImageBox}>
        <Image src={pic} />
      </div>
      <div className={styles.Card}>
        <div className={styles.Icon}>
          <Image src={icon} className={styles.IconImage} />
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.PositionBox}>
            <h3 className={styles.Position}>{position}</h3>
          </div>
          <h4 className={styles.Name}>{name}</h4>
          <h5 className={styles.Faculty}>{faculty}</h5>
          <h5 className={styles.Year}>{year}</h5>
        </div>
        {/* <div className={styles.Link}>
          <a href="#">
            <i className="fa-brands fa-linkedin-in" arial-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-envelope" arial-hidden="true"></i>
          </a>
        </div> */}
      </div>
    </div>
  )
}
