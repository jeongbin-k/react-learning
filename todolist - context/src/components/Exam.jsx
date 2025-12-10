import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 근거하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인술 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;

// Reducer라는 함수를 이용하시면 실제로 상태변화를 일으키는 이러한 코드들을 Reducer라는 함수를 통해서 외부에 분리할 수 있기 때문에 우리 컴포넌트 내부를 비교적 간결하게 유지할수있음
