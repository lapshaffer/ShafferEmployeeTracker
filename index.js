const db = require('../config/connection');
const startMenu = require('./inquiries/index');

const init = () => {
    startMenu();
}

init();