import { Link } from 'react-router-dom'
import { Image, Container } from '@chakra-ui/react'
import { syncBuiltinESMExports } from 'module'

import styles from './Overview.module.css'
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { relative } from 'path'

const BACKEND_API_HOME_ROUTE = "http://localhost:8000/";
const COMMIT_HOST_URL = "https://www.nussucommit.com"
const TRAINING_WORKSHOP_ROUTE = "home/training-workshops/"
const ELEVATE_CREATIVITY_ROUTE = "home/elevate-the-creativity/"
const COMPUTER_CENTER_ROUTE = "home/study-print-scan/"

const getDataFromResource = async (route: string) => {
  let data:any[] = []
  try{
    data = await (await axios.get(BACKEND_API_HOME_ROUTE + route, {})).data
  } catch(err){
    console.log(err)
  }
  let header = "";
  let body = [];
  console.log(data);
  if(data.length !== 0) {
    for(let i = 0; i < data[0].length; i++){
      const item = data[0][i]
      if(item.type == "heading"){
        header += item.content
      }else if(item.type == "paragraph"){
        let content = item.content;
        for(let j = 0; j < content.length; j++){
          let currItem = content[j];
          let url = "";
          if('link' in currItem.attribute){
            url = currItem.attribute.link;
          }
          const newObject = {content: currItem.content, url};
          body.push(newObject);
        }
        
      }
    }
  }

  
  return {header, body};
}

const Overview = () => {
  const [trainingWorkshopData, setTrainingWorkshopData] = useState({header: "", body:[{content:"", url:""}]})
  const [elevateCreativityData, setElevateCreativityData] = useState({header: "", body:[{content:"", url:""}]})
  const [computerCenterData, setComputerCenterData] = useState({header: "", body:[{content:"", url:""}]})

  React.useEffect(() =>{
    const trainingWorkshopData =  getDataFromResource(TRAINING_WORKSHOP_ROUTE).then(data => {
      setTrainingWorkshopData(data);
      
    });
    const elevateCreativityData = getDataFromResource(ELEVATE_CREATIVITY_ROUTE).then(data => {
      setElevateCreativityData(data);
    });
    const computerCenterData = getDataFromResource(COMPUTER_CENTER_ROUTE).then(data => {
      setComputerCenterData(data);

    });
  }, []);
  const dataToDisplayMapper = (data : any)=>{
    if(data.url !== ""){
      let absoluteURL = data.url;
      const relativeURL = absoluteURL.slice(COMMIT_HOST_URL.length);

      return <Link to={relativeURL} className={styles.Link}>
        {data.content}
      </Link>
    } else{
      return <p>
        {data.content}
      </p>
    }
  }
  const trainingWorkshopContentDisplay = trainingWorkshopData.body.map(dataToDisplayMapper);
  const elevateCreativityContentDisplay = elevateCreativityData.body.map(dataToDisplayMapper);
  const computerCenterContentDisplay = computerCenterData.body.map(dataToDisplayMapper);

  return (
    <div className={styles.Overview}>
      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>TRAINING WORKSHOP</p>
            <h1>{trainingWorkshopData.header}</h1>
            {trainingWorkshopContentDisplay}
            {/* <Link to="/training-workshops" className={styles.Link}>
              WORKSHOPS OFFERED
            </Link> */}
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
              <h1>{elevateCreativityData.header}</h1>
              {elevateCreativityContentDisplay}
              {/* <Link to="/events" className={styles.Link}>
                FIND AN EVENT
              </Link> */}
            </Container>
          </div>
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Content}>
          <Container>
            <p>STUDY, PRINT OR SCAN</p>
            <h1>{computerCenterData.header}</h1>
            {computerCenterContentDisplay}
            {/* <Link to="/training-workshops" className={styles.Link}>
              LOCATE OUR CENTRES
            </Link> */}
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
