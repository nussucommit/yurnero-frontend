import { Image } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './OurStructure.module.css'

const TeamCard = props => {
  const { header, img, content } = props
  return (
    <>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md mx-auto'}>
            <div className={styles.Card + ' card mt-5'}>
              <div className={styles.CardHeader + ' card-header'}>
                <h2 className={'clearfix'}>{header}</h2>
              </div>
              <div className={styles.CardBody + ' card-body'}>
                <div>
                  <Image src={img} alt="Home" className={styles.Picture} boxSize="400px" objectFit={'cover'} />
                  <div>
                    {content.map(({ key, content }) => {
                      return (
                        <p key={key} className={styles.CardContent}>
                          {content}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
