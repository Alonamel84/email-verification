const { create, verify } = require('../model/Email');
const transporter = require('../mail');
const home = function (req, res, next) {
  res.render('index', { title: 'Express' });
};
const createEmail = async function (req, res, next) {
  const createdEmail = await create(req.body.email);
  transporter
    .sendMail({
      from: 'alonamelnykova@gmail.com',
      to: createdEmail.email,
      subject: 'Verify email',
      html: `<a href='http://localhost:3000/verify?code=${createdEmail.code}'>Press to verify</a>`,
    })
    .then(info => {
      req.flash('message', 'Email sent succesfully for verification');
    })
    .catch(err => {
      req.flash('message', 'Email was not sent');
      console.log(err);
    })
    .finally(() => {
      res.redirect('/');
    });
};

const verifyEmail = async (req, res, next) => {
  await verify(req.query.code);
  res.redirect('/');
};
module.exports = { home, createEmail, verifyEmail };
