import { useEffect, useState, useRef } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [colorBoxes, setColorBoxes] = useState([]);
  const [colorValue, setColorValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    renderBox()
  }, [colorValue])

  const renderBox = () => {
    const rendBoxes = [];

    colors.forEach((e, index) => {
      const colorBox = <BoxColor color={e} value={colorValue} key={index} />
      rendBoxes.push(colorBox);
    })

    setColorBoxes(rendBoxes);
  }

  return (
    <><input
      type='text'
      value={colorValue}
      placeholder='Check a box color'
      onChange={() => setColorValue(inputRef.current.value.toLowerCase())}
      ref={inputRef}
      />
      <div className='container'>
        {colorBoxes}
      </div>
    </>
  );
}

export default MyForm;
