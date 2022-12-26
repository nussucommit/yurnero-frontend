import styles from './Nav.module.css'
import { Button, Stack, Box, Flex } from '@chakra-ui/react'

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.Colordiff}>
        <div className={styles.Section}>
          <div className={styles.Content}>
            <Box
              as="button"
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
              borderRightColor="#152238"
              borderRightWidth="1px"
            >
              <p>COMPUTER CENTRES</p>
              <p className={styles.info}>Study, print, or scan</p>
            </Box>
            <Box
              as="button"
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
              borderRightColor="#152238"
              borderRightWidth="1px"
              borderLeftColor="#152238"
              borderLeftWidth="1px"
            >
              <p>TRAINING WORKSHOPS</p>
              <p className={styles.info}>Stay relevant in the digital world</p>
            </Box>
            <Box
              as="button"
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
              borderRightColor="#152238"
              borderRightWidth="1px"
              borderLeftColor="#152238"
              borderLeftWidth="1px"
            >
              <p>MAJOR EVENTS</p>
              <p className={styles.info}>Make a difference</p>
            </Box>
            <Box
              as="button"
              lineHeight="1.2"
              fontWeight="semibold"
              _hover={{ bg: '#152238' }}
              padding="20px"
              width="-webkit-fill-available"
              borderLeftColor="#152238"
              borderLeftWidth="1px"
            >
              <p>CONTACT US</p>
              <p className={styles.info}>Get in touch</p>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
