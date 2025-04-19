import { useFormContext } from 'react-hook-form';
import { ControlledForm } from '../../../../components/ControlledForm';
import { Dialog, DialogProps } from '../../../../components/Dialog';
import { useToast } from '../../../../hooks/useToast';
import { ContactUsForm } from '../../../../shared/components/contact-form/ContactUsForm';
import {
  ContactUsFormData,
  contactUsSchema,
} from '../../../../shared/schemas/contactUsSchema';
import { useMutation } from '@tanstack/react-query';
import { Toast } from '../../../../components/Toast';
import { api } from '../../../../api/api';

type ContactPopupProps = { selectedPostCardImages: string[] } & Omit<
  DialogProps,
  'children'
>;

export const ContactPopupView = ({
  selectedPostCardImages,
  ...dialogProps
}: ContactPopupProps) => {
  const { toastText, addToast } = useToast();
  const {
    toastText: successPostcardContactText,
    addToast: addSuccessPostcarcContactToast,
  } = useToast();

  const { reset } = useFormContext<ContactUsFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactUsFormData) => {
      //TODO - pass data to the mutation
      console.log(data);
      return api.properties.propertiesControllerHandleWebhook();
    },
    onSuccess: () => {
      addSuccessPostcarcContactToast(
        'Your postcard request was sent successfully. We`ll be in touch soon.'
      );
      reset();
    },
    onError: () => addToast(),
  });

  const handlePostcardContactSubmit = (data: ContactUsFormData) => {
    mutate(data);
  };

  return (
    <>
      <Dialog
        {...dialogProps}
        className="p-8 border border-white/50"
        wrapperClassName="max-w-3xl"
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2">
            {selectedPostCardImages.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden border-2 border-slate-300 ${
                  index ? 'rounded-r-xl' : 'rounded-l-xl'
                }`}
              >
                <img key={image} src={image} />
              </div>
            ))}
          </div>
          <span className="text-slate-900 text-lg font-medium">
            Fill in the form and we'll make sure{' '}
            <span className="text-primary">your postcard</span> finds its way to
            you:
          </span>
          <ContactUsForm
            onFormSubmit={handlePostcardContactSubmit}
            isLoading={isPending}
            displayWhite={false}
          />
        </div>
      </Dialog>
      {toastText && <Toast text={toastText} />}
      {successPostcardContactText && (
        <Toast text={successPostcardContactText} type={'success'} />
      )}
    </>
  );
};

export const ContactPopup = (props: ContactPopupProps) => {
  return (
    <ControlledForm schema={contactUsSchema}>
      <ContactPopupView {...props} />
    </ControlledForm>
  );
};
