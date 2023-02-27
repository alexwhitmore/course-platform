import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isLink?: boolean;
  href?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red';
  variant?: 'solid' | 'outline' | 'ghost';
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const solidBlue =
  'bg-blue-400 hover:bg-blue-500 focus-visible:outline-blue-400';

const outlineBlue =
  'bg-blue-400/10 border border-blue-400 focus-visible:outline-blue-400 hover:bg-blue-400/20';

const ghostBlue = 'focus-visible:outline-blue-400 hover:bg-blue-400/20';

// const red = 'bg-red-400 hover:bg-red-500 focus-visible:outline-red-400';

const Button = (props: ButtonProps) => {
  const { isLink = false, color = 'blue', variant = 'solid' } = props;

  const className = classNames(
    'rounded-md px-3.5 py-1.5 text-gray-300 hover:text-white font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    color === 'blue' && variant === 'solid' ? solidBlue : '',
    color === 'blue' && variant === 'outline' ? outlineBlue : '',
    color === 'blue' && variant === 'ghost' ? ghostBlue : ''
  );

  return (
    <>
      {isLink ? (
        <Link className={className} href={`${props?.href}`}>
          {props.children}
        </Link>
      ) : (
        <button className={className}>{props.children}</button>
      )}
    </>
  );
};

export default Button;

// function EditActiveIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="none"
//         className="stroke-red-400"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }
