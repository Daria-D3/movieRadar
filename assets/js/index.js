console.log("🧠 JS is working!");

//star ratings
const stars= document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            if (index1 >= index2) {
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






