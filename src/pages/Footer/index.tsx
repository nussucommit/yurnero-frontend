import { Container, Image, StylesProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.nav}>
        <p className={styles.title}>NUSSU CommIT</p>
        <div className={styles.list}>
          <Container>
            <ul>
              <li>
                <strong>About Us</strong>
              </li>
              <li>
                <Link to="/our-family">Our Family</Link>
              </li>
              <li>
                <Link to="/vision-mission">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/our-structure">Our Structure</Link>
              </li>
              <li>
                <Link to="/management-committee">Management Committee</Link>
              </li>
            </ul>
          </Container>
          <Container>
            <ul>
              <li>
                <strong>Services</strong>
              </li>
              <li>
                <Link to="/computer-centres">Computer Centres</Link>
              </li>
              <li>
                <Link to="/training-workshops">Training Workshops</Link>
              </li>
              <li>
                <Link to="/external-workshops">External Training Workshops</Link>
              </li>
              <li>
                <Link to="/sdp">Student Development Platform (SDP)</Link>
              </li>
            </ul>
          </Container>
          <Container>
            <ul>
              <li>
                <strong>Events</strong>
              </li>
              <li>
                <Link to="/cyberia">Cyberia</Link>
              </li>
              <li>
                <Link to="/creation">CREATION</Link>
              </li>
              <li>
                <Link to="/chariteach">charITeach</Link>
              </li>
            </ul>
          </Container>
          <Container>
            <ul>
              <li>
                <Link to="/feedback">
                  <strong>Feedback</strong>
                </Link>
              </li>
            </ul>
          </Container>
          <Container className={styles.img}>
            <a href="https://facebook.com/NUSSUcommIT/">
              <Image src="/src/images/facebook.png"></Image>
            </a>
          </Container>
        </div>
      </div>

      <div className={styles.support}>
        <p>Supported by:</p>
        <a href="http://acadia.sg/">
          <Image src="https://www.nussucommit.com/images/acadia.png"></Image>
        </a>
      </div>

      <div className={styles.footnote}>
        <div className={styles.content}>
          <Container className={styles.links}>
            <Link to="/pdpa">Pesonal Data Protection</Link>
            <Link to="/contact">Contact Us</Link>
          </Container>
          <Container className={styles.copyright}>
            <p>© 2022 National University of Singapore Students' Union Committee for Information Technology</p>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Footer
