import { useState, useCallback } from 'react';
import { validateFormData, getEmptyFormData } from '@/utils/formUtils';
import { sendContactEmail } from '@/services/emailService';
import { showSuccessToast, showErrorToast } from '@/utils/toastConfig';

export const useFormState = () => {
  const [formData, setFormData] = useState(getEmptyFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        showSuccessToast('Message sent successfully! We\'ll get back to you soon.');
        setFormData(getEmptyFormData());
      } else {
        showErrorToast(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      showErrorToast('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return { formData, handleChange, handleSubmit, isSubmitting };
};