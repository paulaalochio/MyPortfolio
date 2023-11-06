/*EFEITO DE DIGITAÇÃO NA LOGO */

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 80 * i)

  });
}
const titulo = document.querySelector('.logo-name');
typeWrite(titulo);

document.querySelector(".botaozinho")

/* SHADOWS EM PROJETOS*/

document.addEventListener("DOMContentLoaded", function () {
    const projectBoxes = document.querySelectorAll(".project-card");

    projectBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.classList.add("hovered");
        });

        box.addEventListener("mouseleave", () => {
            box.classList.remove("hovered");
        });
    });
});

/*ATIVANDO ANIMAÇÃO DAS HABILIDADES*/

/*------*/
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".metrica span");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    skillBars.forEach((bar) => {
        observer.observe(bar);
    });

    function animateSkillBars() {
        skillBars.forEach((bar) => {
            let width = 0;
            const targetWidth = 80; 
            const animationSpeed = 15; 

            const interval = setInterval(() => {
                if (width >= targetWidth) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                }
            }, animationSpeed);
        });
    }
});

/*------*/
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".metrica2 span");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    skillBars.forEach((bar) => {
        observer.observe(bar);
    });

    function animateSkillBars() {
        skillBars.forEach((bar) => {
            let width = 0;
            const targetWidth = 70; 
            const animationSpeed = 15; 

            const interval = setInterval(() => {
                if (width >= targetWidth) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                }
            }, animationSpeed);
        });
    }
});

/*------*/
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".metrica3 span");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    skillBars.forEach((bar) => {
        observer.observe(bar);
    });

    function animateSkillBars() {
        skillBars.forEach((bar) => {
            let width = 0;
            const targetWidth = 70; 
            const animationSpeed = 15; 

            const interval = setInterval(() => {
                if (width >= targetWidth) {
                    clearInterval(interval);
                } else {
                    width++;
                    bar.style.width = width + "%";
                }
            }, animationSpeed);
        });
    }
});


/*BOTÃO BACK TO TOP */

var btn = document.querySelector("#topButton");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});