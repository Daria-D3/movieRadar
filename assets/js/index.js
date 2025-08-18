console.log("🧠 JS is working!");

// Menu toggle and logo animation
$(document).ready(function () {
    $("#menu-button").click(function () {
        $("#menuContent").toggle(400);
    });

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
    interval: 50000,  // Change slides every 50 seconds
});

// Random movie suggestions
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
    const carouselElement = document.querySelector('.carousel'); // your carousel wrapper
    const carouselInstance = bootstrap.Carousel.getInstance(carouselElement)
        || new bootstrap.Carousel(carouselElement);

    const slides = document.querySelectorAll('.carousel-inner .carousel-item');
    let found = false;

    slides.forEach((slide, index) => {
        const titleElement = slide.querySelector('h2.responsive-title');
        if (titleElement && titleElement.textContent.toLowerCase().includes(searchTerm)) {
            carouselInstance.to(index); // jump to that movie
            found = true;
        }
    });

    if (!found) {
        alert("No matching movie found in the carousel.");
    }
}

// Trigger search on button click
document.querySelector('.search-btn').addEventListener('click', searchMovie);

// Trigger search on Enter key in searchbar
document.getElementById('searchbar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // prevent form submission if inside a form
        searchMovie();
    }
});

// Select all star containers
const starContainers = document.querySelectorAll(".stars");

starContainers.forEach(container => {
    const stars = container.querySelectorAll("i"); // only the stars in this movie

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            // Reset and highlight only this movie's stars
            stars.forEach((s, index2) => {
                if (index1 >= index2) {
                    s.classList.remove("inactive");
                    s.classList.add("active-stars");
                } else {
                    s.classList.remove("active-stars");
                    s.classList.add("inactive");
                }
            });

            // Rating = index + 1 (max 5 automatically)
            const rating = index1 + 1;

            // Movie title from data attribute or nearby <h2>
            const movieTitle = container.getAttribute("data-movie")
                || container.closest(".movie").querySelector(".responsive-title").textContent;

            // Update modal text
            const modalBody = document.getElementById("ratingModalBody");
            modalBody.innerHTML = `You rated <b>${movieTitle}</b> ${rating} star${rating > 1 ? "s" : ""}!`;

            // Show modal
            const ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'));
            ratingModal.show();
        });
    });
});
