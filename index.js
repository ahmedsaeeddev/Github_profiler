let user = document.querySelector('form input');

let form = document.querySelector('form');
let profileContainer = document.querySelector('#profileContainer');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  fetch(`https://api.github.com/users/${user.value.toLowerCase()}`)
    .then((response) => response.json())
    .then((json) => {
      profileContainer.innerHTML = profileContainer.innerHTML = `
            <div class="img"><img src="${json.avatar_url
        }" alt="" /></div>
      <div class="name"><h2>${json.name}</h2></div>
      <div class="userName">${json.login}</div>
      <div class="description">
    ${json.bio}
      </div>
      <div class="line"></div>
      <div class="info">
        <div class="followers"><span class="black">Followers : </span> ${json.followers}</div>
        <div class="following"><span class="black">Following : </span>${json.following}</div>
        <div class="btn">
            <button id="follow">Follow</button>
        </div>
      </div>`
      if (json.bio === undefined) {
        profileContainer === ''
        
      }
    });
    user.value = '';
});
let newDate = new Date();
document.querySelector('.year').innerHTML = newDate.getFullYear();