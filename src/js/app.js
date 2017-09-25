const css = require('../styles/app.scss');
require('../styles/fonts.css');
require('../styles/jquery.bxslider.css');
require('../js/jquery.bxslider.js');
var ac = require('../js/accordion.js');

//var $ = require('jquery'); 

console.log("HI from app.js");


$(document).ready(function(){
  console.log("HI from bxslider.js");
  $('.bxslider').bxSlider();
});

ac.accordionRun;