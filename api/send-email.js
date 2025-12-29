import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, mobile, message } = req.body;

  // Validate input
  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Email Template with your site theme
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 40px rgba(16, 185, 129, 0.2);
            }
            .header {
              background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
              padding: 30px;
              text-align: center;
              border-bottom: 3px solid #0d9488;
            }
            .header h1 {
              margin: 0;
              color: white;
              font-size: 28px;
              font-weight: 700;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            .content {
              padding: 40px 30px;
              background-color: #1e293b;
            }
            .field {
              margin-bottom: 25px;
              padding: 20px;
              background: rgba(15, 23, 42, 0.6);
              border-left: 4px solid #10b981;
              border-radius: 8px;
            }
            .field-label {
              font-weight: 600;
              color: #10b981;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .field-value {
              color: #e5e7eb;
              font-size: 16px;
              word-wrap: break-word;
            }
            .message-box {
              background: rgba(15, 23, 42, 0.6);
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #10b981;
              margin-top: 10px;
            }
            .message-text {
              color: #e5e7eb;
              font-size: 16px;
              white-space: pre-wrap;
              line-height: 1.6;
            }
            .footer {
              background: #0f172a;
              padding: 20px;
              text-align: center;
              border-top: 2px solid #10b981;
            }
            .footer p {
              margin: 5px 0;
              color: #94a3b8;
              font-size: 14px;
            }
            .badge {
              display: inline-block;
              background: #10b981;
              color: white;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <span class="badge">JEXA Infotech</span>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📱 Mobile</div>
                <div class="field-value">${mobile}</div>
              </div>
              
              <div class="field">
                <div class="field-label">💬 Message</div>
                
                  <div class="message-text">${message}</div>
             
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio contact form</p>
              <p style="color: #10b981; font-weight: 600;">JEXA Infotech - Building Digital Solutions</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Jexa Infotech" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}

---
This email was sent from your portfolio contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
    });
  }
}
