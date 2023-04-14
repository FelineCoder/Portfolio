const slideshow = document.querySelector('.slideshow');
const images = ['Images/Slideshow/1.png', 'Images/Slideshow/1.5.png', 'Images/Slideshow/2.jpg', 'Images/Slideshow/3.png', 'Images/Slideshow/4.jpg', 'Images/Slideshow/5.jpg',
'Images/Slideshow/6.png', 'Images/Slideshow/7.png', 'Images/Slideshow/8.png', 'Images/Slideshow/9.png'];

const captions = ['An unused website design created as a draft for Royal Holloway\'s Computing Society\'s new website.',
'The design for the mobile version of the website.',
'Banners I designed for CompSoc and Royal Hackaway (Computing Society\'s annual hackathon).', 
'Hackaway V5 sticker designs', 
'Printed stickers for Hackaway V6.',
'A selection of social media posts designed for CompSoc. Some were even displayed around campus for all students to see!',
'The front cover of a booklet created for my A Level Graphic Design Course.',
'Pages 1 - 2 containing models of gaming equipment modelled in Blender.',
'Pages 3 - 4.',
'Back cover.'];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  const img = slideshow.querySelector('#slideshow-img');
  img.src = images[index];
  document.getElementById("slideshow-caption").textContent = captions[index];
}

function previousImage() {
  index = (index - 1 + images.length) % images.length;
  const img = slideshow.querySelector('#slideshow-img');
  img.src = images[index];
  document.getElementById("slideshow-caption").textContent = captions[index];

}

