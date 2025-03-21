/**
 * Email sender using SMTP for TechXtreme 2025 event registration
 * Requires: npm install nodemailer
 */

const nodemailer = require('nodemailer');

/**
 * Sends a confirmation email for TechXtreme 2025 event registration via SMTP
 * @param {string} email - The primary recipient's email address
 * @param {string|string[]} cc - Email address(es) to CC (can be a string or array of strings)
 */
function sendConfirmationEmail(email, cc = []) {
  // Configure SMTP transporter
  // Replace these with your actual SMTP server details
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Your SMTP server hostname
    port: 587, // Common SMTP ports: 25, 465 (SSL), 587 (TLS)
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'tech@gandhinagaruni.ac.in', // Your SMTP username
      pass: 'tfom ptwq vufd grrf' // Your SMTP password
    }
  });

  const subject = "Event Registration Confirmation";
  
  // Create HTML email body with nice formatting
  const htmlBody = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Announcing TechXtreme 2025</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
            background:rgb(27, 23, 23);
            margin: 0;
            padding: 0;
            font-family: 'Roboto', Arial, sans-serif;
            color: white;
            text-align: center;
            line-height: 1.6;
        }
        
        .container {
            max-width: 650px;
            margin: 20px auto;
            padding: 0;
            background: linear-gradient(180deg, #000000, #050714);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header {
            background: rgba(0, 0, 0, 0.7);
            padding: 25px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba(255, 204, 0, 0.3);
        }
        
        .header img {
            height: 150px;
            margin: 0 10px;
        }
        
        .content {
            padding: 30px 25px;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 32px;
            color: #ffcc00;
            margin: 0 0 25px 0;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
            font-weight: 700;
        }
        
        .description {
            font-size: 16px;
            max-width: 85%;
            margin: 0 auto 30px;
            color: #e6e6e6;
        }
      
        
        .event-card {
            padding: 25px 20px;
            border-radius: 12px;
            text-align: center;
            flex: 1;
            min-width: 170px;
            max-width: 30%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        
        .technical { 
            background: linear-gradient(135deg, #09203f, #537895); 
            border: 1px solid rgba(83, 120, 149, 0.5);
        }
        
        .non-technical { 
            background: linear-gradient(135deg, #6a0572, #a4508b); 
            border: 1px solid rgba(164, 80, 139, 0.5);
        }
        
        .esports { 
            background: linear-gradient(135deg, #7b1fa2, #ff4081); 
            border: 1px solid rgba(255, 64, 129, 0.5);
        }
        
        .event-card h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 18px;
            color: #ffcc00;
            margin-top: 0;
            margin-bottom: 15px;
        }
        
        .event-card p {
            font-size: 14px;
            color: white;
            margin: 0;
        }
        
        .cta-section {
            margin: 35px 0;
        }
        
        .cta-button {
            display: inline-block;
            padding: 16px 30px;
            background: linear-gradient(to right, #ffcc00, #ff9500);
            color: black;
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            width: auto;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Orbitron', sans-serif;
            box-shadow: 0 5px 15px rgba(255, 204, 0, 0.4);
        }
        
        .cta-button:hover {
            background: linear-gradient(to right, #ff9500, #ffcc00);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(255, 204, 0, 0.5);
        }
        
        .registration {
            margin: 20px 0;
        }
        
        .registration a {
            color: #ffcc00;
            font-weight: bold;
            text-decoration: none;
            font-size: 16px;
            letter-spacing: 1px;
            border: 1px solid rgba(255, 204, 0, 0.3);
            padding: 8px 20px;
            border-radius: 6px;
            transition: all 0.3s ease;
            display: inline-block;
        }
        
        .registration a:hover {
            background: rgba(255, 204, 0, 0.1);
        }
        
        .footer {
            padding: 25px 20px;
            background: rgba(0, 0, 0, 0.5);
            border-top: 1px solid rgba(255, 204, 0, 0.3);
        }
        
        .contact {
            margin-bottom: 15px;
        }
        .contact p {
            color :rgb(246, 245, 241);
        }
        
        .contact a {
            color: #ffcc00;
            font-weight: bold;
            text-decoration: none;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
        }
        
        .social-links a {
            color: #ffcc00;
            font-weight: bold;
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background: rgba(255, 204, 0, 0.2);
            transform: translateY(-2px);
        }
        
        .copyright {
            font-size: 14px;
            color: #999;
            margin-top: 20px;
        }
        
        /* Improved Media Queries */
        @media screen and (max-width: 700px) {
            .container {
                margin: 10px;
                border-radius: 10px;
            }
            
            .header {
                padding: 15px 10px;
                flex-direction: column;
                gap: 15px;
            }
            
            h1 {
                font-size: 26px;
            }
            
            .description {
                font-size: 15px;
                max-width: 95%;
            }
     
            
            .event-card {
                min-width: 45%;
                max-width: 100%;
                padding: 20px 15px;
            }
        }
        
        @media screen and (max-width: 500px) {
            .content {
                padding: 20px 15px;
            }
            
            .header img {
                height: 60px;
            }
            
            h1 {
                font-size: 22px;
            }
            
            .event-cards {
               width: 100%;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin: 30px 0;
              gap: 15px;
            }
            
             .technical {
      border-left: 5px solid #3498db;
    }
    
    .non-technical {
      border-left: 5px solid #e74c3c;
    }
    
    .esports {
      border-left: 5px solid #2ecc71;
    }
    
            .event-card {
                width: 85%;
                max-width: 100%;
                min-width: auto;
            }
            
            .cta-button {
                padding: 14px 25px;
                font-size: 16px;
                width: 80%;
                max-width: 250px;
            }
            
            .social-links {
                flex-direction: column;
                gap: 10px;
            }
            
            .social-links a {
                display: block;
                width: 80%;
                margin: 0 auto;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Logos -->
        <div class="header">
            <img src="https://techxtreme.gu-tech.org/_next/static/media/logo-tx.76655086.png" alt="TechXtreme 2025 Logo">
        </div>
        
        <div class="content">
            <!-- Title -->
            <h1>TechXtreme 2025 is Here!</h1>
            
            <!-- Description -->
          <p class="description">TechXtreme 2025 is not just another tech festival—it's a gateway to the future. Witness groundbreaking innovations, engage in thrilling competitions, and interact with visionaries from across industries. Whether you're a coding prodigy, an esports enthusiast, or a creative thinker, there's something for everyone. Be part of the revolution where technology meets talent!</p>
            
            <!-- Event Cards (Responsive) -->
            <div class="event-card technical description">
    <h2>⚙️ Technical Events</h2>
    <p>Compete in coding, robotics & AI challenges. Push your skills to the limit!</p>
  </div>
  
  <div class="event-card non-technical description">
    <h2>🎭 Non-Technical Events</h2>
    <p>Showcase skills in biz, law, literature & design. Unleash your creativity!</p>
  </div>
  
  <div class="event-card esports description">
    <h2>🎮 Esports Arena</h2>
    <p>Battle in top gaming competitions. Prove your skills in the ultimate gaming showdown!</p>
  </div>
            
            <!-- Call-to-Action Button -->
            <div class="cta-section">
                <a href="https://techxtreme.gu-tech.org/" class="cta-button">WE ARE LIVE NOW!!!</a>
            </div>
            
            <!-- Registration Notice -->
            <div class="registration">
                <a href="https://techxtreme.gu-tech.org/">REGISTRATION WILL OPEN SOON</a>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="contact">
                <p>GET IN TOUCH:</p>
                <a href="mailto:tech@gandhinagaruni.ac.in">tech@gandhinagaruni.ac.in</a>
            </div>
            
            <div class="social-links">
                <a href="https://in.linkedin.com/company/gandhinagaruni">LinkedIn</a>
                <a href="https://techxtreme.gu-tech.org/">Website</a>
                <a href="https://www.instagram.com/techxtreme.gu/">Instagram</a>
            </div>
            
            <p class="copyright">&copy; 2025 TechXtreme. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  
  // Configure email options, including CC
  const mailOptions = {
    from: 'tech@gandhinagaruni.ac.in',
    to: ["students@gandhinagaruni.ac.in","students@git.org.in",],
    cc: ["vickkyyyy.bsn@gmail.com","shadowvortex9290@gmail.com"],
    subject: subject,
    text: "Your registration has been confirmed. Please view this email in HTML format for full details.",
    html: htmlBody,
    attachments: [
        {
          filename: 'Poster',
          path: 'https://techxtreme.gu-tech.org/_next/static/media/poster.67cc6dcd.png',
          cid: 'techxtreme-logo'
        }
      ]
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return false;
    }
    console.log('Email sent successfully:', info.messageId);
    return true;
  });
}

// Example usage:
// Single CC recipient
sendConfirmationEmail()
// Multiple CC recipients
// sendConfirmationEmail("user@example.com", ["cc1@example.com", "cc2@example.com"]);

// No CC recipients
// sendConfirmationEmail("user@example.com");

// sendConfirmationEmail("students@gandhinagaruni.ac.in","students@git.org.in",  from: 'tech@gandhinagaruni.ac.in',
// to: ["students@gandhinagaruni.ac.in","students@git.org.in"],
// cc: ["tx@gandhinagaruni.ac.in","staff@gandhinagaruni.ac.in","staff@gandhinagaruni.ac.in","vc@gandhinagaruni.ac.in","registrar@gandhinagaruni.ac.in","dracad@gandhinagaruni.ac.in","dradmin@gandhinagaruni.ac.in","dycoe@gandhinagaruni.ac.in","hoi@gandhinagaruni.ac.in","hod@gandhinagaruni.ac.in","230101027049@gandhinagaruni.ac.in"],
// "]);


module.exports = { sendConfirmationEmail };