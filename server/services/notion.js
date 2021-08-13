const env = require('dotenv').config()
const { Client } = require('@notionhq/client')

const teamsDB = process.env.DB_TEAMS
const survivorsDB = process.env.DB_SURVIVORS
const episodesDB = process.env.DB_EPISODES
const eventsDB = process.env.DB_EVENTS
const scoringDB = process.env.DB_SCORING

//Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const getSurvivors = async() => {
    const survivorsRequest = await notion.databases.query({ database_id: survivorsDB })
    const events = await getEvents()

    const survivors = survivorsRequest.results.map(survivor => {
        let acc = 0
        const filtered_events = events.filter(event => event.survivor_ids.includes(survivor.id))
        const points = filtered_events.reduce( (acc, e) => acc + e.points, 0)

        return { 
            name: survivor.properties.Name.title[0].text.content,
            id: survivor.id,
            team_id: survivor.properties.Team?.relation[0]?.id,
            points: points
        }
    })

    return survivors
}

const getTeams = async() => {
    const survivors = await getSurvivors()

    const teamsRequest = await notion.databases.query({ database_id: teamsDB})

    const teams = teamsRequest.results.map(team => {
        const picks = survivors.filter(s => s.team_id == team.id).map(s => { return {name: s.name, id: s.id, points: s.points}})
        const score = picks.reduce( (acc, pick) => acc + pick.points, 0)
        return { 
            name: team.properties.Name.title[0].text.content,
            id: team.id,
            picks: picks,
            score: score
        }
    })

    teams.sort( (a, b) => b.score - a.score || a.name.localeCompare(b.name))

    let curRank = 1
    let curScore = 0
    for (let i = 0; i < teams.length; i++) {
        teams[i].rank = curRank;

        if (teams[i].score > curScore) {
            curScore = teams[i].score
            curRank += 1
        }
    }

    return teams
}

const getEpisodes = async() => {
    const events = await getEvents()

    const episodesRequest = await notion.databases.query({ 
        database_id: episodesDB, 
        sorts: [
        {
          property: 'Air Date',
          direction: 'ascending',
        }]
    })

    const episodes = episodesRequest.results.map(episode => {
        return {
            name: episode.properties.Name.title[0].text.content,
            id: episode.id,
            date: episode.properties["Air Date"].date.start,
            events: events.filter( e => e.episode_id == episode.id).map(e => { return { name: e.name, type: e.type, points: e.points, survivor_ids: e.survivor_ids }})
        }
    })

    return episodes
}

const getEvents = async() => {
    const scoringRequest = await notion.databases.query({ database_id: scoringDB })

    const scoringRules = scoringRequest.results.map( rule => {
        return {
            name: rule.properties.Name.title[0].text.content,
            points: rule.properties.Points.number
        }
    })

    const eventsRequest = await notion.databases.query({ database_id: eventsDB })

    const events = eventsRequest.results.map( event => {
        return {
            name: event.properties.Name.title[0].text.content,
            id: event.id,
            episode_id: event.properties.Episode.relation[0]?.id,
            type: event.properties.Type.select.name,
            survivor_ids: event.properties.Survivors.relation.map(s => s.id),
            points: scoringRules.find( rule => rule.name == event.properties.Type.select.name)?.points || 0
        }
    })

    return events
}




// const listDatabases = async() => {
//     const res = await notion.search({ filter: { property: 'object', value: 'database' } })
//     //console.log(res)

//     console.log(`Found ${res.results.length} databases:`)
//     res.results.forEach( result => {
//         console.log(result.title[0]?.plain_text)
//     })
// }


// const listPages = async () => {
//     const { results } = await notion.databases.query({ database_id: testDatabaseID})

//     results.forEach(page => {
//         console.log(page.id)
//         console.log(page.properties.Name.title[0].plain_text)

//         for (var key of Object.keys(page.properties)) 
//         {
//             const prop = page.properties[key]
//             if (prop.type == 'title')
//             {
//                 console.log(prop.title[0].plain_text)
//             }
//             else if (prop.type == 'multi_select')
//             {
//                 prop.multi_select.forEach(tag => {
//                     console.log(`${key}: ${tag.name}`)
//                 })
//             }
//         }
//         console.log()
//     })
//     return results
// }


module.exports = { getTeams, getEpisodes, getSurvivors, getEvents }