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

//follower-following section

document.addEventListener("DOMContentLoaded", function () {
  var followersTab = document.getElementById("followers-tab");
  var followingTab = document.getElementById("following-tab");

  var followersCover = document.querySelector(".followers-gradient-cover");
  var followingCover = document.querySelector(".following-gradient-cover");

  followingCover.style.display = "block";
  followersCover.style.display = "none";

  followersTab.addEventListener("click", function () {
    followersCover.style.display = "none";
    followingCover.style.display = "block";
    followersTab.classList.add("active");
    followingTab.classList.remove("active");
  });

  followingTab.addEventListener("click", function () {
    followersCover.style.display = "block";
    followingCover.style.display = "none";
    followingTab.classList.add("active");
    followersTab.classList.remove("active");
  });
});
