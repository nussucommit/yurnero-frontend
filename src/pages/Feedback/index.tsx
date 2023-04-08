import styles from './Feedback.module.css'
import Header from 'pages/Header'
import Footer from 'pages/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FormLabel, FormControl, Input, Button, Select, Stack } from '@chakra-ui/react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Feedback = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    fetch('http://127.0.0.1:8000/feedback/', {
      // Enter your IP address here

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(values),
    })

    return new Promise<void>(resolve => {
      setTimeout(() => {
        alert('Feedback Sent!')
        resolve()
      }, 3000)
    })
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

      <form className={styles.feedbackform} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.feedbackheader}>
          If you have any feedback about our services, please submit them using the form below. Thank you!
        </p>
        <FormControl>
          <div className={styles.formgroup}>
            <FormLabel className={styles.sectionheader} htmlFor="name">
              Full Name:
            </FormLabel>
            <Input
              className={styles.userinput}
              id="name"
              placeholder="Name"
              {...register('name', {
                required: 'This is required',
              })}
            />
          </div>
          <div className={styles.formgroup}>
            <FormLabel className={styles.sectionheader} htmlFor="email">
              Email Address:
            </FormLabel>
            <Input
              className={styles.userinput}
              id="email"
              placeholder="Email"
              {...register('email', {
                required: 'This is required',
              })}
            />
          </div>
          <div className={styles.formgroup}>
            <FormLabel className={styles.sectionheader} htmlFor="subject">
              Subject:
            </FormLabel>
            <Input
              className={styles.userinput}
              id="subject"
              placeholder="Subject"
              {...register('subject', {
                required: 'This is required',
              })}
            />
          </div>
          <div className={styles.formgroup}>
            <FormLabel className={styles.sectionheader} htmlFor="message">
              Message:
            </FormLabel>
            <Input
              id="message"
              className={styles.message}
              placeholder="Message..."
              {...register('message', {
                required: 'This is required',
              })}
            />
          </div>
        </FormControl>
        <Button mt={4} className={styles.submitbutton} colorScheme="yellow" isLoading={isSubmitting} type="submit">
          Subscribe
        </Button>
      </form>
      <Footer />
    </div>
  )
}

export default Feedback
