const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "jinanan2@gmail.com",
    pass: "hibv zmdc kvfm zxfq",
  },
});

const sendEmail = (FormData) => {
  const mailOptions = {
    from: "nafbekg@gmail.com",
    to: "mspbekan@gmail.com",
    subject: "New Form submission",
    text: `
        
        Name:${FormData.fullName || FormData.firstName || ""} ${
      FormData.lastName || ""
    }
        Purpose of the form: ${FormData.purpose || "Contact"}
        Volunteerism Area: ${FormData.volunteerismArea || "----------"}
        Message: ${FormData.message || "--------"}
        Email: ${FormData.email}
        Phone Number: ${FormData.phoneNumber || "Not provided."}
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendEmail;
