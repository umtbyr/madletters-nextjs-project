import clsx from "clsx";

type ButtonWrapperProps = {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  className,
  disabled,
}: ButtonWrapperProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "w-full max-w-full  shadow-xl text-xl rounded-2xl py-4 px-4 bg-amber-400/90 font-extrabold cursor-pointer text-center ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
