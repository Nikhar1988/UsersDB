import React, { useState } from 'react';



export const ShowAddForm = ({ showHideForm }) => {
    
    return (


        <div className="d-grid gap-2 mt-4 mb-3">
            <button
                className="btn btn-outline-primary"
                onClick={() => showHideForm()} >Show/Hide add contact form</button>
        </div>

    )
}

const InputData = ({ getInputFormData }) => {
    
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        getInputFormData({ id, firstName, lastName, email, phone });
        cancelCourse();
    }

    const cancelCourse = () => {
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    }



    return (
        <form
            className="row g-3 needs-validation"
            noValidate
            onSubmit={submitHandler}>

            <div className="col-md-1">
                <label htmlFor="validationCustom01" className="form-label">ID</label>
                <input type="text"
                    className="form-control"
                    id="validationCustom01"
                    value={id}
                    onChange={(e) => setId(e.target.value)} />
            </div>

            <div className="col-md-3">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text"
                    className="form-control"
                    id="validationCustom01"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />

            </div>

            <div className="col-md-3">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />

            </div>

            <div className="col-md-3">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="col-md-2">
                <label htmlFor="validationCustom03" className="form-label">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />

            </div>

            <div className="col-12">
                <button
                    className="btn btn-primary"
                    type="submit">Add contact</button>

            </div>
        </form>

    )
}


export default InputData;
