const express = require('express');
 
const app = express();



app.use(express.static('public'));


// app.set("view engine", "hbs");


app.get('/', (request, response, next) => response.sendFile(__dirname + '/view/homePage.html'));
/*{
  let data = { name: 'Madeira' }; 
  response.render('homePage', data)});
*/
app.get('/about/us', (request, response, next) => response.sendFile(__dirname + '/view/aboutUs.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/view/works.html'));
app.get('/photo/gallery', (request, response, next) => response.sendFile(__dirname + '/view/photoGallery.html'));

app.listen(3000, () => console.log('server launched'));