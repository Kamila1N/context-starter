import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

export function Second() {
    const { language, setLanguage, theme, setTheme, count, setCount } = useContext(SettingsContext);

  return (
    <div style={{border: '5px solid dodgerblue', padding: 20, marginBlock: 10, flex: 1}}>
      <h2>Second</h2>

      <p><strong>Language: {language}</strong> </p>
      <p><strong>Theme: {theme}</strong> </p>
      <p><strong>Count: {count}</strong> </p>

        <button onClick={() => setCount(count +1)}>+</button>
        <button onClick={() => setLanguage('cz')}>česky</button>
        <button onClick={() => setLanguage('en')}>anglicky</button>

    </div>
  );
}