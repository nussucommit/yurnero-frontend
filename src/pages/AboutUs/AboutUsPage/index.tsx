import { Link } from 'react-router-dom'
import styles from './AboutUsPage.module.css'
import Header from 'pages/Header'
import { CircularProgress } from '@chakra-ui/progress'
import { useFetchData } from 'common/hooks/useFetchData'
import { ContentItem, convertContentItems } from 'common/ContentItem'
import { Routes } from 'constants/routes'

const AboutUsPage = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + Routes.aboutUs)

  return (
    <div className={styles.AboutUs}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/aboutus/overview">ABOUT US</Link>
        </div>
        <h1>The Story</h1>
      </div>
      <div className={styles.Content}>
        <div className={styles.Content}>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertContentItems(content as ContentItem[])
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
