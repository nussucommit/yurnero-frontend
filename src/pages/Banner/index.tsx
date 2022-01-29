import { AspectRatio, Button, Image } from '@chakra-ui/react'
import styles from './Banner.module.css'


const Banner = () => {
    return(
        <div className={styles.Banner}>
            <h1>Serving the NUS community</h1>
            <p>From providing IT training workshops to operating 2 computer centres, NUSSU commIT serves the NUS community by providing quality IT services.</p>
            <AspectRatio maxW='100%' ratio={8 / 3}>
                <Image className={styles.Img} src='https://i0.wp.com/pisceswellness.com.sg/wp-content/uploads/2020/12/placeholder.png?ssl=1' alt='group photo' objectFit='cover' />
            </AspectRatio>
            <Button className={styles.btn} colorScheme='yellow'>LEARN MORE</Button>
        </div>

    )
}

export default Banner