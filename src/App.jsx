import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <div className="h-full flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="w-full">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="bg-[#292929] h-[92.75%] flex justify-end items-end p-5">
            {/* Menu Bubble */}
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
