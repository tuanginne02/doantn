// Toast function
function toast({ title = "", message = "", type = "", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas  fa-triangle-exclamation",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear .1s ${delay}s forwards`;

    toast.innerHTML = `
                          <div class="all-box">
                          <div class="box-message">
                          <div class="toast__icon">
                           <i class="${icon}"></i>
                       </div>
                       <div class="toast__body">
                           <h3 class="toast__title">${title}</h3>
                           <p class="toast__msg">${message}</p>
                       </div>
                       <div class="toast__close">
                           <i class="fas fa-times"></i>
                       </div>
                       </div>
                       <div class="line"></div>
                       </div>
                  `;
    main.appendChild(toast);
  }
}
///scrollwidth

const prevItem = document.getElementById("prevItem");
const nextItem = document.getElementById("nextItem");
const allItem = document.querySelector(".grid__heading--all_item");


nextItem.addEventListener("click", () => {
  prevItem.style.display = "block";
  nextItem.style.display = "none";
  allItem.classList.add("animationLogo");
});
prevItem.addEventListener("click", () => {
  prevItem.style.display = "none";
  nextItem.style.display = "block";

  allItem.classList.remove("animationLogo");
});
