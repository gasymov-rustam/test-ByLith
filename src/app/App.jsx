import '@/app/style/global.scss';
import { ToastContainer } from 'react-toastify';

import { Router } from './providers';

export const App = () => {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="colored"
        className="toast-container"
      />
    </>
  );
};
