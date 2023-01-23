import { ContentItem, convertContentItems } from "pages/helper";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styles from './Chariteach.module.css'

const Chariteach = () => {
  const [content, setContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(
        (res) => {
          setContent(res as ContentItem[])
        }
      )
  }, [])

  return (
    <div className={styles.Chariteach}>
      {/* add header here */}
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/chariteach">CHARITEACH</Link>
        </div>
        <h1>charITeach 2021</h1>
      </div>
      <div className={styles.Content}>
        {convertContentItems(content)}
      </div>
    </div>
  )
}

export default Chariteach
