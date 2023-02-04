import { CircularProgress, Image } from '@chakra-ui/react'
import { useFetchData } from 'common/hooks/useFetchData'
import { Routes } from 'constants/routes'
import { Link } from 'react-router-dom'
import styles from './OurFamily.module.css'
import { ContentItem, convertContentItems } from 'common/ContentItem'
import { renderOurFamilyFromApi } from './helper'

const URL = Routes.backendRoot + Routes.ourFamily

const OurFamily = () => {
  const [isLoading, content] = useFetchData(URL)
  return (
    <div className={styles.OurFamily}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/our-family">OUR FAMILY</Link>
        </div>
        <h1>Our Family</h1>
      </div>
      <div className={styles.Content}>
        {isLoading ? (
          <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
        ) : (
          renderOurFamilyFromApi(content as ContentItem[], 0)
        )}
      </div>
    </div>
  )
}

export default OurFamily
