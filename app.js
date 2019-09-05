
$(window).on('scroll', function(){
if ($(window).scrollTop()){
        $('nav').addClass('black');

    }
    else {
        $('nav').removeClass('black');
    }
})



const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burguer.addEventListener('click',() => {
        
        nav.classList.toggle('nav-active');
    });
}


navSlide();





