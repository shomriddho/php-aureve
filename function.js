(function() {
  var navDropdowns = document.querySelectorAll('nav ul li a:not(:only-child)');

  navDropdowns.forEach(function(navDropdown) {
    navDropdown.addEventListener('click', function(e) {
      var navDropdownSibling = this.nextElementSibling;
      navDropdownSibling.style.display = navDropdownSibling.style.display === 'block' ? 'none' : 'block';

      var dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(function(dropdown) {
        if (dropdown !== navDropdownSibling) {
          dropdown.style.display = 'none';
        }
      });

      e.stopPropagation();
    });
  });

  document.documentElement.addEventListener('click', function() {
    var navDropdowns = document.querySelectorAll('.nav-dropdown');
    navDropdowns.forEach(function(navDropdown) {
      navDropdown.style.display = 'none';
    });
  });

  var navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', function() {
    var navUl = document.querySelector('nav ul');
    navUl.style.display = navUl.style.display === 'block' ? 'none' : 'block';
  });

  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
  });
})();