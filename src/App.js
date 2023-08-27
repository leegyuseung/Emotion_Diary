import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    // BrowserRouter로 감싸자있으면 브라우저 라우터에 맵핑될수 있다는 뜻
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2> {/* Route 바깥 쪽이라 모든페이지에서 볼 수 있다. */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
