// Core modules
const fs = require('fs')
const path = require('path');
const rootPath = require('../utils/pathUtil');




module.exports = class Home {
    constructor(housename, price, location, rating, photoUrl) {
        this.housename = housename;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(){
        Home.fetchAll(registeredHome =>{
            registeredHome.push(this);
            const homeData = path.join(rootPath, 'data', 'homes.json');
            fs.writeFile(homeData, JSON.stringify(registeredHome), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('home data saved');
                }
            });

        })
      
    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootPath, 'data', 'homes.json');
        fs.readFile(homeDataPath,(err,data) => {
            callback(!err ? JSON.parse(data) : []);
        })


    }

}