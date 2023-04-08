import styles from './Contact.module.css'
import {
  Container,
  Select,
  Input,
  HStack,
  VStack,
  Box,
  Flex,
  Grid,
  StylesProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Footer from 'pages/Footer'
import Address from 'pages/Contact/Components/Address'
import OperatingHours from './Components/OperatingHours'
import ContactUs from './Components/ContactUs'
import ContactForm from './Components/ContactForm'
import Form from './Components/Form'
import Header from 'pages/Header'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/contact">CONTACT US</Link>
        </div>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.Main}>
        <div className={styles.Title}>
          <h1 style={{ color: '#484848' }}>Get in touch with</h1>
          <h1 style={{ color: '#FFB200' }}>NUSSU commIT</h1>
        </div>

        <div className={styles.Content}>
          <Grid templateColumns="repeat(2, 1fr)" gap={10}>
            <Box className={styles.Details} w="100%" bg="white">
              <Address />
              <Link to="/">
                <h4>FIND DIRECTIONS →</h4>
              </Link>
            </Box>
            <Box className={styles.Details} w="100%" bg="white">
              <OperatingHours />
            </Box>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={10}>
            <Box className={styles.Details} w="100%" bg="white">
              <Address />
              <Link to="/">
                <h4>FIND DIRECTIONS →</h4>
              </Link>
            </Box>
            <Box className={styles.Details} w="100%" bg="white">
              <OperatingHours />
            </Box>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={10}>
            <Box className={styles.Details} w="100%" bg="white">
              <ContactUs />
            </Box>
            <Box className={styles.Details} w="100%" bg="white">
              <h2></h2>
              <p>
                <b>Workshop Enquiries & Feedback</b>
              </p>
              <a href="mailto:trainingcell@nussucommit.com">trainingcell@nussucommit.com</a>
            </Box>
          </Grid>

          <Form />
        </div>
      </div>
      <div className={styles.Space} />
      <Footer />
    </div>
  )
}

export default Contact
