import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { RoomType } from '../types';

interface ColorPickerProps {
  data: RoomType
}

const ColorPicker: React.FC<ColorPickerProps> = ({ data }) => {
  const [color, setColor] = useState('#fff');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleColorChange = (newColor: { hex: React.SetStateAction<string> }) => {
    setColor(newColor.hex);
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker); 
  };

  const handleClose = () => {
    setDisplayColorPicker(!displayColorPicker); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value); 
  };

  return (
    <div>
        {displayColorPicker && (
        <div style={{ position: 'relative', zIndex: '2' }}>
          <div
            style={{
              position: 'absolute',
              bottom: '150px',
              left: '150px',
            }}
            onClick={handleClose}
          />
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      )}
      <div>
      <h2 className='text-[14px]'>Select Room Type color</h2>
      </div>
     <div  className='border border-gray-500 p-2 w-40 h-auto rounded-lg mt-2 '>
     <input
        type="text"
        value={color}
        onChange={handleInputChange} 
        style={{
          width: '100px',
          marginRight: '10px',
        }}
      />
      <div
        style={{
          padding: '8px',
          backgroundColor: color,
          border: '1px solid #ccc',
          display: 'inline-block',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
      </div>
     </div>  
    </div>
  );
};

export default ColorPicker;
