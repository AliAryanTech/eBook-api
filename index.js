const { eBookJs } = require('./src')
const express = require('express')
const cors = require('cors')
const eBookAPI = new eBookJs()
const app = express()
const port = process.env.PORT || 8080

app.set('json spaces', 2)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.status(200).setHeader('Content-Type', 'text/plain').send('Running...'))

app.get('/search', async (req, res) => {
    const { query, page } = req.query
    if (!query) return res.status(400).json({ error: 'Missing required parameter: query' })
    const results = await eBookAPI.search(query, page)
    res.json(results)
})

app.get('/download', async (req, res) => {
    const { url } = req.query
    if (!url) return res.status(400).json({ error: 'Missing required parameter: url' })
    if (!eBookAPI.validate(url)) return res.status(400).json({ error: 'Invalid URL provided' })
    const link = await eBookAPI.getLink(url)
    if (!link) return res.status(404).json({ error: 'Download link not found' })
    res.redirect(link)
})

app.all('*', (req, res) => res.sendStatus(404))

app.listen(port, () =>
    console.log(`Server is running on port ${port} | You can also visit on http://localhost:${port}`)
)

module.exports = app
