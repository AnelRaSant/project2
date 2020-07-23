$(document).ready(function () {

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // Get logged in user's data
  let user = $.get("/api/user_data").then(function (data) {
    console.log('user.email: ', data.email);
    console.log('user.id: ', data.id);
    return data;
  });
});
