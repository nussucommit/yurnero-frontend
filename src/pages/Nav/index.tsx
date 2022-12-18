import styles from './Nav.module.css'

type NavInfoProps = {
  title: string,
  subtitle: string,
  path: string,
}

const NavInfo: NavInfoProps[] = [
  {
    title: "COMPUTER CENTRES",
    subtitle: "Study, print or scan",
    path:"/computer-centres"
  },
  {
    title: "TRAINING WORKSHOPS",
    subtitle: "Stay relevant in the digital world",
    path:"/training-workshops"
  },
  {
    title: "MAJOR EVENTS",
    subtitle: "Make a difference",
    path:"/events"
  },
  {
    title: "CONTACT US",
    subtitle: "Get in touch",
    path:"/contact"
  },
]

const Nav = () => {
  return (
    <div className={styles.Nav}>
      {
        NavInfo.map((info, idx) => (
          <div key={idx} className={styles.NavItem}>
            <a href={info.path}>
              <div className={styles.NavTitle}>{info.title}</div>
              <div className={styles.NavSubtitle}>{info.subtitle}</div>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Nav
