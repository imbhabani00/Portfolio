import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "i.m.bhabani.00@gmail.com",
      pass: "fohw utyb orsc dkjw",
    },
  });

  // Set up email data
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "i.m.bhabani.00@gmail.com", // Change this to the recipient's email address
    subject: "Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
