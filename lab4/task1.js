const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/translate', (req, res) => {
    try {
        const word = req.query.word;
        const translation = word.split('').reverse().join('');
        res.send(translation);
    } catch (error) {
        console.error('Error:', error);
    }
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
