import React, {ChangeEvent} from 'react';

import style from './MyInput.module.css';

type MyInputType = {
    placeholder: string
    name: string
    label: string
    className: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    error: string
    type: string
}

const MyInput = ({
                     label,
                     placeholder,
                     name,
                     className,
                     value,
                     onChange,
                     error,
                     type
                 }: MyInputType) => {
    return (
        <div>
            <label> {label}
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zyMJZWxcOvCKF8I85Db6brMd6OPFNVJKjg&usqp=CAU"
                    alt=""
                    className={style.img}
                />
            </label>
            <input type={type}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   name={name}
                   className={className}
            />
            {error && <div className={style.errorMessage}>{error}</div>}
        </div>
    );
};

export default MyInput;