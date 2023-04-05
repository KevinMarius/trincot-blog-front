import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';

const ModalOverlay = props => {
    const content = (
        <div className='flex flex-col h-screen items-center justify-center'>
            <div className="bg-white z-50 w-[70%] p-6 sm:p-10 rounded-md">
            <header className="pb-6">
                <h1 className='text-xl sm:text-3xl font-semibold font-alata'>{props.header}</h1>
            </header>
            <form
                onSubmit={
                    props.onSubmit ? props.onSubmit : event => event.preventDefault()
                }
            >
                <div className="pb-6 text-md font-sans">
                    {props.children}
                </div>
                <footer className="flex gap-2 sm:gap-4">
                    {props.footer}
                </footer>
            </form>
        </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};


export default function Modal(props) {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
}
