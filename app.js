const express = require("express");
const dotenv = require("dotenv");
const app = express();
const nodemailer = require("nodemailer");
dotenv.config({});
console.log(process.env);
port = process.env.PORT || 2000;

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/" || "/home", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/service", (req, res) => {
  res.render("service");
});

app.post("/contact", async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "june0@ethereal.email",
        pass: "YEmWQWyqcjhNvWzgXh",
      },
    });

    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    res
      .status(200)
      .json({ msg: "your message has been send successfully ....." });
  } catch (error) {
    res.status(500).json({ msg: "unexpected error" });
  }
});

app.listen(port, () => {
  console.log(`the site is runnig on port no ${port}`);
});
