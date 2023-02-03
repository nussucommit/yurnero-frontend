import styles from './StudentDevelopementPlatform.module.css'
import { Link } from 'react-router-dom'
import Header from "pages/Header"
import { useFetchData } from "common/hooks/useFetchData"
import { CircularProgress } from "@chakra-ui/progress";
import { Routes } from 'constants/routes'
import { ContentItem, convertContentItems } from "../../common/ContentItem"

const StudentDevelopementPlatform = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + "/sdp")

  return (
    <div className={styles.StudentDevelopementPlatform}>
    <Header />
    <div className={styles.TitleBar}>
      <div className={styles.NavLinks}>
        <Link to="/">HOME</Link>
        <p>/</p>
        <Link to="/sdp">SERVICES</Link>
      </div>
      <h1>Student Development Platform (SDP)</h1>
    </div>
    <div className={styles.Content}>
          {isLoading ? 
            <CircularProgress isIndeterminate color='blue.300' style={{display: "flex", justifyContent: "center"}}/> 
            :
            convertContentItems(content as ContentItem[])
          }
    </div>
      <h1>StudentDevelopementPlatform</h1>
    </div>
  )
}

export default StudentDevelopementPlatform