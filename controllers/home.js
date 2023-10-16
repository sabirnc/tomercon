const path = require("path")


const home = (req , res) => {
    const rootDirectory = path.resolve(__dirname, '..');
    res.sendFile('home.html',{ root: path.join(rootDirectory, 'views')});
}

module.exports = { home }