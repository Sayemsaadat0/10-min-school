import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'leading-none transition-all disabled:bg-slate-300 cursor-pointer text-w-small-regular-16 ',
  {
    variants: {
      variant: {
        core: 'bg-green-500 hover:bg-green-600 text-white px-3 md:px-6 py-2 rounded-md !font-semibold text-sm md:text-base',

        outline:
          'rounded-[8px] border border-alpha-500 text-alpha-500 py-2 px-3 hover:bg-error-500 hover:border-error-500 hover:text-s-white transition-all',

        ghost: 'rounded-[8px] bg-s-white text-black py-2 px-3  hover:bg-s-gray transition-all',

        icon: ' bg-transparent text-black py-2  hover:underline transition-all',
      },
    },
    defaultVariants: {
      variant: 'core',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  reverse?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  label,
  icon,
  reverse = false,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${cn(buttonVariants({ variant, className }))}`} {...props}>
      <div
        className={
          icon &&
          ` flex justify-center items-center   ${reverse ? 'flex-row-reverse ' : 'flex-row'}`
        }
      >
        <span className="whitespace-nowrap   ">{label}</span>
        {/* md:px-[32px] */}
        {icon && (
          <span>
            <>{icon}</>
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
