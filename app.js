




const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burguer.addEventListener('click',() => {
        
        nav.classList.toggle('nav-active');
    });
}


navSlide();





