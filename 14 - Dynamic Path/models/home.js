// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");


const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = id;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(id, callback) {
    Home.fetchAll((homes) => {
      const home = homes.find((home) => home.id === id);
      callback(home);
    });
  }

  static addToFavouriteList(homeId, home) {
    const favouriteHomesPath = path.join(rootDir, "data", "favouriteHomes.json");
    fs.readFile(favouriteHomesPath, (err, data) => {
      const favouriteHomes = !err ? JSON.parse(data) : [];
      const existingHomeIndex = favouriteHomes.findIndex((h) => h.id === home.id);
      if (existingHomeIndex === -1) {
        favouriteHomes.push(home);
      }
      fs.writeFile(favouriteHomesPath, JSON.stringify(favouriteHomes), (error) =>
        console.log("File Writing Concluded", error));
    });
  }


  static removeFromFavouriteList(homeId) {
    const favouriteHomesPath = path.join(rootDir, "data", "favouriteHomes.json");
    fs.readFile(favouriteHomesPath, (err, data) => {
      const favouriteHomes = !err ? JSON.parse(data) : [];
      const updatedFavouriteHomes = favouriteHomes.filter((home) => home.id !== homeId);
      fs.writeFile(favouriteHomesPath, JSON.stringify(updatedFavouriteHomes), (error) =>
        console.log("File Writing Concluded", error)
      );
    });
  };
};
