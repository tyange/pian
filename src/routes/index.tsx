import { createResource, For } from "solid-js";
import { useRouteData } from "@solidjs/router";
import DefaultLayout from "~/components/default-layout";
import Burger from "~/components/burger";

export type BurgerData = {
  Name: string;
  Brand: string;
  Description: string;
};

export function routeData() {
  const [burgers] = createResource<BurgerData[]>(async () => {
    const response = await fetch("http://127.0.0.1:3000/burger");

    return response.json();
  });

  return { burgers };
}

export default function Home() {
  const { burgers } = useRouteData<typeof routeData>();

  return (
    <DefaultLayout>
      <div class="w-full h-full flex justify-center items-center">
        <ul class="w-9/12 h-full grid grid-cols-3 gap-5">
          <For each={burgers()}>
            {(burger) => (
              <li class="w-full h-52 justify-self-center">
                <Burger
                  Name={burger.Name}
                  Brand={burger.Brand}
                  Description={burger.Description}
                />
              </li>
            )}
          </For>
        </ul>
      </div>
    </DefaultLayout>
  );
}
