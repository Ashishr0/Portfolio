// const themeBtn = document.getElementById("theme-btn");

// themeBtn.addEventListener("click", () => {

//     document.body.classList.toggle("light-mode");

//     if(document.body.classList.contains("light-mode")){
//         themeBtn.textContent = "☀️";
//     } else {
//         themeBtn.textContent = "🌙";
//     }

// });

// Smooth reveal animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .profile-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});