const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const formMes = ({email}) => {
  return {
    to: email,
    from: config.email,
    subject: 'price went down',
    text: 'price went down',
    html: '<strong>dfsldhf</strong>',
  };
}

const sentNotification = async (users) => {
  try {
    const promises = users.map(user => sgMail.send(formMes(user)));
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { sentNotification };
