const teamsEl = document.querySelector('#teams')
const episodesEl = document.querySelector('#episodes')
const survivorsEl = document.querySelector('#survivors')
const loadingEl = document.querySelector('#loading')
let loading = false

const getTeamsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/api/teams')
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

        const picks = team.picks.map( pick => `<li>${pick.name} - ${pick.points} pts</li>`).join('')

        div.innerHTML = `
        <div class="list-group-item">
            <div class="d-flex w-100 justify-content-between align-items-center">
                <h4>[${team.rank}]</h4>
                <h3>${team.name}</h3>
                <small class="ms-auto">${team.score} pts</small>
            </div>
            <ul>
            ${picks}
            </ul>
        </div>
        `
        teamsEl.appendChild(div)
    })
}

const getSurvivorsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/api/survivors')
    const data = await res.json()
    loading = false
    return data
}

const getEventsFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/api/events')
    const data = await res.json()
    loading = false
    return data
}

const getEpisodesFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/api/episodes')
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
        <div class="card pb-3">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h3 class="card-title">${episode.name}</h3>
                <p class="card-text"><small class="text-muted">${episode.date}</small></p>
                <ul>${events}</ul>
            </div>
        </div>
        `
        episodesEl.appendChild(div)
    })
}

const addSurvivorsToDOM = async() => {
    const survivors = await getSurvivorsFromBackend()

    survivors.forEach(survivor => {
        const div = document.createElement('div')
        div.className = 'survivor'

        div.innerHTML = `
        <div class="card pb-3">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h3 class="card-title">${survivor.name}</h3>
                <p class="card-text"><small class="text-muted">${survivor.points} pts</small></p>
            </div>
        </div>
        `

        survivorsEl.appendChild(div)
    })
}

addTeamsToDOM()
addEpisodesToDOM()
addSurvivorsToDOM()
