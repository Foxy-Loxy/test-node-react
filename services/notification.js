const config = require('../config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.gridApiKey);

const formMes = ({email, token}) => {
  return {
    to: email,
    from: config.email,
    subject: 'price went down',
    text: 'price went down',
    html: `<a href="localhost:3000/unsubscribe?token=${token}>unsubscribe</a>`,
  };
}

const sentNotifications = async (users) => {
  try {
    const promises = users.map(user => sgMail.send(formMes(user)));
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { sentNotifications };
