import React from 'react';
import ReactDOM from 'react-dom';

export default function Backdrop(props) {
    return ReactDOM.createPortal(
        <div className="fixed top-0 z-50 left-0 w-[100%] h-screen bg-slate-700 opacity-30" onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')
    );
}
