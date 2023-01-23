import { createResource } from "solid-js";
import { useParams, useRouteData } from "@solidjs/router";
import DefaultLayout from "~/components/default-layout";
import { BurgerPageData } from "~/types/burger";
import BurgerList from "~/components/burger-list";

export function routeData() {
  const params = useParams();

  const [data] = createResource<BurgerPageData>(async () => {
    const response = await fetch(
      `http://127.0.0.1:3000/burger?page=${params.id}`
    );

    return await response.json();
  });

  return { data };
}

export default function BurgersPage() {
  const { data } = useRouteData<typeof routeData>();

  return (
    <DefaultLayout>
      <BurgerList burgersData={data()?.Burgers} />
    </DefaultLayout>
  );
}
