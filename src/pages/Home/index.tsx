import styles from './Home.module.css'
import { AspectRatio, Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Banner from 'pages/Banner'
import Navbar from 'pages/Navbar'
import Nav from 'pages/Nav'
import Overview from 'pages/Overview'
import Footer from 'pages/Footer'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Banner />
      <Nav />
      <Overview />
      <Footer />
    </div>
  )
}

export default Home

