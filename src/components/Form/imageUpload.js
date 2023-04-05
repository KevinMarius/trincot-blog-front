import React, { useEffect, useRef, useState } from 'react';

import './imageUpload.css'

const ImageUpload = props => {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
    const fileChoiceRef = useRef();

    const choiceImageHandler = () => {
        fileChoiceRef.current.click();
    }

    useEffect(() => {
        if(!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file])

    const choiceHandler = (e) => {
        let choiceFile;
        let fileIsValid = isValid;
        if(e.target.files && e.target.files.length === 1) {
            choiceFile = e.target.files[0];
            setFile(choiceFile);
            setIsValid(true);
            fileIsValid = true;
        }else {
            setIsValid(false);
            fileIsValid= false; 
        }
        props.onInput(props.id, choiceFile, fileIsValid);
    }

    return (
        <div className="form-control">
            <input 
                type='file' 
                id={props.id} 
                ref={fileChoiceRef} 
                style={{ display: 'none' }} 
                accept=".jpg,.png,.jpeg" 
                onChange={choiceHandler} 
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {!previewUrl && <p>Please pick an image.</p>}
                </div>
                <input type="button" onClick={choiceImageHandler} value='Choice image'/>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    );
};

export default ImageUpload;