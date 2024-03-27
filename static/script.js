window.addEventListener('scroll', handleScroll);

function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
}

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

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
});
  