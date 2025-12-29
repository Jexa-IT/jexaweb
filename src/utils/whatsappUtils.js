/**
 * WhatsApp utility functions
 */

// Your WhatsApp number with country code
export const WHATSAPP_NUMBER = "919894095909";

/**
 * WhatsApp message templates
 */
export const WHATSAPP_MESSAGES = {
  default: `Hi Jexa Team!

I'm interested in your services and would like to discuss a project with you.

Looking forward to connecting!`,

  project: `Hello! 👋

I came across your portfolio and I'm impressed with your work. I have a project idea that I'd like to discuss.

Can we schedule a quick call?`,

  quote: `Hi Jexa! 🚀

I'm interested in getting a quote for a project. 

Let me know when we can discuss further!`,

  consultation: `Hello! 👋

I'd like to book a free consultation to discuss my project requirements.

When would be a good time to connect?`,

  urgent: `Hi! ⚡

I have an urgent project requirement and would like to discuss it immediately.

Can we connect today?`,
};

/**
 * Generate WhatsApp URL with pre-filled message
 * Uses WHATSAPP_NUMBER from this file
 * @param {string} messageType - Message type from WHATSAPP_MESSAGES (default: 'default')
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppURL = (messageType = "default") => {
  const message = WHATSAPP_MESSAGES[messageType] || WHATSAPP_MESSAGES.default;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
