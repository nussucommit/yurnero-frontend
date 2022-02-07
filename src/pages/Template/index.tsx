import styles from './Template.module.css'
import { AspectRatio, Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Banner from 'pages/Banner'
import Navbar from 'pages/Navbar'
import Nav from 'pages/Nav'
import Overview from 'pages/Overview'
import Footer from 'pages/Footer'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
