const Favourite = require("../models/favourite");
const Home = require("../models/home");



exports.getAddHome = (req, res, next) => {
    // res.sendFile(path.join(rootPath,'views','addHome.html'))
    res.render('host/addHome',{ pageTitle : 'Add home',
        currentPage: "addHome"

    },
        
    )
}


exports.postAddHome = (req, res, next) => {
    // console.log('Home Registration successful for:', req.body);
    const home = new Home(req.body.housename, 
        req.body.price, 
        req.body.location, 
        req.body.rating, 
        req.body.photoUrl).save();
    // registeredHome.push( req.body );
    // res.sendFile(path.join(rootPath,'views','homeAdded.html'))
    res.render('store/home-added',{ pageTitle : 'home added' , currentPage: "addHome" });
}


exports.getHomes =   (req, res, next) => {
    const registeredHome = Home.fetchAll(registeredHome =>{
        res.render('store/home-list', {registeredHome : registeredHome,
            pageTitle: 'Homes List',  currentPage: "Home"
        })

    });
    // console.log(registeredHome)
    // res.sendFile(path.join(rootPath,'views','home.html'))
 }



exports.getIndex =   (req, res, next) => {
    const registeredHome = Home.fetchAll(registeredHome =>{
        res.render('store/index', {registeredHome : registeredHome,
            pageTitle: 'airbnb Home',  currentPage: "index"
        })

    });
}

exports.getBookings = (req, res, next) => {
    const registeredHome = Home.fetchAll(registeredHome =>{
        res.render('store/bookings', {registeredHome : registeredHome,
            pageTitle: 'My Bookings',  currentPage: "Bookings"
        })
    });
}


exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites(favourites => {
        Home.fetchAll((registeredHomes) => {
          const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
          res.render("store/favourite-list", {
            favouriteHomes: favouriteHomes,
            pageTitle: "My Favourites",
            currentPage: 'favourite-list'
          })
    });
   })
}

exports.postFavouriteList = (req,res,next) => {
    console.log('Came to add to fav',req.body);
    Favourite.addToFavourites(req.body.id, err => {
        if (err) {
            console.log('error while marking favourite',err);
            
        } 
        res.redirect('/favourite')

    })
}






exports.getHostHomes = (req, res, next) => {
    const registeredHome = Home.fetchAll(registeredHome =>{
        res.render('host/host-home-list', {registeredHome : registeredHome,
            pageTitle: 'Host Home List',  currentPage: "host-home-list"
        })
    });
}

exports.getHomeDetail = (req, res, next) => {
    const homeId = req.params.homeId;
   
    Home.findById(homeId, home => {
        if (!home) {
            console.log("Home not found");
            res.redirect('/homes')
        
    }
    else{
        res.render('store/home-detail', {pageTitle: 'Home Detail', currentPage: "Home", home: home})


        }
      

      
    })


    
}