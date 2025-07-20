import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import {Third} from "./Third.jsx";

export function First() {

   const {language, theme, count, setTheme} = useContext(SettingsContext);

  return (
    <div style={{border: '5px solid red', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>First</h2>

      <p><strong>Language: {language}</strong> </p>
      <p><strong>Theme: {theme}</strong> </p>
      <p><strong>Count: {count}</strong> </p>

        <button onClick={()=> setTheme('light')}> světlé téma</button>
        <button onClick={() => setTheme('dark')}>tmavé téma</button>

        <Third />
    </div>
  );
}