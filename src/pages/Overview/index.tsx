import { Image, Container } from '@chakra-ui/react'

import styles from './Overview.module.css'
import { Routes } from 'constants/routes'
import { useFetchData } from 'common/hooks/useFetchData'
import { ContentItem, convertContentItems } from 'common/ContentItem'
import { CircularProgress } from '@chakra-ui/progress'

const BACKEND_API_HOME_ROUTE = Routes.backendRoot;
const COMMIT_HOST_URL = "https://www.nussucommit.com"
const TRAINING_WORKSHOP_ROUTE = "/home/training-workshops/"
const ELEVATE_CREATIVITY_ROUTE = "/home/elevate-the-creativity/"
const COMPUTER_CENTER_ROUTE = "/home/study-print-scan/"

const Overview = () => {
  const [isLoadingTW, trainingWorkshopData] = useFetchData(BACKEND_API_HOME_ROUTE + TRAINING_WORKSHOP_ROUTE)
  const [isLoadingEC, elevateCreativityData] = useFetchData(BACKEND_API_HOME_ROUTE + ELEVATE_CREATIVITY_ROUTE)
  const [isLoadingCC, computerCenterData] = useFetchData(BACKEND_API_HOME_ROUTE + COMPUTER_CENTER_ROUTE)
  
  let trainingWorkshopContentDisplay;
  let elevateCreativityContentDisplay;
  let computerCenterContentDisplay;

  //I'm not 100% sure on handling this one, the backend formatting is incorrect so need to update. basically the backend currently adds and enclosing [] on top of the actual ContentItem[], but not sure
  if((trainingWorkshopData as ContentItem[]).length !== 0){
    trainingWorkshopContentDisplay = convertContentItems((trainingWorkshopData as ContentItem[])[0] as ContentItem[])
  }
  if((elevateCreativityData as ContentItem[]).length !== 0){
    elevateCreativityContentDisplay = convertContentItems((elevateCreativityData as ContentItem[])[0] as ContentItem[])
  }
  if((computerCenterData as ContentItem[]).length !== 0){
    computerCenterContentDisplay = convertContentItems((computerCenterData as ContentItem[])[0] as ContentItem[])
  }
  
  return (
    <div className={styles.Overview}>
      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>TRAINING WORKSHOP</p>
            {isLoadingTW ? <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} /> : trainingWorkshopContentDisplay}
          </Container>
        </div>
        <Container>
          <Image src="https://www.nussucommit.com/images/homepage/workshop.jpg"></Image>
        </Container>
      </div>

      <div className={styles.Colordiff}>
        <div className={styles.Section}>
          <Container>
            <Image src="https://www.nussucommit.com/images/homepage/events.jpg"></Image>
          </Container>
          <div className={styles.Content}>
            <Container>
              <p>ELEVATE THE CREATIVITY</p>
              {isLoadingEC ? <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} /> : elevateCreativityContentDisplay}
            </Container>
          </div>
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>STUDY, PRINT OR SCAN</p> 
            {isLoadingCC ? <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} /> : computerCenterContentDisplay}
          </Container>
        </div>
        <Container>
          <Image src="https://www.nussucommit.com/images/homepage/centre.jpg"></Image>
        </Container>
      </div>
    </div>
  )
}

export default Overview