type Props = {
  children: JSX.Element;
  classes?: string;
};

export default function Container({ children, classes }: Props) {
  return (
    <div className={`max-w-6xl px-10 mx-auto text-gray-800 sm:px-6 ${classes}`}>
      {children}
    </div>
  );
}
