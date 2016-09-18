
var timerStartLoad = Date.now();

var DOMReadyTime,
    windowLoadTime;

var imageContainers,
    artistNames,
    overlays;

var britt = new Image();
var robyn = new Image();
var elise = new Image();
var cages = new Image();
var dogwood = new Image();
var fairylights = new Image();

var artists = [ britt, robyn, elise, cages, dogwood, fairylights ];

britt.src = 'images/artists/BRITT_1.jpg';
britt.alt = 'BRITT MARGIT';

robyn.src = 'images/artists/ROBYN_1.jpg';
robyn.alt = 'ROBYN SHERWELL';

elise.src = 'images/artists/ELISE_2.jpg';
elise.alt = 'ELISE LEGENDRE';

cages.src = 'images/artists/CAGES_1.jpg';
cages.alt = 'CAGES OF LIGHT';

dogwood.src = 'images/artists/DOGWOOD_1.jpg';
dogwood.alt = 'DOGWOOD HEART';

fairylights.src = 'images/artists/FAIRYLIGHTS_2.jpg';
fairylights.alt = 'THE FAIRYLIGHTS';

document.addEventListener('DOMContentLoaded', function(){

  DOMReadyTime = Date.now()-timerStartLoad;

  console.log("DOM Ready Time: ", Date.now()-timerStartLoad);

  imageContainers = document.querySelectorAll('.image-container');
  artistNames = document.querySelectorAll('.artist-name');
  overlays = document.querySelectorAll('.artist-link-overlay');

});

window.addEventListener('load', function(){

  windowLoadTime = Date.now() - timerStartLoad;

  console.log("Window Load Time: ", windowLoadTime);

  setTimeout(function(){

    imageContainers.map(function(x, i){
      x.appendChild(artists[i])
    });

    artistNames.map(function(x){
      x.style.visibility = 'visible'
    });

    overlays.map(function(x){
      x.style.visibility = 'visible'
    });

  }, windowLoadTime * 1.5);

});
