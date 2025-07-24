emailjs.init("anbulalithagopal@gmail.com");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("anbulalithagopal@gmail.com", "your_template_id", this)
      .then(() => {
        alert("Message sent!");
      }, (error) => {
        alert("Error occurred: " + error);
      });
});
