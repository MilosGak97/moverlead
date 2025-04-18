type PostcardImageGroupProps = {
  images: string[];
  includeBorder?: boolean;
  onClick: () => void;
};

export const PostcardImagesGroup = ({
  images,
  includeBorder = true,
  onClick,
}: PostcardImageGroupProps) => {
  return (
    <div
      className={`w-full grid sm:grid-cols-[repeat(auto-fit,_minmax(27.5rem,_1fr))] gap-4 ${
        includeBorder && 'pb-8 lg:pb-12 border-b-2 border-slate-300'
      }`}
      onClick={onClick}
    >
      {images.map((image) => (
        <div
          key={image}
          className="relative group border border-slate-300 rounded-lg overflow-hidden cursor-pointer text-center hover:scale-[1.01] active:scale-100 transition-transform duration-300"
        >
          <div className="absolute w-full h-full hidden group-hover:block bg-black opacity-60"></div>
          <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden group-hover:block text-white font-bold text-xl text-nowrap">
            Claim this postcard!
          </p>
          <img src={image} alt="Postcard" />
        </div>
      ))}
    </div>
  );
};
