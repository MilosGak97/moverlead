import { PhoneIcon } from '@heroicons/react/20/solid';
import { Container } from '../../../components/Container';
import { EmailIcon } from '../../../components/iconography/EmailIcon';
import { SocialNetworkLinks } from '../home/components/SocialNetworkLinks';
import { ContactUsForm } from '../../../shared/components/contact-form/ContactUsForm';
import { ControlledForm } from '../../../components/ControlledForm';
import {
  ContactUsFormData,
  contactUsSchema,
} from '../../../shared/schemas/contactUsSchema';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../../api/api';
import { Toast } from '../../../components/Toast';
import { useToast } from '../../../hooks/useToast';
import { useFormContext } from 'react-hook-form';

export const ContactUsView = () => {
  const { toastText, addToast } = useToast();
  const {
    toastText: successContactUsText,
    addToast: addSuccessContactUsToast,
  } = useToast();

  const { reset } = useFormContext<ContactUsFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactUsFormData) => {
      return api.common.commonControllerContactFormWebhook({
        requestBody: data,
      });
    },
    onSuccess: () => {
      addSuccessContactUsToast(
        'Message sent successfully. We’ll get back to you soon.'
      );
      reset();
    },
    onError: () => addToast(),
  });

  const handleContactUsSubmit = (data: ContactUsFormData) => {
    mutate(data);
  };

  return (
    <>
      <Container className="mt-10 mb-20">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1
            className={
              'font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl'
            }
          >
            Need Help? <span className="text-primary">Contact Us</span>
          </h1>
          <p className={'mt-6 text-lg tracking-tight text-slate-700'}>
            Have a question or need more info? Whether you're interested in our
            services or just want to say hi, we're here to help. Reach out via{' '}
            <a
              href="tel:8559708419"
              className="text-primary font-medium hover:underline"
            >
              phone
            </a>{' '}
            or{' '}
            <a
              href="mailto:support@moverlead.com"
              className="text-primary font-medium hover:underline"
            >
              email
            </a>{' '}
            - our team is happy to assist!
          </p>
        </div>

        <div className="relative isolate bg-blue-950 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-12 gap-16 lg:gap-8">
            <div className="relative lg:static text-white">
              <h2 className="text-4xl font-semibold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-4">
                Have something on your mind? Call, email, or connect with us on
                social - we’d love to hear from you.
              </p>
              <div className="flex flex-col mt-6 gap-6">
                <a
                  href="tel:8559708419"
                  className="flex items-center gap-3 text-lg hover:underline"
                >
                  <PhoneIcon width={'1.75rem'} className={'text-primary'} />
                  855 970 8419
                </a>
                <a
                  href="mailto:support@moverlead.com"
                  className="flex items-center gap-3 text-lg hover:underline w-fit"
                >
                  <div className="w-7 text-primary">
                    <EmailIcon />
                  </div>
                  support@moverlead.com
                </a>
                <SocialNetworkLinks
                  wrapperClassName="mt-4 lg:mt-6"
                  iconsLinkClassName="text-primary hover:text-primaryHover"
                />
              </div>
            </div>
            <ContactUsForm
              onFormSubmit={handleContactUsSubmit}
              isLoading={isPending}
            />
          </div>
        </div>
      </Container>
      {toastText && <Toast text={toastText} />}
      {successContactUsText && (
        <Toast text={successContactUsText} type={'success'} />
      )}
    </>
  );
};

export const ContactUs = () => {
  return (
    <ControlledForm schema={contactUsSchema}>
      <ContactUsView />
    </ControlledForm>
  );
};
