import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from './OurStructure.module.css'

const OurStructure = () => {
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
      <div className = {styles.Content}>
        <p>You do not need to be an IT expert to be part of our family. There are six teams in commIT with people with different talents in it.</p>
        <div className={styles.SubSection}>
          <h2>SIGN UP HAS ALREADY CLOSED!</h2>
          <p>Thank you for your interest. See you next year!</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Marketing Team - The Marketers</h2>
          <Image src="https://www.nussucommit.com/images/cells/marketing.jpg"></Image>
          <p>If you enjoy networking and you would like to brush up your public relation skills, the marketing team is the place for you. By joining the marketing team, you will help us to bridge to external organizations like Singtel, Adobe, Fujitsu, DBS etc. Most importantly, you are also our lovely family member and involved in the daily running of the center.</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Publicity Team - The Designers</h2>
          <Image src="https://www.nussucommit.com/images/cells/publicity.jpg"></Image>
          <p>If you think you are creative and like to think out of the box, this is the perfect place for you to develop your talents. From designing posters to directing photo shoots for commIT members, you can do anything that you can think of to maintain and improve NUSSU commIT’s good image.</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Technical Team - The Coders</h2>
          <Image src="https://www.nussucommit.com/images/cells/technical.jpg"></Image>
          <p>If you are the kind of person whom your friends always look for when they have troubles with their computers and you are always glad when you can help them, commIT technical team will help you to develop your IT skill and knowledge by working with people that have same talent as you who will share their skill and knowledge to you as well.</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Training Team - The Teachers</h2>
          <Image src="https://www.nussucommit.com/images/cells/training.jpg"></Image>
          <p>If you enjoy learning and sharing your knowledge, you should join the training team to conduct software training workshops for NUS students. No previous software knowledge is required, but you should have willingness to learn and passion to share your knowledge to others. You will also get the opportunity to improve your confidence and communication skills by being a software trainer.</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Welfare Team - The Funmakers</h2>
          <Image src="https://www.nussucommit.com/images/cells/welfare.jpg"></Image>
          <p>If you have the passion to bring joy to people around you, you should be a part of our family and organize fun events for commIT members. No specific skills are required, just a heart to bring joy for commIT and a commitment to serve the NUS community.</p>
        </div>
        <div className={styles.SubSection}>
          <h2>Operations & Logistics Team - The Unsung Heroes</h2>
          <Image src="https://www.nussucommit.com/images/cells/opslogs.jpg"></Image>
          <p>If you have a good eye for detail and are passionate about serving the NUS community, the operations & logistics team is for you. You will be the pillar of support of commIT who ensures that our computer centres run smoothly and also provide logistics support to all the other teams to ensure that our workshops and events run smoothly.</p>
        </div>
      </div>
    </div>
  )
}

export default OurStructure
