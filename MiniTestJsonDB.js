import client from 'client';

// A few js objects representing user data,
// designed to test front-end React routing to back-end;
export const database = {
  fakeUserData1 = {
    username: "dPowers",
    password: "schooner",
    firstName: "Dennis",
    lastName: "Howard",
    astroSign: "Saggitarius"
  },

  fakeUserData2 = {
    username: "happyBunny",
    password: "deltaSquad",
    firstName: "Alicia",
    lastName: "Briones",
    astroSign: "Capricorn"
  },

  fakeUserData3 = {
    username: "parkourChief42069",
    password: "420420",
    firstName: "Pamela",
    lastName: "Schwartzhausen",
    astroSign: "Pisces"
  }
};

module.exports(database);