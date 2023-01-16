const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("#main")


function classToggle() {
  console.log("até aqui essa merda foi")
  if (sidebar.classList.contains("open") && main.classList.contains("open")) {
    sidebar.classList.replace("open", "close");
    main.classList.replace("open", "close");

  } else {
    sidebar.classList.replace("close", "open");
    main.classList.replace("close", "open");
  }
}




