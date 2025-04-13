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

document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.getElementById("typewriter");
    const roles = ["Product Manager", "Software Engineer", "Data Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentRole = roles[roleIndex];
      const visibleText = currentRole.substring(0, charIndex);
      typewriterText.textContent = visibleText;
  
      if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(type, 1000);
      }
    }
  
    type();
  });
  