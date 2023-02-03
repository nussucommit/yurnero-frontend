import styles from './Contact.module.css'
import { Container, Select, Input, HStack, VStack, Box, Flex, Grid, StylesProvider,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Button, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navbar from 'pages/Navbar'
import Banner from 'pages/Banner'
import Footer from 'pages/Footer'
import Address from 'pages/Contact/Components/Address'
import OperatingHours from './Components/OperatingHours'
import ContactUs from './Components/ContactUs'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Navbar/>
      <div className={styles.Main}>
      <div className={styles.LinkBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </div>

      <div className={styles.TitleBar}>
        <h1 style={{color:'#484848'}}>Get in touch with</h1>
        <h1 style={{color:'#FFB200'}}>NUSSU commIT</h1>
      </div>

      <div className={styles.Content}>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box className={styles.Details} w='100%' bg='white'>
          <Address/>
          <Link to="/"><h4>FIND DIRECTIONS →</h4></Link>
        </Box>
        <Box className={styles.Details} w='100%' bg='white'>
          <OperatingHours/>
        </Box>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box className={styles.Details} w='100%' bg='white'>
          <Address/>
          <Link to="/"><h4>FIND DIRECTIONS →</h4></Link>
        </Box>
        <Box className={styles.Details} w='100%' bg='white'>
          <OperatingHours/>
        </Box>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box className={styles.Details} w='100%' bg='white'>
        <ContactUs/>
        </Box>
        <Box className={styles.Details} w='100%' bg='white'>
          <h2></h2>
          <p><b>Workshop Enquiries & Feedback</b></p>
          <a href='mailto:trainingcell@nussucommit.com'>trainingcell@nussucommit.com</a>
        </Box>
      </Grid>
      <div className={styles.Mailing}>
        <h2>Subscribe to our mailing list</h2>
        <Stack spacing={10}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>Current Year in NUS</FormLabel>
          <Select>
            <option value='option1'>Year 1</option>
            <option value='option2'>Year 2</option>
            <option value='option3'>Year 3</option>
            <option value='option3'>Year 4</option>
            <option value='option3'>Others</option>
          </Select>
        </FormControl>
        <Button width={'20%'} colorScheme={'yellow'}>Subscribe</Button>
        </Stack>
      </div>
      </div>
      </div>
      <div className={styles.Space}/>
      <Footer/>
    </div>
    
  )
}

export default Contact
