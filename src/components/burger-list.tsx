import { For } from "solid-js";
import BurgerItem from "~/components/burger-item";
import { Burger } from "~/types/burger";

export default function BurgerList({
  burgersData,
}: {
  burgersData: Burger[] | undefined;
}) {
  return (
    <div class="w-full h-full flex justify-center items-center">
      <ul class="w-9/12 h-full grid grid-cols-3 gap-5">
        <For each={burgersData}>
          {(burger) => (
            <li class="w-full h-60 justify-self-center">
              <BurgerItem
                Name={burger.Name}
                Brand={burger.Brand}
                Description={burger.Description}
              />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
