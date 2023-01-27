import { Link } from 'react-router-dom'
import styles from './Cyberia.module.css'
import { ContentItem, convertContentItems } from "../../common/ContentItem"
import Header from "pages/Header"
import { useFetchData } from "common/hooks/useFetchData"
import { CircularProgress } from "@chakra-ui/progress";
import { Routes } from 'constants/routes'

const Cyberia = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + "/cyberia")

  return (
    <div className={styles.Cyberia}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/cyberia">CYBERIA CAMP</Link>
        </div>
        <h1>Cyberia Camp</h1>
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

export default Cyberia
