export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email service error:', error);
    return { 
      success: false, 
      error: error.message || 'Something went wrong. Please try again.' 
    };
  }
};