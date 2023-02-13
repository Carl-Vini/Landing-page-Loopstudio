const seeAll = document.querySelector('.see');
const show = document.querySelector('.show');


setTimeout(seeAll.addEventListener('click', () => {
  show.classList.toggle('show--active')
}), 5000)


// a fuction funciona, mas o timeout não kkkk, deixei o valor auto pra perceber a mudança e nada