const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavouritesList((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favDetails = favourites.map((favId) => registeredHomes.find(home => home.id === favId));
      res.render("store/favourite-list", {
        favDetails: favDetails,
        pageTitle: "Favourite List",
        currentPage: "favourite",
      });
    })
  })
};

exports.postFavouriteList = (req, res, next) => {
  const homeId = req.body.homeId;
  console.log('Adding home to favourite list...', homeId);
  Favourite.addToFavouriteList(homeId, (status) => {
    if (!status) {
      console.log("Added to the list");
      res.redirect("/favourites");
    } else {
      console.log("Already in the list");
      res.redirect("/favourites");
    }
  });
};
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.id;
  console.log('Fetching home details...');
  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/homes");
    } else {
      console.log('Home details fetched successfully.', home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: home.houseName,
        currentPage: "homeDetail",
      })
    }
  });
};