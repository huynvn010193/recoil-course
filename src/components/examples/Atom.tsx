import {useState} from 'react';
import {atom, useRecoilState, useRecoilValue} from 'recoil';

const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
});

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  console.log('darkMode', darkMode);
  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(e) => {
        setDarkMode(e.currentTarget.checked);
      }}
    />
  );
};

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom);
  const backGroundColor = darkMode ? 'black' : 'white';
  const color = darkMode ? 'white' : 'black';
  return (
    <button
      style={{
        backgroundColor: backGroundColor,
        color: color,
      }}
    >
      My UI Button
    </button>
  );
};

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
