import React from 'react'

export default function DynamiqueIcon({icon, classe}) {
    const CustomeIcon = `${icon}`;
  return (
    <CustomeIcon className={classe}/>
  )
}
