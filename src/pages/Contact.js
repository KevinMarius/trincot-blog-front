import React from 'react';

import Button from '../components/UiElement/button';

function Contact() {
    return (
        <React.Fragment>
            <div className='grid md:grid-cols-2 mx-6 px-6 my-6 rounded-md bg-zinc-300 py-10'>
                <div className='md:col-span-1'>
                <h3 className='text-4xl font-bold my-6 flex justify-center'>Contact us</h3>
                    <form className='flex flex-col'>
                        <input type='text' className='p-3 my-1 rounded-lg shadow-lg shadow-purple-400 text-sm bottom-0 focus:outline-none focus:shadow-purple-400' placeholder='Enter your name'/>
                        <input type='email' className='p-3 my-1 rounded-lg shadow-lg shadow-purple-400 text-sm bottom-0 focus:outline-none focus:shadow-purple-400' placeholder='Enter your email address'/>
                        <textarea rows={8} className='p-3 shadow-lg my-1 rounded-lg shadow-purple-400 text-sm bottom-0 focus:outline-none focus:shadow-purple-400' placeholder='Enter your idear'/>
                        <Button bgColor="purple-400" bgColorHover="purple-500">Send</Button>
                    </form>
                </div>
                <div className=' col-span-1'>
                    hello
                </div>

            </div>
        </React.Fragment>
	    
    );
};

export default Contact;
