const views = {
  home: document.getElementById("homeView"),
  askhat: document.getElementById("askhatView"),
  erasyl: document.getElementById("erasylView")
};

const navTabs = document.querySelectorAll(".nav-tab");
const memberRows = document.querySelectorAll(".member-row");

function openView(name) {
  Object.values(views).forEach(view => view.classList.remove("active-view"));
  views[name].classList.add("active-view");

  navTabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.view === name);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    openView(tab.dataset.view);
  });
});

memberRows.forEach(row => {
  row.addEventListener("click", () => {
    openView(row.dataset.open);
  });
});
