export function createElForData(itm, parent) {
  parent.insertAdjacentHTML(
    "afterbegin",
    `<div id="${itm.id}" class="col-12 col-md-6 col-lg-4">
  <div class="user-card">
    <img class="user-img" src="${itm.avatar}" alt="" />
    <div>
      <p class="user-name">${itm.first_name} ${itm.last_name}</p>
      <p class="user-email">${itm.email}</p>
    </div>
  </div>
</div>`
  );
}

export function createElForSentData(itm, parent) {
  parent.insertAdjacentHTML(
    "afterbegin",
    `<div id="${itm.id}" class="col-12">
    <div class="user-card">
      <div>
      <h3>You've got success response from server for login:</h3>
        <p class="user-name">Your ID: ${itm.id}</p>
        <p class="user-name">Your auth-token: ${itm.token}</p>
        <p class="user-email">This information is private and won't usually shown for anybody.</p>
      </div>
    </div>
  </div>`
  );
}
