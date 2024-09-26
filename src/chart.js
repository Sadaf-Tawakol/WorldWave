const toggleMenu = () => {
  const menu = document.querySelector(".menu-icon");
  menu.classList.toggle("active");
};

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // تغییر آیکون بین حالت روز و شب
  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

menuToggle.addEventListener("click", function () {
  menuDropdown.classList.toggle("visible");
  menuDropdown.classList.toggle("hidden");
});
// Chart 1 - Users Chart
const ctx1 = document.getElementById("chart1").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Users",
        data: [5000, 8000, 10000, 12000, 9000, 15000],
        borderColor: "#8e44ad",
        backgroundColor: "rgba(142, 68, 173, 0.2)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Chart 2 - Income Chart
const ctx2 = document.getElementById("chart2").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        data: [400, 700, 300, 1000, 1200, 700],
        backgroundColor: "#e74c3c",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Chart 3 - Posts Chart
const ctx3 = document.getElementById("chart3").getContext("2d");
new Chart(ctx3, {
  type: "radar",
  data: {
    labels: ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"],
    datasets: [
      {
        label: "Posts",
        data: [100, 200, 150, 300, 250],
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "#3498db",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Chart 4 - Total Connections Chart
const ctx4 = document.getElementById("chart4").getContext("2d");
new Chart(ctx4, {
  type: "pie",
  data: {
    labels: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    datasets: [
      {
        label: "Total Connections",
        data: [3000, 2000, 1500, 810],
        backgroundColor: ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6"],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
