import styles from './FAQ.module.css'
import Header from 'pages/Header'
import { Link } from 'react-router-dom'
import { useFetchData } from 'common/hooks/useFetchData'
import { Routes } from 'constants/routes'
import { ContentItem } from '../../common/ContentItem'
import { CircularProgress } from '@chakra-ui/progress'
import { convertFaqItems } from 'common/FaqItem'

const FAQ = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + '/faq')
  console.log(content)
  console.log(Object(content)['About CommIT'])

  return (
    <div className={styles.Faq}>
      <Header />
      <div className={styles.TitleBar}>
        <div className={styles.NavLinks}>
          <Link to="/">HOME</Link>
          <p>/</p>
          <Link to="/faq">FAQ</Link>
        </div>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className={styles.Content}>
        <div className={styles.FaqContent}>
          <h1 className={styles.faqsection}>About NUSSU CommIT</h1>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertFaqItems(content as ContentItem[], 'About CommIT')
          )}
        </div>
        <div className={styles.FaqContent}>
          <br />
          <h1 className={styles.faqsection}>Registration Procedure and Place</h1>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertFaqItems(content as ContentItem[], 'Registration Procedure and Place')
          )}
        </div>
        <div className={styles.FaqContent}>
          <br />
          <h1 className={styles.faqsection}>About the Workshops</h1>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertFaqItems(content as ContentItem[], 'About the Workshops')
          )}
        </div>
        <div className={styles.FaqContent}>
          <br />
          <h1 className={styles.faqsection}>Issues regarding Payment of Refundable Deposit</h1>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertFaqItems(content as ContentItem[], 'Issues regarding Payment of Refundable Deposit')
          )}
        </div>
        <div className={styles.FaqContent}>
          <br />
          <h1 className={styles.faqsection}>Trainers and Materials Coverage</h1>
          {isLoading ? (
            <CircularProgress isIndeterminate color="blue.300" style={{ display: 'flex', justifyContent: 'center' }} />
          ) : (
            convertFaqItems(content as ContentItem[], 'Trainers and Materials Coverage')
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQ
