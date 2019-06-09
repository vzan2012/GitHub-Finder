class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  // Show the profile to UI
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <img src="${
              user.avatar_url
            }" alt="" class="img-fluid mb-2 user-img" title="${user.name}" />
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-block btn-primary btn-view-profile">View Profile</a>
          </div>
          <div class="col-md-9 col-xs-12">
           <h3>${user.name}</h3>
           <div class="badge-group">
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-primary">Following: ${
              user.following
            }</span>
           </div>
           <div class="n-section">
            <ul class="list-group guf-list-group">
                <li class="list-group-item">Username: <span class="badge badge-info badge-pill">${
                  user.login
                }</span></li>            
                <li class="list-group-item">Company: <span class="badge badge-info badge-pill">${
                  user.company
                }</span></li>
                <li class="list-group-item">Website/Blog: <span class="badge badge-info badge-pill">${
                  user.blog
                }</span></li>
                <li class="list-group-item">Location: <span class="badge badge-info badge-pill">${
                  user.location
                }</span></li>
                <li class="list-group-item">Member Since: <span class="badge badge-info badge-pill">${
                  user.created_at
                }</span></li>
            </ul>
           </div>
          </div>

        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `;
  }

  // Show the Alerts
  showAlert(message, className) {
    // Clear the alert
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add Class Name to the div
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get the container
    const container = document.querySelector(".searchContainer");
    // Get the search card
    const search = document.querySelector(".search");
    // Insert Alert
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear the Alert
  clearAlert() {
    const currAlert = document.querySelector(".alert");

    if (currAlert) currAlert.remove();
  }

  // Show User Repos
  showRepos(repos) {
    let output = "";
    // console.log(repos);
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <strong><a href="${repo.html_url}" title="${
        repo.name
      }" target="_blank">${repo.name}</a></strong>
          </div>
          <div class="col-md-6 col-xs-12">
            <span class="badge badge-primary">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-secondary">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });

    document.querySelector("#repos").innerHTML = output;
  }

  // Clear the Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
