import { Container, StylesProvider } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from './Footer.module.css'



const Footer = () => {
    return(
        <div className={styles.footer}>
            <p className={styles.title}>NUSSU CommIT</p>
            <Container className={styles.container}>
                <ul>
                    <li><Link to='/about-us'><strong>About Us</strong></Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                </ul>
            </Container>
            <Container className={styles.container}>
                <ul>
                    <li><Link to='/about-us'><strong>About Us</strong></Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                </ul>
            </Container>
            <Container className={styles.container}>
                <ul>
                    <li><Link to='/about-us'><strong>About Us</strong></Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                    <li><Link to='/our-family'>Our family</Link></li>
                </ul>
            </Container>
            <Container className={styles.container}>
                <ul>
                    <li><Link to='/about-us'><strong>Feedback</strong></Link></li>
                </ul>
            </Container>
        </div>
    )
}

export default Footer