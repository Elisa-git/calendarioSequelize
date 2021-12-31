
const bodyParser = require('body-parser');
const reservar = require('../routes/reservaRoute');
const disciplina = require('../routes/disciplinaRoute')
const viewsRoutes = require('./viewsRouter')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(reservar);
    app.use(disciplina);
    app.use(viewsRoutes);
    
    app.set('view engine', 'ejs');
}


