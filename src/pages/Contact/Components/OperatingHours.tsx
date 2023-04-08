import { DefaultIcon } from '@chakra-ui/react'
import React from 'react'
import styles from './Contact.module.css'

const OperatingHours = () => {
  return (
    <div>
      <h2>Operating Hours</h2>
      <p>
        <b>Monday - Friday:</b> 08:30 - 19:00
      </p>
      <p>
        <b>Saturday:</b> 08:30 - 15:00
      </p>
      <p>Closed on Sundays and public holidays</p>
      <h3>Note: Our operating hours are shorter due to the university vacation</h3>
    </div>
  )
}

export default OperatingHours
