import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

export function Third() {
    const {language, theme, count, setCount} = useContext(SettingsContext);

  return (
    <div style={{border: '5px solid seagreen', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>Third</h2>

      <p><strong>Language: {language}</strong> </p>
      <p><strong>Theme: {theme}</strong> </p>
      <p><strong>Count: {count}</strong> </p>

        <button onClick={() => setCount(count => count +1)}> přidat</button>
    </div>
  );
}