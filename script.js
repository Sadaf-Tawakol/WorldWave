document
  .getElementById("profile-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profile-image").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.querySelector(".cancel-btn").addEventListener("click", function () {
  alert("Cancelled");
});

document
  .querySelector(".profile-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Profile Saved!");
  });

document.getElementById("followers-tab").addEventListener("click", function () {
  document.getElementById("followers-list").classList.add("active");
  document.getElementById("following-list").classList.remove("active");
  this.classList.add("active");
  document.getElementById("following-tab").classList.remove("active");
});

document.getElementById("following-tab").addEventListener("click", function () {
  document.getElementById("following-list").classList.add("active");
  document.getElementById("followers-list").classList.remove("active");
  this.classList.add("active");
  document.getElementById("followers-tab").classList.remove("active");
});

document
  .getElementById("followers-tab2")
  .addEventListener("click", function () {
    document.getElementById("followers-list").classList.add("active");
    document.getElementById("following-list").classList.remove("active");
    this.classList.add("active");
    document.getElementById("following-tab2").classList.remove("active");
  });

document
  .getElementById("following-tab2")
  .addEventListener("click", function () {
    document.getElementById("following-list").classList.add("active");
    document.getElementById("followers-list").classList.remove("active");
    this.classList.add("active");
    document.getElementById("followers-tab2").classList.remove("active");
  });
