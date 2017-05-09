// 3. Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res) {
  res.send("Welcome to the Survey!");
});




// * A default USE route that leads to `home.html` which displays the home page.