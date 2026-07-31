const express = require('express');
const path = require('path');
const app = express()
const multer = require('multer');
const {mergePdfs} = require('./merge'); 

const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static(path.join(__dirname, 'public')));
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'))
})
app.post('/merge',upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files);
    let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    // res.send({data: req.files}) 
    res.redirect(`/static/merged_${d}.pdf`);
})
app.get('/about', (req, res) => {
  res.send('About Us')
})
app.get('/contact', (req, res) => {
  res.send('Contact Us')
})
app.get('/map', (req, res) => {
  res.send('Map Us required')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})