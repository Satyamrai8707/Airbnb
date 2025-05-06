// Core modules
const fs = require('fs')
const path = require('path');
const rootPath = require('../utils/pathUtil');

const favouriteDataPath = path.join(rootPath, 'data', 'favourite.json');



module.exports = class Favourite {

    static addToFavourites(homeId,callback) {
        Favourite.getFavourites((favourites) => {
            // registeredHome.push(this);
            if (favourites.includes(homeId)) {
                favourites.push(homeId);
                console.log('Home is already marked as favourite');
                
            }
            else{
                favourites.push(homeId);
                fs.writeFile(favouriteDataPath, JSON.stringify(favourites),callback);
            }

    })
}




    static getFavourites(callback) {
        fs.readFile(favouriteDataPath,(err,data) => {
            callback(!err ? JSON.parse(data) : []);
        })
 }
}
