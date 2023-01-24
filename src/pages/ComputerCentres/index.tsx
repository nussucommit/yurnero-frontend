import styles from './ComputerCentres.module.css'
import { Box } from '@chakra-ui/react'

const ComputerCentres = () => {
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

            <p>
            We operate two computer centres within the NUS Kent Ridge Campus, at the Yusof Ishak House and also at Blk AS8.
            </p>

            <p>
            In YIH, we provide a total of 45 PCs in two clusters equipped with internet access, printing and scanning. To date, we are still the sole provider of public scanning services in NUS.
            <br>
            </br>
            In AS8, we have more than 44 PCs there, with internet access and printing.
            </p>

        </div>
    )
}

export default ComputerCentres

