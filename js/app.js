// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search the user input
const searchUser = document.querySelector("#searchUser");

// Search - input event listener
searchUser.addEventListener("keyup", e => {
  // Get the user input text
  const userText = e.target.value;

  if (userText !== "") {
    // console.log(userText);
    github
      .getUser(userText)
      .then(data => {
        if (data.profile.message === "Not Found") {
          //   Show Alert
          ui.showAlert("User Not Found...", "alert alert-danger");
        } else {
          // Show Profile
          ui.showProfile(data.profile);
          // Show User Repos
          ui.showRepos(data.repos);
        }
      })
      .catch(err => console.log(err));
  } else {
    //   Clear the profile
    ui.clearProfile();
  }
});
