import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (status, text) => {
  return toast[`${status}`](`${text}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default notify;
