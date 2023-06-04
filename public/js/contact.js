const name = document.querySelector("#forename");
const surname = document.querySelector("#surname");
const cname = document.querySelector("#cname");
const product = document.querySelector("#product");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const message = document.querySelector("#message");
const request = document.querySelector("#request");

const form = document.getElementById("contactform");
const formmessage = document.getElementById("formmessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const test = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (test.status != 200) {
    formmessage.innerText = "somethinf error ...";
  } else {
    formmessage.innerText = "your message has send successfully ...";
  }
});
