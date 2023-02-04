import * as React from 'react'
import styles from './Creation.module.css'
import { ContentItem } from 'common/ContentItem'

export const renderMissionContentFromApi = (content: ContentItem[]) => {
  return content.map((data, idx) => {
    if (data.type === 'paragraph') {
      return <ul key={idx}>{renderMissionContentFromApi(data.content as ContentItem[])}</ul>
    } else if (data.type === 'text') {
      return <li key={idx}>{data.content as string}</li>
    }
  })
}
