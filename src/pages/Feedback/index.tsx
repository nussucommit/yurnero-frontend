import styles from './Feedback.module.css'
import { Container, Select, Input, HStack, VStack, Box, Flex, Grid, StylesProvider,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Button, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from "pages/Header"

const Feedback = () => {
    return (
      <div className={styles.Feedback}>
        <Header />
        <div className={styles.TitleBar}>
          <div className={styles.NavLinks}>
            <Link to="/">HOME</Link>
            <p>/</p>
            <Link to="/feedback">FEEDBACK</Link>
          </div>
          <h1>Feedback</h1>
        </div>
        If you have any feedback about our services, please submit them using the form below. Thank you!
      </div>
  )
}

export default Feedback
