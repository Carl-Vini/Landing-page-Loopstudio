const buttonSee = document.querySelector('.see');
const elementH4 = document.querySelectorAll('h4'); 

buttonSee.addEventListener('click', () => {
    if (elementH4.style.display === 'none') {
        elementH4.style.display = 'block';
    }
    else {
        elementH4.style.display = 'none'
    }
});