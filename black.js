(function () {
    const root = document.documentElement;
  
    document.addEventListener("DOMContentLoaded", function () {
      const togglers = document.querySelectorAll("[data-theme-toggler]");
  

      const savedTheme = localStorage.getItem("theme") || "light";
      root.setAttribute("data-theme", savedTheme);
  
      togglers.forEach((toggler) => {
        toggler.addEventListener("click", toggleDarkMode);
      });
    });
  
    function toggleDarkMode() {
      const currentTheme = root.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", newTheme);
  
      // Sauvegarder le thème dans localStorage
      localStorage.setItem("theme", newTheme);
    }
  })();

