    const myChairs = document.querySelectorAll(".seat");
    myChairs.forEach(chairs => {
        chairs.addEventListener("click", () => {
          if (chairs.style.backgroundColor === "green") {
            chairs.style.backgroundColor = "";
          } else {
            chairs.style.backgroundColor = "green";
          }
      });
    });
    
    let myIndex = 0;
    carousel();
    
    function carousel() {
      let i;
      const homeSlide = document.getElementsByClassName("mySlides");
      for (i = 0; i < homeSlide.length; i++) {
        homeSlide[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > homeSlide.length) {myIndex = 1}    
      homeSlide[myIndex-1].style.display = "block";  
      setTimeout(carousel, 5000); 
    }