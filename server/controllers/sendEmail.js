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
        New Contact form submission:
        Name:${FormData.firstName} ${FormData.lastName}
        Email: ${FormData.email}
        Message: ${FormData.message}

        New Membership/Volunteerism form submission:


        
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
