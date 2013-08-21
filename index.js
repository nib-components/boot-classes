var root = document.body.parentNode;

/**
 * For styling depending on whether JS is enabled
 */

root.classList.remove('no-js');
root.classList.add('js');

/**
 * Retina classes for using high-resolution images
 * This is targetting using a mixin in Sass
 */

var isRetina = window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)').matches;

if( isRetina ) {
  root.classList.add('retina');
}
else {
  root.classList.remove('no-retina');
}