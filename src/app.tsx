import { AttendeList } from "./components/attende-list";
import { Header } from "./components/header";

export function App() {

  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header/>
      <AttendeList/>
    </div>
  )
}

