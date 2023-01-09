import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styles from './Cyberia.module.css'

type Content = {
  title: string;
  description: string;
}

const Cyberia = () => {
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
    <div className={styles.Cyberia}>
      {/* add header here */}
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/cyberia">CYBERIA CAMP</Link>
        </div>
        <h1>Cyberia Camp 2021</h1>
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

export default Cyberia
