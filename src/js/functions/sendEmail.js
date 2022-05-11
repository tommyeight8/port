export const sendEmail = (email) => {
    Email.send({
        SecureToken : "8e151e47-76b4-456a-a0b7-876342591fa4",
        To : 'tommyxlanes@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}

// cb7d2071-0f66-48bc-8913-522f0c9482c4