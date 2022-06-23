function SendMail() {
  var params = {
    fom_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_lj95wfq", "template_whzqabk", params)
    .then(function(res) {
      alert("Sent to Valentine! " + res.status);
    });
}