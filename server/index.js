const express = require('express')
const morgan = require('morgan')
//var cors = require('cors');
const mermimor = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

//app.use(cors())
app.use(morgan('dev')) //TODO: should be only in dev env

app.get('/api/teams', async (req, res) => {
    const teams = await mermimor.getTeams()

    res.json(teams)
})

app.get('/api/episodes', async (req, res) => {
    const episodes = await mermimor.getEpisodes()

    res.json(episodes)
})

app.get('/api/survivors', async (req, res) => {
    const survivors = await mermimor.getSurvivors()

    res.json(survivors)
})

app.get('/api/events', async (req, res) => {
    const events = await mermimor.getEvents()

    res.json(events)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))