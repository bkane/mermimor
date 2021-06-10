const teamsEl = document.querySelector('#teams')
const episodesEl = document.querySelector('#episodes')
const loadingEl = document.querySelector('#loading')
let loading = false

const getTeamsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/teams')
    const data = await res.json()
    loading = false
    return data
}

const addTeamsToDOM = async () => {
    const teams = await getTeamsFromBackend()
    
    if (!loading) {
        loadingEl.innerHTML = ''
    }
    
    teams.forEach(team => {
        const div = document.createElement('div')
        div.className = 'team'

        const picks = team.picks.map( pick => `<li>${pick.name} - ${pick.points}</li>`).join('')

        div.innerHTML = `
            <h3>[${team.rank}] ${team.name} - ${team.score} pts</h3>
            <h4>${team.id}</h4>
            <ul>
            ${picks}
            </ul>
        `
        teamsEl.appendChild(div)
    })
}

const getSurvivorsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/survivors')
    const data = await res.json()
    loading = false
    return data
}

const getEventsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/events')
    const data = await res.json()
    loading = false
    return data
}

const getEpisodesFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/episodes')
    const data = await res.json()
    loading = false
    return data
}

const addEpisodesToDOM = async () => {
    const episodes = await getEpisodesFromBackend()
    const survivors = await getSurvivorsFromBackend()
    
    if (!loading) {
        loadingEl.innerHTML = ''
    }
    
    episodes.forEach(episode => {
        const div = document.createElement('div')
        div.className = 'episode'


        const events = episode.events.map( event => 
            {
                const survivorNames = event.survivor_ids.map(s_id => survivors.find(survivor => survivor.id == s_id).name).join(", ")
                return `<li>${event.name} - ${event.type} - ${event.points} pts (${survivorNames})</li>`
            }).join('')

        div.innerHTML = `
            <h3>${episode.name}</h3>
            <h4>${episode.id}</h4>
            <h5>${episode.date}</h5>
            <ul>${events}</ul>
        `
        episodesEl.appendChild(div)
    })
}

addTeamsToDOM()
addEpisodesToDOM()
