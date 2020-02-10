import { toast } from 'react-toastify';

class ToastifyService {
  success(msg) {
    toast.success(msg);
  }

  error(e) {
    const msg = e.message || e;
    toast.error(msg);
  }
}

export default new ToastifyService();