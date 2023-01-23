import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styles from './Cyberia.module.css'
import axios from 'axios'
import { data } from "./temp"
import { ContentItem, convertContentItems } from "../helper"

type Content = {
  title: string;
  description: string;
}

const Cyberia = () => {
  const [content, setContent] = useState<ContentItem[]>(data);

  useEffect(() => {
    // axios.get("http://localhost:8000/cyberia", {
    //   headers: {
    //     // "Content": "Application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     // "Access-Control-Allow-Headers": "*",
    //     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //   }
    // }).then(res => console.log(res))

  //   fetch("http://localhost:8000/cyberia", {
  //     mode: "no-cors"
  //   })
  //     // .then(res => res.json())
  //     .then(
  //       (res) => {
  //         console.log(res)
  //         // setContent(res as Content[])
  //       }
  //     )
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
        {convertContentItems(content)}
      </div>
    </div>
  )
}

export default Cyberia
