class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

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
}
