const config = {
    db: 'mongodb+srv://toniscas:toniscas@cluster0.aawr3rb.mongodb.net/stadium',
    secret: 'a-string-secret-at-least-256-bits-long',
    expiresPassword: 86400, // expires in 24hours
    saltRounds: 10
 }
 
 module.exports = config;