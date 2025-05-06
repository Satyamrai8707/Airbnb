// Core modules
const fs = require('fs')
const path = require('path');
const rootPath = require('../utils/pathUtil');

const homeDataPath = path.join(rootPath, 'data', 'homes.json');



module.exports = class Home {
    constructor(housename, price, location, rating, photoUrl) {
        this.housename = housename;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(){
        this.id = Math.random().toString()
        Home.fetchAll(registeredHome =>{
            registeredHome.push(this);
            fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('home data saved');
                }
            });

        })
      
    }

    static fetchAll(callback) {
        fs.readFile(homeDataPath,(err,data) => {
            callback(!err ? JSON.parse(data) : []);
        })
 }

    static findById(homeId, callback) {
        this.fetchAll(homes => {
          const homeFound = homes.find(home => home.id === homeId);
          callback(homeFound);
        })
      }

}