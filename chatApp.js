const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send(`
    <form action="/username" method="POST"  onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
      <input type="text" name="username" id="username" placeholder="Enter username">
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/username", (req, res) => {
  fs.appendFile("username.txt", `${req.body.username}`, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/message");
});

app.get("/message", (req, res) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      data = "No username found";
    }
    res.send(`
      ${data}
      <form action="/login" method="POST"  onsubmit="localStorage.setItem('message', document.getElementById('message').value)">
        <input type="text" name="message" id="message" placeholder="Enter message">
        <button type="submit">Send</button>
      </form>
    `);
  });
});

app.post("/login", (req, res) => {
  fs.appendFile("username.txt", ` : ${req.body.message}\n`, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/message");
  });
});

app.listen(2500);
