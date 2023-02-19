import { CSSProperties } from '@emotion/serialize'
import * as React from 'react'
import { ContentItem, getInputtedStyle } from './ContentItem'

export const convertFaqItems = (faqItems: string | ContentItem[], key: string) => {
  return convertContentItems(Object(faqItems)[key] as ContentItem[])
}

export const convertContentItems = (contentItems: string | ContentItem[]) => {
  if (typeof contentItems === 'string') return <p>{contentItems}</p>

  return contentItems?.map((item, idx) => (
    <React.Fragment key={idx}>
      {item.type === 'heading' ? (
        <h1
          style={{ fontWeight: 450, fontSize: '1.5rem', paddingBottom: '1.5vh', paddingTop: '1.5vh', color: '#484848' }}
        >
          <>{item.content}</>
        </h1>
      ) : item.type === 'paragraph' ? (
        <p>{convertContentItems(item.content as ContentItem[])}</p>
      ) : item.type === 'text' ? (
        item.attribute?.link ? (
          <a href={item.attribute.link} style={{ color: '#0000EE', padding: '0' }}>
            <>{item.content}</>
          </a>
        ) : (
          <span style={getInputtedStyle(item)}>
            <>{item.content}</>
          </span>
        )
      ) : (
        <></>
      )}
    </React.Fragment>
  ))
}
