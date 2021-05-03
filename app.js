const images = document.querySelectorAll(".panel");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    removeActiveClass();
    image.classList.add("active")
  })
})

function removeActiveClass(){
  images.forEach((image) => {
    image.classList.remove("active")
  })
}

