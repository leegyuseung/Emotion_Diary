import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  // Page Moving
  const navigate = useNavigate();

  // QueryString
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id:", id);

  const mode = searchParams.get("mode");
  console.log("mode:", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      {/* QueryString을 바꾸는 상태변화함수 */}
      <button onClick={() => setSearchParams({ who: "james" })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
