import { CircularProgress } from "@chakra-ui/progress";
import { ContentItem, convertContentItems } from "common/ContentItem";
import { useFetchData } from "common/hooks/useFetchData";
import { Routes } from "constants/routes";
import Header from "pages/Header";
import { Link } from 'react-router-dom'
import styles from './TrainingWorkshops.module.css'

const TrainingWorkshops = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + "/training-workshops")

  return (
    <div className={styles.TrainingWorkshops}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/training-workshops">SERVICES</Link>
        </div>
        <h1>Training Workshops</h1>
      </div>
      <div className={styles.Content}>
          {isLoading ? 
            <CircularProgress isIndeterminate color='blue.300' style={{display: "flex", justifyContent: "center"}}/> 
            :
            convertContentItems(content as ContentItem[])
          }
      </div>
    </div>
  )
}

export default TrainingWorkshops
