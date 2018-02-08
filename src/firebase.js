/* eslint-disable */
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var config = {
  apiKey: "AIzaSyDE15LTniiNFiEAAIhcXCZw3kqmULI6zVU",
  authDomain: "fir-vue-dad27.firebaseapp.com",
  databaseURL: "https://fir-vue-dad27.firebaseio.com"
}

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const usersRef = firebaseApp.database().ref('users');
export const itensRef = firebaseApp.database().ref('itens');