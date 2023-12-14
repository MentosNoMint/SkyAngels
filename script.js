document.getElementById("btnShadow").addEventListener("click", function() {
    const targetElement = document.querySelector('#Block');
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
