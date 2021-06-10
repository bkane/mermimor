const express = require('express')
const mermimor = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/teams', async (req, res) => {
    const teams = await mermimor.getTeams()

    res.json(teams)
})

app.get('/episodes', async (req, res) => {
    const episodes = await mermimor.getEpisodes()

    res.json(episodes)
})

app.get('/survivors', async (req, res) => {
    const survivors = await mermimor.getSurvivors()

    res.json(survivors)
})

app.get('/events', async (req, res) => {
    const events = await mermimor.getEvents()

    res.json(events)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))