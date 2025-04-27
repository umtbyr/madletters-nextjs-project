type ListContainerPrpos<T> = {
  children?: React.ReactNode;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function ListContainer<T>({ data, renderItem }: ListContainerPrpos<T>) {
  return (
    <ul className=" w-full max-w-full p-4 gap-2 ">
      {data?.map((item, index) => (
        <li
          key={index}
          className="bg-white w-full max-w-full px-4 border-amber-500 py-4 mb-8 shadow-xl rounded-xl"
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
