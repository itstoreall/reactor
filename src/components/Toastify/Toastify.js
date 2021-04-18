import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (status, text) => {
  switch (status) {
    case 'success':
      toast.success(`${text}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'error':
      toast.error(`${text}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    default:
      break;
  }
};

export default notify;
