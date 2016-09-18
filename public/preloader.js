

window.addEventListener('load', (e) =>{

  const britt = new Image();
  const robyn = new Image();
  const elise = new Image();
  const cages = new Image();
  const dogwood = new Image();
  const fairylights = new Image();

  britt.src = 'images/artists/BRITT_1.jpg';
  robyn.src = 'images/artists/ROBYN_1.jpg';
  elise.src = 'images/artists/ELISE_2.jpg';
  cages.src = 'images/artists/CAGES_1.jpg';
  dogwood.src = 'images/artists/DOGWOOD_1.jpg';
  fairylights.src = 'images/artists/FAIRYLIGHTS_2.jpg';

  const artists = [britt, robyn, elise, cages, dogwood, fairylights];

  const imageContainers = document.querySelectorAll('.image-container');
  const artistNames = document.querySelectorAll('.artist-name');
  const overlays = document.querySelectorAll('.artist-link-overlay');

  for (var i = 0; i < imageContainers.length; i++) {
    imageContainers[i].appendChild(artists[i]);
  }

  setTimeout(() =>{
    artistNames.forEach(x =>{
      x.style.visibility = 'visible'
    });

    overlays.forEach(x =>{
      x.style.visibility = 'visible'
    });
  },100);



});
