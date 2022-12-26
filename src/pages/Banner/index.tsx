import { useNavigate } from 'react-router-dom'
import { AspectRatio, Button, Image } from '@chakra-ui/react'

import styles from './Banner.module.css'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.Banner}>
      <h1>Serving the NUS community</h1>
      <p>
        From providing IT training workshops to operating 2 computer centres, NUSSU commIT serves the NUS community by
        providing quality IT services.
       <br />
       <br />
      <Button className={styles.btn} colorScheme="yellow" onClick={() => navigate('/about-us')}>
        LEARN MORE
      </Button>
      </p>

     <AspectRatio maxW="100%" ratio={8 / 3}>
        <Image
          className={styles.Img}
          src="https://www.nussucommit.com/images/homepage/front.jpg"
          alt="group photo"
          objectFit="cover"
        />
      </AspectRatio>

    </div>
  )
}

export default Banner
