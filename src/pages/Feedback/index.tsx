import styles from './Feedback.module.css'
import React, { useState } from 'react'
import Header from 'pages/Header'
import { Link } from 'react-router-dom'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Feedback = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Submit the form data to a server here
    console.log(formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className={styles.feedback}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/feedback">FEEDBACK</Link>
        </div>
        <h1>Feedback</h1>
      </div>

      <form className={styles.feedbackform} onSubmit={handleSubmit}>
        <p className={styles.feedbackheader}>
          If you have any feedback about our services, please submit them using the form below. Thank you!
        </p>
        <div className={styles.formgroup}>
          <label className={styles.sectionheader} htmlFor="name">
            Full Name:
          </label>
          <input
            className={styles.userinput}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label className={styles.sectionheader} htmlFor="email">
            Email Address:
          </label>
          <input
            className={styles.userinput}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label className={styles.sectionheader} htmlFor="subject">
            Subject:
          </label>
          <input
            className={styles.userinput}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formgroup}>
          <label className={styles.sectionheader} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.messageinput}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button className={styles.submitbutton} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Feedback
