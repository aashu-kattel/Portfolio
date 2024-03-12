document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.onscroll = function() {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  
    scrollToTopBtn.addEventListener("click", function() {
      scrollToTopSmoothly();
    });
  
    function scrollToTopSmoothly() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
  