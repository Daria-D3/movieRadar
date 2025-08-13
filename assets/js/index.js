console.log("🧠 JS is working!");

<<<<<<< HEAD
// Menu toggle
$(document).ready(function () {
    $("#menu-button").click(function () {
        $("#menuContent").toggle(400);
    });

    // Logo animation
=======
$(document).ready(function()
{
    $("#menu-button").click(function(){
        $("#menuContent").toggle(400);
    });
});
$(document).ready(function () {
>>>>>>> master
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

<<<<<<< HEAD
// Star ratings
const stars = document.querySelectorAll(".stars i");
=======
//star ratings
const stars= document.querySelectorAll(".stars i");
>>>>>>> master

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            if (index1 >= index2) {
<<<<<<< HEAD
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
=======
                    star.classList.remove("inactive");
                    star.classList.add("active-stars");

                }
            else{
                star.classList.remove("active-stars") ;
                star.classList.add("inactive");

            }
                
    });
});});

//carousel
var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(carouselExampleFade, {
  interval: 50000,  // Change slides every 5 seconds
})

const movieSuggestions = [
    "The Godfather", "Inception", "Pulp Fiction", "Interstellar", "Fight Club" , "The Shawshank Redemption", "Inception", "The Godfather", "Interstellar", "Pulp Fiction", "The Dark Knight", "Parasite", "Fight Club", "Forrest Gump", "The Matrix", "Whiplash", "Gladiator", "La La Land", "The Grand Budapest Hotel", "Joker", "The Social Network", "Everything Everywhere All at Once", "Dune (2021)", " Spider-Man: Across the Spider-Verse", "Oppenheimer (2023)"
  ];
  
  function generateRandomMovie(index) {
    const selected = movieSuggestions[Math.floor(Math.random() * movieSuggestions.length)];
    const text = `🎬 MovieRadar suggests this might be a good fit for you: <b>${selected}</b>`;
  
    const modal = document.getElementById("movieSuggestionModal");
    modal.innerHTML = `<p>${text}</p>`;
    modal.style.display = "block";
  
    // Hide after 5 seconds
    setTimeout(() => {
      modal.style.display = "none";
    }, 5000);
  }

  
function searchMovie() {
    const searchTerm = document.getElementById('searchbar').value.trim().toLowerCase();
    const carouselElement = document.querySelector('.carousel'); // your carousel wrapper
    const carouselInstance = bootstrap.Carousel.getInstance(carouselElement) 
>>>>>>> master
        || new bootstrap.Carousel(carouselElement);

    const slides = document.querySelectorAll('.carousel-inner .carousel-item');
    let found = false;

    slides.forEach((slide, index) => {
        const titleElement = slide.querySelector('h2.responsive-title');
        if (titleElement && titleElement.textContent.toLowerCase().includes(searchTerm)) {
<<<<<<< HEAD
            carouselInstance.to(index);
=======
            carouselInstance.to(index); // jump to that movie
>>>>>>> master
            found = true;
        }
    });

    if (!found) {
        alert("No matching movie found in the carousel.");
    }
}

<<<<<<< HEAD
// Trigger search on click
document.querySelector('.search-btn').addEventListener('click', searchMovie);

// Trigger search on Enter key
document.getElementById('searchbar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchMovie();
    }
});
=======
// Trigger on button click
document.querySelector('.search-btn').addEventListener('click', searchMovie);

// Trigger on Enter key
document.getElementById('searchbar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // stops form submission if inside a form
        searchMovie();
    }
});









>>>>>>> master
