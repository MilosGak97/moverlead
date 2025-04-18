type BlogPostProps = {
  coverUrl: string;
  date: string;
  title: string;
  description: string;
  onClick: () => void;
};

export const BlogPost = ({
  coverUrl,
  date,
  title,
  description,
  onClick,
}: BlogPostProps) => {
  return (
    <article
      className="flex flex-col items-start justify-between border bg-slate-50 border-slate-200 hover:border-slate-400 p-4 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full">
        <img
          src={coverUrl}
          className="aspect-video w-full rounded-2xl bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-900/10 ring-inset" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-slate-500">
            {date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-slate-900 group-hover:text-slate-600">
            {title}
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
