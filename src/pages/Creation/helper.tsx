import * as React from 'react'
import styles from './Creation.module.css'
import { ContentItem } from 'common/ContentItem'

export const renderContentFromApi = (content: ContentItem[]) => {
  return content.map((data, idx) => {
    if (data.type === 'heading') {
      if (data.content === 'Overview') {
        return (
          <div key={idx}>
            <h2 style={{ marginTop: 0 }}>{data.content}</h2>
            <div className={styles.Underline}></div>
          </div>
        )
      }
      return (
        <div key={idx}>
          <h2>{data.content as string}</h2>
          <div className={styles.Underline}></div>
        </div>
      )
    } else if (data.type === 'paragraph') {
      return <p key={idx}>{renderContentFromApi(data.content as ContentItem[])}</p>
    } else if (data.type === 'text') {
      if (data.attribute?.link) {
        return (
          <a href={data.attribute.link as string} key={idx}>
            {data.content as string}
          </a>
        )
      } else {
        return <span key={idx}>{data.content as string}</span>
      }
    } else if (data.type === 'bulleted_list_item') {
      return (
        <ul key={idx}>
          <li>
            {(data.content as ContentItem[]).map(item => {
              return <span key={idx}>{item.content as string}</span>
            })}
          </li>
        </ul>
      )
    } else if (data.type === 'image') {
      return <img src={data.content as string} alt="Creation Timeline" key={idx} />
    }
  })
}
