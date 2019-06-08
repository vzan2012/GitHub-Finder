// Init GitHub
const github = new GitHub();

// Search the user input
const searchUser = document.querySelector("#searchUser");

// Search - input event listener
searchUser.addEventListener("keyup", e => {
  // Get the user input text
  const userText = e.target.value;

  if (userText !== " ") {
    // console.log(userText);
    github
      .getUser(userText)
      .then(data => {
          if(data.profile.message === 'Not Found') {
            //   Show Alert
          } else {
            //   Show Profile
          }
      })
      .catch(err => console.log(err));
  } else {
    //   Clear the profile
    
  }
});
