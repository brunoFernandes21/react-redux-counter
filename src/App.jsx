import ParticlesBg from "particles-bg";
import { Counter } from "./features/counter/Counter";

function App() {

  return (
   <main className="app flex place-content-center ">
    <ParticlesBg color="#f4f4f4" num={200} type="cobweb" bg={true} />
      <Counter/>
   </main>
  )
}

export default App
