const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joshua.lamke@gmail.com',
        subject: `Welcome to the Task App`,
        text: `Welcome to the app ${name}. Let me know how you like it!`
    })
}

const sendOnCancellation = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joshua.lamke@gmail.com',
        subject: 'Your account has successfully been deleted. Sorry to see you Go!',
        text: `Is there anything we could have done to keep you on board? Hope to see you back here soon ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendOnCancellation
}