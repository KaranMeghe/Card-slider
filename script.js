const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let sliderMain = document.querySelector('.slider-main');
const item = document.getElementsByClassName('item');
const items = document.querySelectorAll('.item');
// const item  = [...items];

nextButton.addEventListener('click', () =>{
  sliderMain.append(item[0]);
})

prevButton.addEventListener('click', ()=>{
  sliderMain.prepend(item[item.length -1 ]);
})