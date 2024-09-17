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

// Charts Setup (for 5 different charts)
const ctx1 = document.getElementById("chart1").getContext("2d");
const ctx2 = document.getElementById("chart2").getContext("2d");
const ctx3 = document.getElementById("chart3").getContext("2d");
const ctx4 = document.getElementById("chart4").getContext("2d");
const ctxMain = document.getElementById("mainChart").getContext("2d");

const chartConfig = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Activity",
        data: [30, 50, 40, 60, 80, 70],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
};
const chartConfig2 = {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Activity",
        data: [30, 50, 40, 60, 80, 70],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
};

new Chart(ctx1, chartConfig2);
new Chart(ctx2, chartConfig);
new Chart(ctx3, chartConfig);
new Chart(ctx4, chartConfig);
new Chart(ctxMain, chartConfig);
