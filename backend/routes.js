const express=require('express');
const router=express.Router();
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/about', (req, res)=>{
  res.render('about');
});
router.get('/mission', (req, res)=>{
  res.render('mission');
});
router.get('/provider', (req, res)=>{
  res.render('provider');
});
router.get('/services', (req, res)=>{
    res.render('services');
  });

router.get('/billing',(req,res)=>{
    res.render('billing');
});
router.get('/insurance',(req,res)=>{
    res.render('insurance');
});
router.get('/out-of-pocket',(req,res)=>{
    res.render('pocket');
});
router.get('/contact',(req,res)=>{
    res.render('contact');
});
router.post('/submit-contact-form', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Please enter a valid email address.');
    }
    let transporter = nodemailer.createTransport({
        // Example using Gmail
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // use environment variables for security
            pass: process.env.PASSWORD,
        },
    });

    // Send mail with defined transport object
    let info;
    try {
        info = await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: "your-email@example.com", // list of receivers
            subject: "New Contact Form Submission", // Subject line
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
            // html body can also be defined here
        });

        console.log("Message sent: %s", info.messageId);
        // Redirect to a 'thank you' page or send a success response
        res.redirect('/thank-you');
    } catch (error) {
        console.error('Error sending email', error);
        // Render an error page or send an error response
        res.status(500).send('Error sending message.');
    }
});

module.exports=router;
