import { Box, Button, Center, Flex, Link, Square, Stack, StylesProvider } from "@chakra-ui/react"
import styles from './Nav.module.css'


const Nav = () => {
    return(
        <div className={styles.Nav}>
            <p>Nav?</p>
            {/* <Stack spacing={0} direction='row' align='center'>
                <Button className={styles.btn}>
                    <p className={styles.title}>COMPUTER CENTRES</p>
                    <p className={styles.info}>lorem</p>
                </Button>
                <Button>
                    TRAINING WORKSHOPS
                </Button>
                <Button>
                    MAJOR EVENTS
                </Button>
                <Button>
                    CONTACT US
                </Button>
            </Stack> */}
        </div>

    )
}

export default Nav