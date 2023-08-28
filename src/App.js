import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    // BrowserRouter로 감싸자있으면 브라우저 라우터에 맵핑될수 있다는 뜻
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText="App"
          leftChild={
            <MyButton
              text={"왼쪽버튼"}
              onClick={() => {
                alert("왼쪽 클릭");
              }}
            />
          }
          rightChild={
            <MyButton
              text={"오른쪽버튼"}
              onClick={() => {
                alert("오른쪽 클릭");
              }}
            />
          }
        />
        <h2>App.js</h2> {/* Route 바깥 쪽이라 모든페이지에서 볼 수 있다. */}
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼 클릭");
          }}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
