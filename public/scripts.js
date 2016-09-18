

window.addEventListener('load', (e) =>{

  const artistNames = document.querySelectorAll('.artist-name');
  const overlays = document.querySelectorAll('.artist-link-overlay');

  artistNames.forEach(x =>{
    x.style.visibility = 'visible'
  });

  overlays.forEach(x =>{
    x.style.visibility = 'visible'
  });

});
