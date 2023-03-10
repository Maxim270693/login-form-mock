import React, {ChangeEvent, FormEvent, useState} from 'react';

import MyInput from "../../components/MyInput/MyInput";
import MyButton from "../../components/MyButton/MyButton";

import style from './Form.module.css';
import axios from "axios";

const Form = () => {
    const [inputForm, setInputForm] = useState({
        email: '',
        password: ''
    })
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const {email, password} = inputForm;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        setEmailError('')
        setPasswordError('')
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!email) {
            return setEmailError("Обязательное поле")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return setEmailError('Укажите корректный email адресс')
        } else if (!password) {
            return setPasswordError("Обязательное поле")
        } else if (password.length < 8) {
            return setPasswordError('Пароль не может быть менее 8 сисмволов')
        }

        try {
            const response = await axios.post("/login", inputForm)
            if (response && response.status === 201) {
                alert('Вы вошли в систему')
            }
        } catch (e) {
            alert('Недействительные учетные данные')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.form}>
                <MyInput placeholder="Enter the email"
                         name="email"
                         label="E-Mail:"
                         className={emailError ? style.error : style.input}
                         value={email}
                         onChange={onChangeHandler}
                         error={emailError}
                         type="text"
                />
                <MyInput placeholder="Enter the password"
                         name="password"
                         label="Пароль:"
                         className={passwordError ? style.error : style.input}
                         value={password}
                         onChange={onChangeHandler}
                         error={passwordError}
                         type="password"
                />

                <MyButton type="submit" className={style.btn}>Войти в систему</MyButton>
            </form>
        </div>
    );
};

export default Form;