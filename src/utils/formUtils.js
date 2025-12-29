
export const validateFormData = (formData) => {
  return formData.name && formData.email && formData.mobile && formData.message;
};

export const getEmptyFormData = () => ({
  name: '',
  email: '',
  mobile: '',
  message: ''
});