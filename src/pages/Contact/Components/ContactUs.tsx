import { DefaultIcon } from '@chakra-ui/react'
import React from 'react'
import styles from './Contact.module.css'

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        <b>General Enquiries</b>
      </p>
      <p>+65 6601 1345</p>
      <a href="mailto:commit@nussu.org.sg">commit@nussu.org.sg</a>
      <h2></h2>
      <p>
        <b>Marketing & Sponsorship Enquiries</b>
      </p>
      <a href="mailto:marketing@nussucommit.com">marketing@nussucommit.com</a>
    </div>
  )
}

export default ContactUs
