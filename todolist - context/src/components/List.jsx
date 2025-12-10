import "./List.css";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";
import { useState, useMemo, useContext } from "react";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangesearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredTodo = getFilterData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>totalCount : {totalCount}</div>
      <div>doneCount : {doneCount}</div>
      <div>notDoneCount : {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangesearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {/* 배열에 담긴 값을 리스트 형태로 반복적으로 렌더링 하려면 배열 메서드인 map() */}
        {filteredTodo.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
