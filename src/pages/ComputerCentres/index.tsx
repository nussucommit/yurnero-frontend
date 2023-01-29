import { Link } from 'react-router-dom'
import { Image, Container } from '@chakra-ui/react'
import { syncBuiltinESMExports } from 'module'

import styles from './ComputerCentres.module.css'
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { relative } from 'path'
import { Box } from '@chakra-ui/react'

const BACKEND_API_HOME_ROUTE = "http://localhost:8000/computer-centres"; // why this have a ;
const COMMIT_HOST_URL = "https://www.nussucommit.com/computer-centres/"
const COMPUTER_CENTRES_ROUTE = "home/computer-centres/"

const getDataFromResource = async (route: string) => {
  let data:any[] = []
  try{
    data = await (await axios.get(BACKEND_API_HOME_ROUTE + route, {})).data
  } catch(err){
    console.log(err)
  }
  console.log(data);

  // to be changed
  let header = "";
  let body = [];

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


const ComputerCentres = () => {
  const [computerCentresData, setComputerCentresData] = useState({header: "", body:[{content:"", url:""}]})

  React.useEffect(() =>{
    const computerCentresData =  getDataFromResource(COMPUTER_CENTRES_ROUTE).then(data => {
      setComputerCentresData(data);

    });
  }, []);

  // to be changed
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

  const computerCentresContentDisplay = computerCentresData.body.map(dataToDisplayMapper);




  return (
    <div className={styles.ComputerCentres}>
      <div className={styles.Colordiff}>
        <div className={styles.Section}>
          <div className={styles.Content}>
            <Box
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
            >
              <p className={styles.info}>HOME / SERVICES</p>

              <p>Our Computer Centres</p>
            </Box>
          </div>
        </div>
      </div>

      <div className={styles.Description}>
        <p>
          We operate two computer centres within the NUS Kent Ridge Campus, at the Yusof Ishak House and also at Blk
          AS8.
        </p>
        <p>
        <img src="https://www.nussucommit.com/images/services.jpg" alt="Computer Centres"></img>
        </p>
        <p>
          In YIH, we provide a total of 45 PCs in two clusters equipped with internet access, printing and scanning. To
          date, we are still the sole provider of public scanning services in NUS.
        </p>
        <p>In AS8, we have more than 44 PCs there, with internet access and printing.</p>
      </div>

      <div className={styles.operatingHours}>
        <h2>Operating Hours</h2>
        <p>Here is our centre's opening hours:</p>

      </div>

      <div className={styles.gridContainer}>
        <div className={styles.gridItem}></div>
        <div className={styles.gridItem}>YIH Computer Centre</div>
        <div className={styles.gridItem}>AS8 Computer Centre</div>
        <div className={styles.gridItem}>Monday - Friday</div>
        <div className={styles.gridItem}>08:30 - 21:00</div>
        <div className={styles.gridItem}>08:30 - 21:00</div>
        <div className={styles.gridItem}>Saturday</div>
        <div className={styles.gridItem}>08:30 - 17:00</div>
        <div className={styles.gridItem}>08:00 - 19:00</div>
        <div className={styles.gridItem}>Sunday</div>
        <div className={styles.gridItem}>09:30 - 15:00</div>
        <div className={styles.gridItem}>Closed</div>
      </div>


      <div className={styles.printingRates}>
        <h2>Printing Rates</h2>
        <img src="https://www.nussucommit.com/images/rates.jpg" alt="Printing Rates"></img>
      </div>
    </div>
  )
}

export default ComputerCentres