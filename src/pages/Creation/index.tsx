import { Link } from 'react-router-dom'
import styles from './Creation.module.css'
import { Routes } from 'constants/routes'
import { useFetchData } from 'common/hooks/useFetchData'
import { ContentItem, convertContentItems } from 'common/ContentItem'
import { CircularProgress } from '@chakra-ui/progress'

const URL = Routes.backendRoot + Routes.creation

const Creation = () => {
  const [isLoading, content] = useFetchData(URL)
  return (
    <div className={styles.Creation}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/CREATION">CREATION</Link>
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
