type CardProps = {
  children?: React.ReactNode;
  style?: string;
};

export function Card(props: CardProps) {
  return (
    <div className={`flex px-4 py-6 bg-amber-400 rounded-2xl ${props.style}`}>
      {props.children}
    </div>
  );
}
