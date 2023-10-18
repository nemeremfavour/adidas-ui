const button1 = document.querySelector('.blk');

const button2 = document.querySelector('.wht');

const button3 = document.querySelector('.red');

button1.addEventListener('click', function(){
  document.querySelector('.imgshoe').setAttribute('src', '/img/adidas-black.png');
});

button2.addEventListener('click', function(){
  document.querySelector('.imgshoe').setAttribute('src', '/img/adidas-white.png');
});

button3.addEventListener('click', function(){
  document.querySelector('.imgshoe').setAttribute('src', '/img/adidas-red.png');
});
