document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.querySelector(".toggle_btn");
    const togglebtnicon = document.querySelector(".toggle_btn i");
    const dropboxmenu = document.querySelector(".dropdown_menu");

    togglebtn.onclick = function () {
      dropboxmenu.classList.toggle("open");
      const isOpen = dropboxmenu.classList.contains("open");

      togglebtnicon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  });