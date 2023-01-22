import {JSX, ParentProps} from "solid-js";
import Header from "~/components/header";


export default function DefaultLayout(props: ParentProps): JSX.Element {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1 flex items-center justify-center">
        {props.children}
      </main>
    </div>
  );
};