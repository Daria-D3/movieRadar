console.log("🧠 JS is working!");

// Menu toggle
$(document).ready(function () {
    $("#menu-button").click(function () {
        $("#menuContent").toggle(400);
    });

    // Logo animation
    $(".logo").click(function () {
        let logo = $(this);
        logo.animate({ top: "+=120px" }, 500, function () {
            logo.animate({ left: "-=1250px" }, 1000, function () {
                logo.css({ transition: "transform 0.5s", transform: "rotate(360deg)" });
                setTimeout(() => {
                    logo.animate({ left: "+=1250px" }, 1000, function () {
                        logo.animate({ top: "-=120px" }, 500, function () {
                            logo.css({ transform: "rotate(0deg)" });
                        });
                    });
                }, 500);
            });
        });
    });
});

// Star ratings
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.remove("inactive");
                star.classList.add("active-stars");
            } else {
                star.classList.remove("active-stars");
                star.classList.add("inactive");
            }
        });
    });
});

// Bootstrap carousel
const myCarousel = document.querySelector('#carouselExampleFade');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 50000,
});

// Random movie suggestion
const movieSuggestions = [
    "The Godfather", "Inception", "Pulp Fiction", "Interstellar", "Fight Club",
    "The Shawshank Redemption", "The Dark Knight", "Parasite", "Forrest Gump",
    "The Matrix", "Whiplash", "Gladiator", "La La Land",
    "The Grand Budapest Hotel", "Joker", "The Social Network",
    "Everything Everywhere All at Once", "Dune (2021)",
    "Spider-Man: Across the Spider-Verse", "Oppenheimer (2023)"
];

function generateRandomMovie() {
    const selected = movieSuggestions[Math.floor(Math.random() * movieSuggestions.length)];
    const text = `🎬 MovieRadar suggests this might be a good fit for you: <b>${selected}</b>`;

    const modal = document.getElementById("movieSuggestionModal");
    modal.innerHTML = `<p>${text}</p>`;
    modal.style.display = "block";

    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
}

// Movie search in carousel
function searchMovie() {
    const searchTerm = document.getElementById('searchbar').value.trim().toLowerCase();
    const carouselElement = document.querySelector('.carousel');
    const carouselInstance = bootstrap.Carousel.getInstance(carouselElement)
        || new bootstrap.Carousel(carouselElement);

    const slides = document.querySelectorAll('.carousel-inner .carousel-item');
    let found = false;

    slides.forEach((slide, index) => {
        const titleElement = slide.querySelector('h2.responsive-title');
        if (titleElement && titleElement.textContent.toLowerCase().includes(searchTerm)) {
            carouselInstance.to(index);
            found = true;
        }
    });

    if (!found) {
        alert("No matching movie found in the carousel.");
    }
}

// Trigger search on click
document.querySelector('.search-btn').addEventListener('click', searchMovie);

// Trigger search on Enter key
document.getElementById('searchbar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchMovie();
    }
});
