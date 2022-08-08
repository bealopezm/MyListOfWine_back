require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = async (msg, pMessage) => {
  console.log(pMessage)
  try {
    await sgMail.send(msg);
     console.log({ message: pMessage });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = {
  sendMail
};
