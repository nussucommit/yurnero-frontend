import * as React from 'react'
import styles from './Creation.module.css'

export type ContentItem = {
  type?: string
  content?: ContentItem[] | string
  attribute?: any
  children?: ContentItem[]
  result?: any
}

export const renderContentFromApi = (content: ContentItem[]) => {
  return content.map(data => {
    if (data.type === 'heading') {
      if (data.content === 'Overview') {
        return (
          <div>
            <h2 style={{ marginTop: 0 }}>{data.content}</h2>
            <div className={styles.Underline}></div>
          </div>
        )
      }
      return (
        <div>
          <h2>{data.content}</h2>
          <div className={styles.Underline}></div>
        </div>
      )
    } else if (data.type === 'paragraph') {
      return <p>{renderContentFromApi(data.content as ContentItem[])}</p>
    } else if (data.type === 'text') {
      if (data.attribute?.link) {
        return <a href={data.attribute.link as string}>{data.content as string}</a>
      } else {
        return <span>{data.content as string}</span>
      }
    } else if (data.type === 'bulleted_list_item') {
      return (
        <ul>
          <li>
            {(data.content as ContentItem[]).map(item => {
              return <span>{item.content as string}</span>
            })}
          </li>
        </ul>
      )
    } else if (data.type === 'image') {
      return <img src={data.content as string} alt="Creation Timeline" />
    }
  })
}
