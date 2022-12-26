import { Link } from 'react-router-dom'
import { Image, Container } from '@chakra-ui/react'
import { syncBuiltinESMExports } from 'module'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import styles from './Overview.module.css'

const Overview = () => {
  return (
    <div className={styles.Overview}>
      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>TRAINING WORKSHOP</p>
            <h1>Explore more through our workshops</h1>
            <p>
              Want to learn more about graphic design or navigating Excel like a pro? Fret not! Our own Training Cell
              members will conduct workshops for you to learn such skills and stay relevant in this digital world.
            </p>
            <Link to="/training-workshops" className={styles.Link}>
              WORKSHOPS OFFERED <ArrowForwardIcon />
            </Link>
          </Container>
        </div>
        <Container>
          <Image src="https://www.nussucommit.com/images/homepage/workshop.jpg"></Image>
        </Container>
      </div>

      <div className={styles.Colordiff}>
        <div className={styles.Section}>
          <Container>
            <Image src="https://www.nussucommit.com/images/homepage/events.jpg"></Image>
          </Container>
          <div className={styles.Content}>
            <Container>
              <p>ELEVATE THE CREATIVITY</p>
              <h1>Major Events</h1>
              <p>
                Every year, we organise 3 major events that are designed to ignite and raise the creativity of NUS
                students to the next level. They are Cyberia Camp, CREATION and charITeach and are designed to help you
                learn and share the fun at the same time!
              </p>
              <Link to="/events" className={styles.Link}>
                FIND AN EVENT <ArrowForwardIcon />
              </Link>
            </Container>
          </div>
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>STUDY, PRINT OR SCAN</p>
            <h1>Our Computer Centres</h1>
            <p>
              We manage 2 computer centres at YIH and AS8 to serve your daily IT needs! We provide printing and scanning
              facilities to help in your studies in NUS. Our friendly supervisors are also ready to assist you if you
              face any problems.
            </p>
            <Link to="/training-workshops" className={styles.Link}>
              LOCATE OUR CENTRES <ArrowForwardIcon />
            </Link>
          </Container>
        </div>
        <Container>
          <Image src="https://www.nussucommit.com/images/homepage/centre.jpg"></Image>
        </Container>
      </div>
    </div>
  )
}

export default Overview
