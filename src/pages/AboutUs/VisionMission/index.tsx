import 'bootstrap/dist/css/bootstrap.css'
import styles from './VisionMission.module.css'
import { Link } from 'react-router-dom'
import { ContentItem, renderMissionContentFromApi } from './helper'
import { useEffect, useState } from 'react'
import { response } from './response'

const URL = 'http://localhost:8000/aboutus/vision-and-mission/'

const VisionMission = () => {
  const [content, setContent] = useState<ContentItem[]>(response)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL).then(resp => resp.json())
      setContent(result as ContentItem[])
    }
    fetchData()
  }, [])
  return (
    <div className={styles.VisionMission}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/about-us">ABOUT US</Link>
          <p>/</p>
          <Link to="/about-us/vision-mission">VISION & MISSION</Link>
        </div>
        <h1>Our Vision & Mission</h1>
      </div>
      <div className={styles.Content}>
        <div className={styles.Vision + ' row'}>
          <div className={styles.VisionImage + ' col-md-5'}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9003/9003282.png"
              alt="Telescope"
              className={styles.Telescope}
            />
          </div>
          <div className={'col-md-7 ' + styles.VisionContent}>
            <h2>Our Vision</h2>
            <div className={styles.Underline + ' mx-auto'}></div>
            <ul>
              <li>
                <span>To prepare the NUS community for the future by equipping them with the necessary IT skills.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.Mission + ' row'}>
          <div className={styles.MissionContent + ' col-md-7'}>
            <h2>Our Mission</h2>
            <div className={styles.Underline + ' mx-auto'}></div>
            {renderMissionContentFromApi(content)}
            {/* <ul>
              <li>
                <span>
                  Provide top quality <strong>IT services</strong> that supports the functioning of the members of the
                  NUS community.
                </span>
              </li>
              <li>
                <span>
                  Provide the NUS community with opportunities to pick up relevant <strong>IT skills</strong>.
                </span>
              </li>
              <li>
                <span>
                  Adapt to an ever-changing world and spearhead innovation in the
                  <strong> IT field</strong> in the NUS community.
                </span>
              </li>
            </ul> */}
          </div>
          <div className={styles.MissionImage + ' col-md-5'}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1183/1183866.png"
              alt="Mission"
              className={styles.Scroll}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionMission
