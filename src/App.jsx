/* eslint-disable import/named */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './actions/todoActions';
import './App.css';
import { Button } from './stories/Button';
import { Input } from './stories/Input';
import { Text } from './stories/Text';

function App() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const deleteTodoHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(e.target.value));
  };

  const addNewTodo = () => {
    if (!todo) {
      alert('Cannot post empty field. You must write the todo');
    } else {
      const payload = {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 0,
        description: todo,
      };
      dispatch(addTodo(payload));
      setTodo('');
    }
  };

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="App ">
      <h1 className="text-4xl font-bold p-4">
        <Text label="TO DO LIST" />
      </h1>
      <div>
        <Input type="text" placeholder="Add New Todo" className="rounded-lg border border-black text-center mr-2 w-96 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-1/4" onChange={onChangeHandler} />
        <Button size="medium" primary onClick={addNewTodo} label="Save" backgroundColor="green" />
      </div>
      <div className="grid mt-5 mb-5 place-items-center">
        <table className="shadow-lg bg-white rounded-lg">
          <thead>
            <tr className="w-screen">
              <th className="w-3/4 bg-blue-100 border text-center px-8 py-4">
                <Text label="Description" />
              </th>
              <th className="w-1/4 bg-blue-100 border text-center px-8 py-4">
                <Text label="Actions" />
              </th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {
              todoList.map((todo) => (
                <tr key={todo.id} className="mt-4">
                  <td className="border px-8 py-4">
                    <Text label={todo.description} />
                  </td>
                  <td className="border px-8 py-4">
                    <Button primary size="medium" onClick={deleteTodoHandler} value={todo.id} backgroundColor="red" label="Delete" />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
