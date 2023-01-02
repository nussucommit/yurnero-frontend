import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styles from './ExternalWorkshops.module.css'

type Content = {
  title: string;
  description: string;
}

const ExternalWorkshops = () => {
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(
        (res) => {
          setContent(res as Content[])
        }
      )
  }, [])

  return (
    <div className={styles.ExternalWorkshops}>
      {/* add header here */}
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/external-workshops">SERVICES</Link>
        </div>
        <h1>External Training Workshops</h1>
      </div>
      <div className={styles.Content}>
        {
          content.map((item, idx) => (
            <div key={idx}>
              <p className={styles.ContentTitle}>{item.title}</p>
              <p className={styles.ContentDescription}>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ExternalWorkshops
