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

