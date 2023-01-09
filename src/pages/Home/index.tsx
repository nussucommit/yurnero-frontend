import Banner from 'pages/Banner'
import Header from 'pages/Header'
import Nav from 'pages/Nav'
import Overview from 'pages/Overview'
import Footer from 'pages/Footer'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Banner />
      <Nav />
      <Overview />
      <Footer />
    </div>
  )
}

export default Home
