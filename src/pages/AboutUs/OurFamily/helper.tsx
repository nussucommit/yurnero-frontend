import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './OurFamily.module.css'
import { ContentItem } from 'common/ContentItem'

export const renderOurFamilyFromApi = (content: ContentItem[], flip: number) => {
  return content.map((data, idx) => {
    if (data.type === 'paragraph') {
      return <div key={idx}>{renderOurFamilyFromApi(data.content as ContentItem[], flip++)}</div>
    }
    if (data.type === 'text') {
      return (
        <div className={styles.Paragraph}>
          {flip % 2 == 0 ? (
            <p className={styles.ChatBoxLeft + ' ' + styles.ChatBoxBottomLeftLeg} key={idx}>
              {data.content as string}
            </p>
          ) : (
            <p className={styles.ChatBoxRight + ' ' + styles.ChatBoxBottomRightLeg} key={idx}>
              {data.content as string}
            </p>
          )}
        </div>
      )
    }
    if (data.type === 'image') {
      return (
        <div className={styles.ImageBody}>
          <div className={styles.OuterBorder}>
            <div className={styles.MidBorder}>
              <div className={styles.InnerBorder}>
                <div>
                  <div className={styles.Row + ' row'}>
                    <div className={styles.Image + ' col-lg-12 text-center'}>
                      <img
                        src={data.content as string}
                        alt={data.content as string}
                        key={idx}
                        className={styles.Photo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })
}
