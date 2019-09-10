
var activo = false;

var scrolleo = false;

$(window).on('scroll', function(){
    if ($(window).scrollTop()){

            scrolleo = true;
              document.getElementById("navi").style.transition = "ease 0.5s"; 
            $('nav').addClass('black');

    }
    else {
            scrolleo = false;

            if( scrolleo == false && activo == true) {
                    
            }
            else {

            
                $('nav').removeClass('black');  
            }
    }
})


const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
 

    burguer.addEventListener('click',() => {
        
                nav.classList.toggle('nav-active');
                document.getElementById("navi").style.transition = "ease 0.0s"; 
                $('nav').addClass('black');

                if (activo == false) {

                        activo = true;

                }
                else {

                        activo = false;

                        if(scrolleo == false) {


                            $('nav').removeClass('black');  
                        } 

                    

            }

            console.log(activo);
    });
}





navSlide();

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement : '#tit'

})
.setClassToggle('#tit', 'show')
.addTo(controller);

var scene = new ScrollMagic.Scene({

    triggerElement : '.contenedores'

})
.setClassToggle('.contenedores', 'show')
.addTo(controller);