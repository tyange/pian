import { JSX } from "solid-js";
import { BurgerData } from "~/routes";

export default function Burger({
  Name: name,
  Brand: brand,
  Description: description,
}: BurgerData): JSX.Element {
  return (
    <div class="border shadow-sm w-full h-full rounded-xl flex flex-col p-5">
      <span>{name}</span>
      <span>{brand}</span>
      <span>{description}</span>
    </div>
  );
}
