import { Link } from 'react-router-dom'
import styles from './Creation.module.css'
import { Routes } from 'constants/routes'
import { useFetchData } from 'common/hooks/useFetchData'
import { ContentItem, convertContentItems } from 'common/ContentItem'
import { CircularProgress } from '@chakra-ui/progress'
import Header from 'pages/Header'

const URL = Routes.backendRoot + '/creation'

const Creation = () => {
  const [isLoading, content] = useFetchData(URL)
  return (
    <div className={styles.Creation}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/creation">CREATION</Link>
        </div>
        <h1>CREATION</h1>
      </div>
      <div className={styles.CreationContent}>
        {isLoading ? (
          <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
        ) : (
          convertContentItems(content as ContentItem[])
        )}
      </div>
    </div>
  )
}

export default Creation
