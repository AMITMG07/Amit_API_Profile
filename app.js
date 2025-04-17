async function fetchProfile() {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        document.getElementById('avatar').src = user.picture.large;
        document.getElementById('name').innerText = user.name.first + ' ' + user.name.last;
        document.getElementById('email').innerText = user.email;
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }
  
  fetchProfile();
  