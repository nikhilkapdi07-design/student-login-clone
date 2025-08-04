// This function handles the login process.
function login() {
  // Get the values from the username and password input fields.
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password match the predefined values.
  if (username === "451202421" && password === "0vu08C") {
    // If they match, hide the login box and show the profile section.
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("profileSection").style.display = "block";
    // Set the username text in the profile section.
    document.getElementById("displayUsername").textContent = username;
  } else {
    // If they don't match, show an alert.
    // NOTE: This alert is for demonstration purposes. In a real application, you would use a custom message box.
    alert("Invalid login!");
  }
}

// This function handles the logout process.
function logout() {
  // Hide the profile section and show the login box.
  document.querySelector(".login-box").style.display = "block";
  document.getElementById("profileSection").style.display = "none";
}

// This function previews the selected image before uploading.
function previewImage() {
  // Get the first file from the file input.
  const file = document.getElementById("uploadPic").files[0];
  // Check if a file was selected.
  if (file) {
    // Create a new FileReader object.
    const reader = new FileReader();
    // Set the onload function to update the image source when the file is read.
    reader.onload = function (e) {
      document.getElementById("profilePic").src = e.target.result;
    };
    // Read the file as a data URL.
    reader.readAsDataURL(file);
  }
}