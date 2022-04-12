import React from 'react';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className='icon-box'>
      <span className='material-icons icon' onClick={() => onSwitch(icon)}>
        {icon}
      </span>
    </div>
  );
}
