const express = require('express');
const got = require('got');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/get', async (req, res) => {
    const { solr_url, solr_username, solr_password } = req.headers;
    try {
        var Authorization = Buffer.from(solr_username + ':' + solr_password).toString('base64');
        const resp = await got(`${solr_url}admin/collections?action=LIST`, {
            headers: { Authorization: `Basic ${Authorization}` }
        }).json();
        res.json(resp)
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
});

app.use(express.static('dist'));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const port = 5555;

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
