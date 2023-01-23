import { JSX } from "solid-js";

export default function BurgerItem({
  Name: name,
  Brand: brand,
  Description: description,
}: {
  Name: string;
  Brand: string;
  Description: string;
}): JSX.Element {
  return (
    <div class="border shadow-sm w-full h-full rounded-xl flex flex-col p-5">
      <span>{name}</span>
      <span>{brand}</span>
      <span>{description}</span>
    </div>
  );
}
