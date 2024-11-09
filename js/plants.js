function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  // إغلاق القائمة إذا تم النقر خارجها
  window.onclick = function(event) {
    if (!event.target.matches('.suggestions')) {
      var dropdowns = document.getElementsByClassName("suggestions2");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  