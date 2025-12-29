import toast from 'react-hot-toast';

const baseStyle = {
  background: '#1e293b',
  color: '#fff',
  padding: '16px',
  borderRadius: '12px',
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 5000,
    position: 'top-center',
    style: {
      ...baseStyle,
      border: '1px solid #10b981',
    },
    iconTheme: {
      primary: '#10b981',
      secondary: '#fff',
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    duration: 5000,
    position: 'top-center',
    style: {
      ...baseStyle,
      border: '1px solid #ef4444',
    },
    iconTheme: {
      primary: '#ef4444',
      secondary: '#fff',
    },
  });
};