// const toTop = document.querySelector(".to_top");

const toTop = document.getElementById("myBtn");

      window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100){
          toTop.classList.add("active");
        }
        else{
          toTop.classList.remove("active");
        }
      });