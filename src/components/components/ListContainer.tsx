import clsx from "clsx";

type ListContainerPrpos<T> = {
  children?: React.ReactNode;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  disablePadding?: boolean;
};

export function ListContainer<T>({
  data,
  renderItem,
  disablePadding = false,
}: ListContainerPrpos<T>) {
  const className = !disablePadding ? "p-4" : "";

  return (
    <ul className=" w-full max-w-full p-4 gap-2 md:max-w-5xl ">
      {data?.map((item, index) => (
        <li
          key={index}
          className={clsx(
            "bg-white w-full max-w-full border-amber-500 mb-8 shadow-xl rounded-xl",
            className
          )}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
