// function scrollAppear() {
//   var itemPosition4 = document.querySelector('footer').getBoundingClientRect().top;
//   var screenPosition4 = window.innerHeight;

//   if (itemPosition4 < screenPosition4) {
//     document.querySelector('#intern-cta').classList.add('disappear');
//     document.querySelector('#intern-cta').classList.remove('appear');
//   } else if (itemPosition4 > screenPosition4) {
//     document.querySelector('#intern-cta').classList.add('appear');
//     document.querySelector('#intern-cta').classList.remove('disappear');
//   }
// }

// window.addEventListener('scroll', scrollAppear);


document.addEventListener("DOMContentLoaded", function () {
    let options = {
        strings: ["Product Manager", "Product Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    };

    let typed = new Typed("#typing-text", options);
});
