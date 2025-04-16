import { Container } from '../../../components/Container';
import { CurvyLineIcon } from '../../../components/iconography/CurvyLineIcon';
import { PostcardImagesGroup } from './components/PostcardImagesGroup';
import { postcards } from './data/postcards';

export const PostcardDesigns = () => {
  return (
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
              <span className="text-primary font-medium">custom-designed</span>{' '}
              postcards for moving companies. All designs are{' '}
              <span className="text-primary font-medium">free</span>. Contact
              us, and we’ll send the perfect one for you!
            </p>
          </div>
          <div className="grid place-items-center mt-16 bg-primary py-1 rounded-full text-center">
            <h2 className="text-2xl font-bold text-white">Postcards Gallery</h2>
          </div>
          <div className="mt-10 flex flex-col items-center gap-8 lg:gap-12">
            {postcards.map(({ id, images }, index) => (
              <PostcardImagesGroup
                key={id}
                images={images}
                includeBorder={index !== postcards.length - 1}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
