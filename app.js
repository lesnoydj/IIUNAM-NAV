
const trapezoid = document.querySelector('#trapezoid');

const txtBtn = document.querySelectorAll('.txt-btn');

const nav = document.querySelector('.navbarR');

window.onscroll = () => {
    if (window.scrollY > 80) {
        trapezoid.style.marginTop = '-53px';
        trapezoid.style.borderBottom = '100px solid rgba(1, 1, 1)';
        nav.style.paddingBottom = '0';
        for (let i = 0; i<txtBtn.length; i++){
            txtBtn[i].style.visibility = 'hidden';
            txtBtn[i].style.opacity = '0';
            txtBtn[i].style.margin = '0';
            
            }
    } else {
        trapezoid.style.marginTop = '0px';
        trapezoid.style.borderBottom = '150px solid rgba(1, 1, 1, 0.371)';
        nav.style.paddingBottom = '40px';
        
        for (let i = 0; i<txtBtn.length; i++){
            txtBtn[i].style.visibility = 'visible';
            txtBtn[i].style.opacity = '1';
            txtBtn[i].style.margin = '10px auto';
            }
    }
};


trapezoid.addEventListener("mouseleave", (e) => {
    if (window.scrollY > 80) {
        trapezoid.style.marginTop = '-53px';
        trapezoid.style.borderBottom = '100px solid rgba(1, 1, 1)';
        nav.style.paddingBottom = '0';
        for (let i = 0; i<txtBtn.length; i++){
            txtBtn[i].style.visibility = 'hidden';
            txtBtn[i].style.opacity = '0';
            txtBtn[i].style.margin = '0';
        }
    } else {
        trapezoid.style.marginTop = '0px';
        trapezoid.style.borderBottom = '150px solid rgba(1, 1, 1, 0.371)';
        nav.style.paddingBottom = '40px';
        for (let i = 0; i<txtBtn.length; i++){
            txtBtn[i].style.visibility = 'visible';
            txtBtn[i].style.opacity = '1';
            txtBtn[i].style.margin = '10px auto';
            }
    }
});

trapezoid.addEventListener("mouseenter", (e) => {
    trapezoid.style.marginTop = '0px';
    if (window.scrollY > 80){
        trapezoid.style.borderBottom = '150px solid rgba(1, 1, 1)';
    }else{trapezoid.style.borderBottom = '150px solid rgba(1, 1, 1, 0.371)'};
    
    nav.style.paddingBottom = '40px';
    for (let i = 0; i<txtBtn.length; i++){
        txtBtn[i].style.visibility = 'visible';
        txtBtn[i].style.opacity = '1';
        txtBtn[i].style.margin = '10px auto';
        }
});

