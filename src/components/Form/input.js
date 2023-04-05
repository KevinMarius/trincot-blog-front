import React, { useReducer, useEffect } from 'react';

import { validate } from "../../utils/validators";
import './input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case "TOUCH":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || "",
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const touchHandle = (e) => {
        dispatch({ type: 'TOUCH' })
    }

    const changeHandle = (e) => {
        dispatch({
            type: "CHANGE",
            val: e.target.value,
            validators: props.validators
        })
    }


    let array = []
    if (props.items && props.items.length > 0) {
        props.items.map((item, index) => {
            array.push(<option key={index} value={item._id} >{item.title}</option>)
        });
    }

    const element = props.element === "input" ?
        (
            <input
                className={`p-3 mt-1 border w-[100%] border-gray-300 rounded-lg placeholder:font-alata placeholder:text-md focus:outline focus:shadow-md focus:outline-purple-400 ${!inputState.isValid && inputState.isTouched && 'invalid:border-pink-500 invalid:text-pink-600'}`}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandle}
                onBlur={touchHandle}
                value={inputState.value}
            />
        ) : props.element === "select" ? (
            <select id={props.id} value={inputState.value} onChange={changeHandle} onBlur={touchHandle} className={`p-3 mt-1 border w-[100%] border-gray-300 rounded-lg placeholder:font-alata placeholder:text-md focus:outline focus:shadow-md focus:outline-purple-400 ${!inputState.isValid && inputState.isTouched && 'invalid:border-pink-500 invalid:text-pink-600'}`} aria-label="Default select example">
                <option>Select the {props.label}</option>
                {array}
            </select>

        ) : (
            <textarea
                className={`p-3 mt-1 border w-[100%] border-gray-300 rounded-lg placeholder:font-alata placeholder:text-md focus:outline focus:shadow-md focus:outline-purple-400 ${!inputState.isValid && inputState.isTouched && 'invalid:border-pink-500 invalid:text-pink-600'}`}
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandle}
                onBlur={touchHandle}
                value={inputState.value}
            />
        )

    return (
        <div className={`form-group`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className="text-pink-600 text-sm">{props.errorText}</p>}
        </div>
    )
}

export default Input;