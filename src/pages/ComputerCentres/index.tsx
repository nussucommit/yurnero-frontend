import { ContentItem, convertContentItems } from '../../common/ContentItem'
import { Link } from 'react-router-dom'
import styles from './ComputerCentres.module.css'
import Header from 'pages/Header'
import { useFetchData } from 'common/hooks/useFetchData'
import { CircularProgress } from '@chakra-ui/progress'
import { Routes } from 'constants/routes'
import { Box } from '@chakra-ui/react'

const ComputerCentres = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + Routes.computerCentres)

  console.log(content)

  return (
    <div className={styles.ComputerCentres}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/computer-centres">SERVICES</Link>
        </div>
        <h1>Our Computer Centres</h1>
      </div>
      <div className={styles.Content}>
        {isLoading ? (
          <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
        ) : (
          convertContentItems(content as ContentItem[])
        )}
      </div>
    </div>
  )
}

export default ComputerCentres
