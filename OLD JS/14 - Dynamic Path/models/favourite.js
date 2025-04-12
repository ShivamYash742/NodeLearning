// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  static addToFavouriteList(homeId, callback) {
    Favourite.getFavouritesList((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavouritesList(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      if (err) {
        callback([], err);
      } else {
        try {
          callback(JSON.parse(data));
        } catch (err) {
          callback([], err);
        }
      }
    });
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
    })
  }
};
