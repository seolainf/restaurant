import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateContainer from "./pages/CreateContainer/CreateContainer";
import MainContainer from "./pages/MainContainer/MainContainer";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="w-full mt-16 p-8 md:mt-24">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
