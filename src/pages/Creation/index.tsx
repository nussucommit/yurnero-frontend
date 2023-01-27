import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Creation.module.css'
import { TimeLine } from './TimeLine'
import { response } from './response'
import { renderContentFromApi } from './helper'

type ContentItem = {
  type?: string
  content?: ContentItem[] | string
  attribute?: any
  children?: ContentItem[]
  result?: any
}

const URL = 'http://localhost:3000/creation'

const Creation = () => {
  const [content, setContent] = useState<ContentItem[]>(response)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL).then(resp => resp.json())
      setContent(result as ContentItem[])
    }
    fetchData()
  }, [])
  return (
    <div className={styles.Creation}>
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/events">EVENTS</Link>
          <p>/</p>
          <Link to="/events/CREATION">CREATION</Link>
        </div>
        <h1>CREATION</h1>
      </div>
      <div className={styles.CreationContent}>{renderContentFromApi(content)}</div>
      {/* <div className={styles.CreationContent}>
        <p>
          CREATION is one of NUSSU commIT's annual flagship events, a digital design competition open to all NUS
          students. CREATION hopes to provide a platform for NUS students to pursue their artistic passion and foster
          their design skills by tackling real-world problem statements. Visit <a href="#">New Website Link</a>for more
          information!
        </p>
        <h2>
          CREATION 2023: Expressing Emotions Through <span className={styles.ArtLabelDesign}>Art</span> !
        </h2>
        <div className={styles.Underline}></div>
        <p>
          CREATION 2023 aims to push the boundaries of students to do more than the ordinary. We believe in the power of
          art in changing people's minds and we hope that the artworks produced through our competition will inspire
          people to change. We are planning to collaborate with companies, NUS offices, and NUSSU committees to set up
          problem statements for participants to design. The problem statements can be in the form of designing posters,
          seasonal greetings, t-shirt design, and other publicity collaterals. Additionally, we will organize free
          workshops to help you hone your skills before the competition itself. You could win attractive prizes too!
        </p>
        <h2>Timeline</h2>
        <div className={styles.Underline}></div>
        <TimeLine />
        <p>
          You will have around five weeks to design for any problem statements that you are interested in. Throughout
          these weeks, we will host a series of free workshops (Basic Photoshop Workshop, Advanced Photoshop Workshop
          and Basic Illustrator Workshop) that you can attend, so don't worry if you are not confident with your current
          design skills! At the end of the competition, you will be invited to attend our closing ceremony, where you
          can pitch your designs to our partners.
        </p>
        <h2>Past CREATION</h2>
        <div className={styles.Underline}></div>
        <p>
          In the last CREATION, we partnered with NUSSU Welfare, NUS Development Office, and NUS Enterprise to host
          three problem statements:
        </p>
        <ul>
          <li>Designing Welfare Diary for NUS students</li>
          <li>Designing key visual for NUS Commencement Class Giving 2022</li>
          <li>Designing promotional poster for NUS Overseas College (NOC)</li>
        </ul>
        <p>Winning designs were awarded amazing prizes such as Apple iPad and Nintendo Switch.</p>
        <h2>Contact Us</h2>
        <div className={styles.Underline}></div>
        <p>
          Visit <a href="#">creation2023.nussucommit.com</a>for more information! See you in CREATION 2023!
        </p>
      </div> */}
    </div>
  )
}

export default Creation
