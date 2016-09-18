
var timerStartLoad = Date.now();


document.addEventListener('DOMContentLoaded', () =>{
  console.log("Time until DOMready: ", Date.now()-timerStartLoad)
});

window.addEventListener('load', (e) =>{

  console.log("Time until everything loaded: ", Date.now()-timerStartLoad);

  const britt = new Image();
  const robyn = new Image();
  const elise = new Image();
  const cages = new Image();
  const dogwood = new Image();
  const fairylights = new Image();

  const artists = [britt, robyn, elise, cages, dogwood, fairylights];
  const imageContainers = document.querySelectorAll('.image-container');
  const artistNames = document.querySelectorAll('.artist-name');
  const overlays = document.querySelectorAll('.artist-link-overlay');

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

  imageContainers.forEach((x, i) =>{
    x.appendChild(artists[i])
  });

  setTimeout(() =>{

    artistNames.forEach(x =>{
      x.style.visibility = 'visible'
    });

    overlays.forEach(x =>{
      x.style.visibility = 'visible'
    });

  }, (Date.now()-timerStartLoad) * 2);

});
