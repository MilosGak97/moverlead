import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { UserIcon } from '@heroicons/react/24/outline';

const avatarVariants = cva(
  'relative rounded-full overflow-hidden bg-slate-200',
  {
    variants: {
      size: {
        base: 'w-8 h-8',
        full: 'w-full h-full',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
);

type AvatarProps = VariantProps<typeof avatarVariants> & {
  imageUrl: string;
  className?: string;
};

const Avatar = ({ imageUrl, size, className }: AvatarProps) => {
  return (
    <div className={twMerge(avatarVariants({ size }), className)}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute left-1/2 -translate-x-1/2 w-full p-1">
          <UserIcon className="fill-slate-700" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
