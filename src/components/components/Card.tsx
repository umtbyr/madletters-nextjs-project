type CardProps = {
  children?: React.ReactNode;
  style?: string;
};

export function Card(props: CardProps) {
  return (
    <div
      className={`flex px-4 pt-8 pb-10 bg-amber-400/80 min-h-60 rounded-2xl ${props.style} `}
    >
      {props.children}
    </div>
  );
}
