import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

export default function SideDrawer(props) {
    const { open, handleOpenClick } = props;
    const content = (
        <CSSTransition 
            in={props.open}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <div className='fixed left-0 top-0 w-[70%] z-50 shadow-slate-500 bg-white h-screen'>
                <div className='absolute top-4 right-4'>
                    <button onClick={handleOpenClick} className='font-bold text-2xl'><AiOutlineClose /></button>
                </div>
                <div className='flex flex-col items-center mt-20 divide-y-2'>
                    <a className='py-4 text-xl text-slate-700 font-semibold hover:text-purple-500' href='/'>Home</a>
                    <a className='py-4 text-xl text-slate-700 font-semibold hover:text-purple-500' href='blog'>Blog</a>
                    <a className='py-4 text-xl text-slate-700 font-semibold hover:text-purple-500' href='about'>About</a>
                    <a className='py-4 text-xl text-slate-700 font-semibold hover:text-purple-500' href='contact'>Contact</a>
                </div>
            </div>
        </CSSTransition>
    )
    if(open) {
        return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
    }else {
        return '';
    }    
}
