import React from 'react';
import './rowViewDetail.css'
// https://github.com/fugr-ru/frontend-javascript-test 

const RowViewDetail = ({ person }) => {
    
    const { address: { streetAddress, city, state, zip } = 'no date', firstName, lastName, description } = person;
    return (
        <div>
            <p>Выбран пользователь <b>{`${firstName} ${lastName}`}</b></p>
            <p>Описание: <br />
                <textarea value={description}></textarea></p>
            <p>Адрес проживания: <b>{streetAddress}</b></p>
            <p>Город: <b>{city}</b></p>
            <p>Провинция/штат: <b>{state}</b></p>
            <p>Индекс: <b>{zip}</b></p>
        </div>
    )
}


export default RowViewDetail;