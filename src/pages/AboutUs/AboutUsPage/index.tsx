import { Link } from 'react-router-dom'

import { Container, Heading, Text } from '@chakra-ui/react'

import styles from './AboutUsPage.module.css'

const AboutUsPage = () => {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
        </div>
        <h1>The Story</h1>
      </div>
      <Container className={styles.Content}>
      <Heading 
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        lineHeight={'110%'}
        py={6}
        color={'blue.900'}
        alignContent={'center'}>
        We provide IT services and trainings for the NUS community. 
      </Heading>      
        <p>
          It all started in the dawn of the new millenia. As the great, incessant wave of Information Technology (IT)
          started to take over our lives, it became inevitable that education, as a vital part of civilisation, adopted
          IT.
        </p>
        <Text
          fontFamily={'heading'}
          fontWeight={600}
          mb={3}
          fontSize={'2xl'}
          color={'blue.600'}>
          From the need, came the birth of us...
        </Text>
        <p>
          From the adoption, came the need to have an organization to provide IT services to the NUS community. From the
          need, came the birth of us, the <strong> NUS Students’ Union Committee for Information Technology (NUSSU commIT)</strong>. 
        </p>
        <p>
          Today, apart from providing IT services at our <Link className={styles.Links}
            to="/computer-centres" 
            style={{color: 'darkblue', textDecoration: 'underline'}}>two centres at YIH and AS8</Link>, we provide plenty of <Link 
          to="/training-workshops" 
          style={{color: 'darkblue', textDecoration: 'underline'}}> software 
          training workshops</Link>and <Link to="/external-workshops" style={{color: 'darkblue', textDecoration: 'underline'}}>specialised training events</Link>catered to the NUS community. Our aim is to provide the NUS
          community with any technology necessary for them to ace their studies and to equip them with the IT skills
          necessary to excel and differentiate themselves in their future careers.
        </p>
      </Container>
      
    </div>
  )
}

export default AboutUsPage
