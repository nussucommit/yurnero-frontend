import { CSSProperties } from '@emotion/serialize'
import * as React from 'react'

export type ContentItem = {
  type?: string
  content?: ContentItem[] | string
  attribute?: any
  children?: ContentItem[]
  result?: any
}

const getInputtedStyle: (item: ContentItem) => any = (item: ContentItem) => {
  return {
    fontWeight: item.attribute?.bold ? 'bold' : 'normal',
    color: item.attribute?.color,
    textDecoration: item.attribute?.underline ? 'underline' : '',
  }
}

export const convertContentItems = (contentItems: string | ContentItem[]) => {
  if (typeof contentItems === 'string') return <p>{contentItems}</p>

  return contentItems?.map((item, idx) => (
    <React.Fragment key={idx}>
      {item.type === 'heading' ? (
        <h1
          style={{ color: '#002A56', fontWeight: 'bold', fontSize: '40px', paddingBottom: '30px', paddingTop: '30px' }}
        >
          <>{item.content}</>
        </h1>
      ) : item.type === 'paragraph' ? (
        <p>{convertContentItems(item.content as ContentItem[])}</p>
      ) : item.type === 'text' ? (
        item.attribute?.link ? (
          <a href={item.attribute.link} style={{ color: '#4372D6', padding: '0' }}>
            <>{item.content}</>
          </a>
        ) : (
          <span style={getInputtedStyle(item)}>
            <>{item.content}</>
          </span>
        )
      ) : item.type === 'bulleted_list_item' ? (
        <ul>
          <li style={{ fontSize: '18px', color: 'black', padding: '0', listStyleType: 'disc' }}>
            {(item.content as ContentItem[]).map((c, id) => {
              return (
                <>
                  {c.attribute?.link ? (
                    <a key={id} href={c.attribute.link} style={{ color: '#4372D6', padding: '0' }}>
                      <>{c.content}</>
                    </a>
                  ) : (
                    <span key={id} style={getInputtedStyle(item)}>
                      <>{c.content}</>
                    </span>
                  )}
                  {c.children !== undefined ? (
                    <div style={{ paddingLeft: '50px' }}>
                      {convertContentItems(c.children as unknown as ContentItem[])}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )
            })}
          </li>
        </ul>
      ) : item.type === 'image' ? (
        <li>
          <img src={item.content as string} style={{ marginBottom: '24px' }} />
        </li>
      ) : item.type === 'quote' ? (
        <p style={{ color: '#002A56', fontSize: '1.75rem', paddingLeft: '30px' }}>
          {convertContentItems(item.content as ContentItem[])}
        </p>
      ) : (
        <></>
      )}
    </React.Fragment>
  ))
}
