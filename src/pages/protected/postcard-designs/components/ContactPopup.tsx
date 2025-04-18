import { Dialog, DialogProps } from '../../../../components/Dialog';
import { ContactUsForm } from '../../../../shared/components/contact-form/ContactUsForm';

type ContactPopupProps = { selectedPostCardImages: string[] } & Omit<
  DialogProps,
  'children'
>;

export const ContactPopup = ({
  selectedPostCardImages,
  ...dialogProps
}: ContactPopupProps) => {
  return (
    <Dialog
      {...dialogProps}
      className="p-8 border border-white/50"
      wrapperClassName="max-w-3xl"
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2">
          {selectedPostCardImages.map((image, index) => (
            <div
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
        <ContactUsForm displayWhite={false} />
      </div>
    </Dialog>
  );
};
