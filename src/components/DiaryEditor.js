import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

// 오늘 날짜를 형식을 바꿔주기 위함
const getStringDate = (date) => {
  // ISO형식의 문자열을 반환하는 함수 toISOString()
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
