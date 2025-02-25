import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export const SuccessfullSubscription = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => navigate(routes.dashboard);

  return (
    <Dialog
      open={true}
      onClose={navigateToDashboard}
      className="relative z-50 p-2"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg border bg-white p-8 rounded-2xl">
          <p className="text-2xl font-bold">Successful Subscription</p>
          <p className="text-base mt-3 mb-6">
            You have successfully subscribed to leads for your selected
            counties. Get ready to receive new opportunities!
          </p>
          <button
            onClick={navigateToDashboard}
            className="px-6 py-3 rounded-md bg-[#4379F2] text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
          >
            Dashboard
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
