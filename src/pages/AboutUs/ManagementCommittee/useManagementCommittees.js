import { useState, useEffect } from 'react'
import request from 'api/request'

export const useManagementCommittees = () => {
  const MANAGEMENT_COMMITTEE_PATH = 'aboutus/management-committee'
  const [chairpersons, setChairpersons] = useState([])
  const [committees, setCommittees] = useState([])

  const getPositionIcon = position => {
    switch (position) {
      case 'President':
      case 'Vice President':
        return 'https://cdn-icons-png.flaticon.com/512/190/190811.png'
      case 'Secretary':
        return 'https://cdn-icons-png.flaticon.com/512/1940/1940752.png'
      case 'Treasurer':
        return 'https://cdn-icons-png.flaticon.com/512/1907/1907938.png'
      case 'Operations & Logistics Director':
        return 'https://cdn-icons-png.flaticon.com/512/3139/3139209.png'
      case 'Outreach Director':
        return 'https://cdn-icons-png.flaticon.com/512/7572/7572539.png'
      case 'Publicity Director':
        return 'https://cdn-icons-png.flaticon.com/512/2857/2857527.png'
      case 'Technical Director':
        return 'https://cdn-icons-png.flaticon.com/512/6062/6062646.png'
      case 'Training Director':
        return 'https://cdn-icons-png.flaticon.com/512/3061/3061022.png'
      default:
        return ''
    }
  }

  const getFirstContent = paragraph => {
    return paragraph.content.at(0)?.content
  }

  const getImageUrl = image => {
    return image.content
  }

  useEffect(() => {
    request.get(MANAGEMENT_COMMITTEE_PATH).then(res => {
      const { data } = res

      const getValuesFromData = (raw_data, index) => {
        const img_url = getImageUrl(raw_data[0])
        const name = getFirstContent(raw_data[1])
        const position = getFirstContent(raw_data[2])
        const faculty = getFirstContent(raw_data[3])
        const year = getFirstContent(raw_data[4])
        const icon = getPositionIcon(position)

        return {
          key: index,
          name,
          pic: img_url,
          position,
          faculty,
          year,
          icon,
        }
      }

      const chairpersons = data.chairpersons.map(getValuesFromData)
      const committees = data.committees.map(getValuesFromData)

      console.log(chairpersons)
      console.log(committees)

      setChairpersons(chairpersons)
      setCommittees(committees)
    })
  }, [])

  return { chairpersons, committees }
}
