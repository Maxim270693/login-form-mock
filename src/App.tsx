import React from 'react';

import Form from "./features/form/Form";

import './App.css';

function App() {
    return (
        <div className="AppWrapper">
            <div className="App">
                <h1>Вход</h1>
                <p>Для сущесвующих пользователей</p>
                <Form/>
            </div>
        </div>
    );
}

export default App;
