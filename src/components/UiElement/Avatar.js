import React from 'react';

const Avatar = props => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center' style={props.style}>
      <img
      className='block rounded-tr-2xl w-[100%] h-[100%] object-cover'
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
