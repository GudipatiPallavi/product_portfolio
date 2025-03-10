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
    if (document.getElementById("typing-text")) {  // Check if element exists
        let typed = new Typed("#typing-text", {
            strings: ["Product Manager", "Product Designer", "Software Engineer"],
            typeSpeed: 80, // Slower typing speed (increase if needed)
            backSpeed: 40, // Slower deleting speed
            startDelay: 500, // Delay before typing starts
            backDelay: 2000, // Pauses for 2 seconds before deleting
            loop: true
        });
    } else {
        console.error("Element #typing-text not found!");
    }
});
