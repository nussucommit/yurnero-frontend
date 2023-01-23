import * as React from "react"

export type ContentItem = {
    type?: string,
    content?: ContentItem[] | string,
    attribute?: any,
    children?: ContentItem[],
    result?: any
}

export const convertContentItems = (contentItems: ContentItem[]) => {
    return (
        contentItems.map((item, idx) => 
        <React.Fragment key={idx}>
            {item.type === "heading" ? 
                <h1 style={{fontWeight: "500", fontSize: "36px", paddingBottom: "30px", paddingTop: "30px"}}>{item.content}</h1>
            :
            item.type === "paragraph" ? 
                <p>
                    {convertContentItems(item.content as ContentItem[])}
                </p>
            :
            item.type === "text"?
                (item.attribute?.link?
                    <a href={item.attribute.link} style={{color: "#0000EE", padding: "0" }}>
                        {item.content}
                    </a>
                    :
                    <span style={{fontWeight: item.attribute.bold ? "bold" : "", color: item.attribute.color}}>
                        {item.content}
                    </span>
                )
            :
            item.type === "bulleted_list_item" ?
                <ul>
                    <li style={{ fontSize: "18px", color: "black", padding: "0", listStyleType: "disc"}}>
                        {(item.content as ContentItem[]).map((c, id) => {
                            return (
                            <>
                                {
                                c.attribute?.link?
                                    <a href={c.attribute.link} style={{color: "#0000EE", padding: "0" }}>
                                        {c.content}
                                    </a>
                                :
                                    <span key={id} style={{fontWeight: c.attribute.bold ? "bold" : "", color: c.attribute.color}}>
                                        {c.content}
                                    </span>
                                }
                                {c.children !== undefined ? <div style={{ paddingLeft: "50px"}}>{convertContentItems(c.children as unknown as ContentItem[])}</div>: <></>}
                            
                            </>
                        )})}
                    </li>
                </ul>
            :
            item.type === "image" ?
                <li>
                    <img src={item.content as string}/>
                </li>
            :
                <></>
            }
        </React.Fragment>
    ))
}