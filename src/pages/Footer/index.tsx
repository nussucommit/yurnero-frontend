import { Container, Image, StylesProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Nav}>
        <p className={styles.Title}>NUSSU CommIT</p>
        <div className={styles.List}>
          <Container>
            <ul>
              <li>
                <strong>
                  <Link to="/aboutus/overview">About Us</Link>
                </strong>
              </li>
              <li>
                <Link to="/aboutus/our-family">Our Family</Link>
              </li>
              <li>
                <Link to="/aboutus/vision-and-mission">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/aboutus/our-structure">Our Structure</Link>
              </li>
              <li>
                <Link to="/aboutus/management-committee">Management Committee</Link>
              </li>
            </ul>
          </Container>
          <Container>
            <ul>
              <li>
                <strong>
                  <Link to="/computer-centres">Services</Link>
                </strong>
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
                <strong>
                  <Link to="/events/cyberia">Events</Link>
                </strong>
              </li>
              <li>
                <Link to="/events/cyberia">Cyberia</Link>
              </li>
              <li>
                <Link to="/events/creation">CREATION</Link>
              </li>
              <li>
                <Link to="/events/chariteach">charITeach</Link>
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
          <Container className={styles.Img}>
            <a href="https://facebook.com/NUSSUcommIT/">
              <Image src={require('../../images/facebook.png')}></Image>
              {/* <Image src="/src/images/facebook.png"></Image> */}
            </a>
          </Container>
        </div>
      </div>

      <div className={styles.Support}>
        <p>Supported by:</p>
        <a href="http://acadia.sg/">
          <Image src="https://www.nussucommit.com/images/acadia.png"></Image>
        </a>
      </div>

      <div className={styles.Footnote}>
        <div className={styles.Content}>
          <Container className={styles.Links}>
            <Link to="/pdpa">Pesonal Data Protection</Link>
            <Link to="/contact">Contact Us</Link>
          </Container>
          <Container className={styles.Copyright}>
            <p>© 2022 National University of Singapore Students' Union Committee for Information Technology</p>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Footer
