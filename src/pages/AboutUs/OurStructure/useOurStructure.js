import { useState, useEffect } from 'react'
import request from 'api/request'

export const useOurStructure = () => {
  const OUR_STRUCTURE_URL = 'aboutus/our-structure'

  const [overview, setOverview] = useState([])
  const [teams, setTeams] = useState([])

  const teamToHeadings = {
    marketing: 'Marketing Team - The Marketers',
    publicity: 'Publicity Team - The Designers',
    technical: 'Technical Team - The Coders',
    training: 'Training Team - The Teachers',
    welfare: 'Welfare Team - The Funmakers',
    opl: 'Operations & Logistics Team - The Unsung Heroes',
  }

  useEffect(() => {
    request.get(OUR_STRUCTURE_URL).then(res => {
      const { data } = res

      const overview = data.overview
      const teams_data_raw = data.teams

      const teams = Object.keys(teams_data_raw).map((team_name, index) => {
        const team_raw = teams_data_raw[team_name]
        const image_raw = team_raw[0]
        const content_raw = team_raw.slice(1)

        const imageUrl = image_raw.content
        const content = content_raw
          .map((notionBlock, index) => {
            return {
              key: index,
              content: notionBlock.content.at(0)?.content,
            }
          })
          .filter(data => data.content)

        return {
          key: index,
          header: teamToHeadings[team_name],
          img: imageUrl,
          content,
        }
      })

      setOverview(overview)
      setTeams(teams)
    })
  }, [])

  return { overview, teams }
}
