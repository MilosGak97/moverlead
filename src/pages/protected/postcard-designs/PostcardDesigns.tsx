import { Container } from '../../../components/Container';
import { CurvyLineIcon } from '../../../components/iconography/CurvyLineIcon';
import { PostcardImagesGroup } from './components/PostcardImagesGroup';
import { PostcardItem, postcards } from './data/postcards';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { EmailIcon } from '../../../components/iconography/EmailIcon';
import { ContactPopup } from './components/ContactPopup';
import { useState } from 'react';

export const PostcardDesigns = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [selectedPostcard, setSelectedPostcard] = useState<PostcardItem | null>(
    null
  );

  const handleClosePopup = () => {
    setIsContactPopupOpen(false);
    setTimeout(() => {
      setSelectedPostcard(null);
    }, 300);
  };

  return (
    <>
      <ContactPopup
        selectedPostcard={selectedPostcard}
        isDialogOpen={isContactPopupOpen}
        onClose={handleClosePopup}
      />
      <div className="w-full h-full">
        <div className="p-4">
          <Container>
            <div className="mt-10 text-center max-w-3xl mx-auto">
              <h1
                className={
                  'font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl'
                }
              >
                Completely{' '}
                <span className="relative text-primary">
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20">
                    <CurvyLineIcon />
                  </div>
                  Free
                </span>{' '}
                Postcard Designs
              </h1>
              <p className={'mt-6 text-lg tracking-tight text-slate-700'}>
                Explore our{' '}
                <span className="text-primary font-medium">
                  custom-designed
                </span>{' '}
                postcards for moving companies. All designs are{' '}
                <span className="text-primary font-medium">free</span>. Contact
                us, and we’ll send the perfect one for you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 mt-12 gap-x-4 sm:gap-x-6 xl:gap-x-10 gap-y-4">
              <a
                href={'tel:8559708419'}
                className="w-full flex items-center gap-4 xl:gap-6 border border-slate-200 rounded-xl p-3 bg-slate-50 hover:bg-slate-100"
              >
                <PhoneIcon className="w-10 sm:w-12 xl:w-20 fill-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-lg/6 text-slate-900">
                    Call us now
                  </span>
                  <span className="text-lg/6 xl:text-2xl text-slate-700">
                    8559708419
                  </span>
                </div>
              </a>
              <a
                href="mailto:support@moverlead.com"
                className="w-full flex items-center gap-4 xl:gap-6 border border-slate-200 rounded-xl p-3 bg-slate-50 hover:bg-slate-100"
              >
                <div className="w-10 sm:w-12 xl:w-20 text-primary flex-shrink-0">
                  <EmailIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-lg/6 text-slate-900">
                    Email our team
                  </span>
                  <span className="text-lg/6 xl:text-2xl text-slate-700">
                    support@moverlead.com
                  </span>
                </div>
              </a>
              <div className="md:col-span-2 text-center text-lg">
                Ready to get your free postcard? Contact us directly or browse
                our collection below.
              </div>
            </div>

            <div className="grid place-items-center mt-16 bg-primary py-1 rounded-full text-center">
              <h2 className="text-2xl font-bold text-white">
                Browse Our Free Postcard Designs
              </h2>
            </div>
            <div className="mt-10 flex flex-col items-center gap-8 lg:gap-12">
              {postcards.map((postcard, index) => (
                <PostcardImagesGroup
                  key={postcard.id}
                  images={postcard.images}
                  includeBorder={index !== postcards.length - 1}
                  onClick={() => {
                    setSelectedPostcard(postcard);
                    setIsContactPopupOpen(true);
                  }}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
