import { useState, useEffect } from "react"
import axios from 'axios'
import { ContentItem } from "common/ContentItem"

export const useFetchData = (pathToFetch: string) => {
    const [content, setContent] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(pathToFetch, {
            headers: {
                "Content-Type": "Application/json",
            }
        }).then(res => {
            setIsLoading(false);
            setContent(res.data)
        }).catch(err => {
            console.log(err.message)
            setIsLoading(false);
            setContent(err.message)
        })
    }, [])

    return [isLoading, content]
}