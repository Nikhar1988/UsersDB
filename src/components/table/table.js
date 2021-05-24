import React from 'react';
import PointerUp from '../../svg/pointerUp';
import PointerDown from '../../svg/pointerDown';




const Table = ({ sortData, userData = [], directionSort, sortField, onRowSelected }) => {
    

    const renderItems = (userData) => {


        return userData.map((item) => {
            const { id, firstName, lastName, email, phone } = item;

            return (
                <tr key={id + phone} onClick={() => onRowSelected(item)} >
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>

            )
        })
    }

    const Pointer = () => {
        return (
            directionSort ? <PointerUp /> : <PointerDown />
        )
    }

    const items = renderItems(userData);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th onClick={() => sortData('id')}>
                        ID {sortField === 'id' ? <Pointer /> : null}
                    </th>
                    <th onClick={() => sortData('firstName')}>
                        First Name {sortField === 'firstName' ? <Pointer /> : null}
                    </th>
                    <th onClick={() => sortData('lastName')}>
                        Last Name {sortField === 'lastName' ? <Pointer /> : null}
                    </th>
                    <th onClick={() => sortData('email')}>
                        Email {sortField === 'email' ? <Pointer /> : null}
                    </th>
                    <th onClick={() => sortData('phone')}>
                        Phone {sortField === 'phone' ? <Pointer /> : null}
                    </th>
                </tr>
            </thead>

            <tbody>
                {items}
            </tbody>
        </table>

    );


}

export default Table;
