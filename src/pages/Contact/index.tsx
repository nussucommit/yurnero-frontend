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
        <h2>YIH Computer Centre</h2>
          <p>Yusof Ishak House, #03-10</p>
          <p>National University of Singapore</p>
          <p> 31 Lower Kent Ridge Road</p>
          <p> Singapore 119078</p>
          <Link to="/"><h4>FIND DIRECTIONS →</h4></Link>
        </Box>
        <Box className={styles.Details} w='100%' bg='white'>
        <h2>Operating Hours</h2>
          <p><b>Monday - Friday:</b> 08:30 - 19:00</p>
          <p><b>Saturday:</b> 08:30 - 15:00</p>
          <p>Closed on Sundays and public holidays</p>
          <h3>Note: Our operating hours are shorter due to the university vacation</h3>
        </Box>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box className={styles.Details} w='100%' bg='white'>
        <h2>AS8 Computer Centre</h2>
          <p>Blk AS8, #02-01</p>
          <p>National University of Singapore</p>
          <p>10 Kent Ridge Crescent</p>
          <p> Singapore 119260</p>
          <Link to="/"><h4>FIND DIRECTIONS →</h4></Link>
        </Box>
        <Box className={styles.Details} w='100%' bg='white'>
        <h2>Operating Hours</h2>
          <p><b>Monday - Friday:</b> 08:00 - 19:00</p>
          <p><b>Saturday:</b> 08:00 - 17:00</p>
          <p>Closed on Sundays and public holidays</p>
          <h3>Note: Our operating hours are shorter due to the university vacation</h3>
        </Box>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box className={styles.Details} w='100%' bg='white'>
        <h2>Contact Us</h2>
        <p><b>General Enquiries</b></p>
          <p>+65 6601 1345</p>
          <a href='mailto:commit@nussu.org.sg'>commit@nussu.org.sg</a>
          <h2></h2>
          <p><b>Marketing & Sponsorship Enquiries</b></p>
          <a href='mailto:marketing@nussucommit.com'>marketing@nussucommit.com</a>
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
