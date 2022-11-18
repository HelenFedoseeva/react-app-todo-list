import { Input } from "./Input/Input";
import { AddBtn } from "./Add-btn/Add-btn";

export const App = () => {
  return (
    <div
     style= {{
        display: 'flex',
        color: '#010101',
         fontSize: 30,
      }}
    >
      My To Do List
      <Input />
      <AddBtn
        style={{
          width: '150px',
        }} />
    </div>
  );
};
