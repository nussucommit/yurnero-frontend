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
      <div className={styles.Colordiff}>
        <div className={styles.Section}>
          <div className={styles.title}>
            <Box
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
            >
              <p className={styles.info}>HOME / SERVICES</p>
              <h2 className={styles.computerCentreHeader}>Our Computer Centres</h2>
            </Box>
          </div>
        </div>
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
