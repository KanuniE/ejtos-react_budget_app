import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    console.log(currency)

    const setNewBudget = (newValue) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                type='number'
                id='budget'
                value={budget}
                step={10}
                style={{ size: 10 }}
                onChange={(event) => setNewBudget(event.target.value)} >
            </input></span>
        </div >
    );
};

export default Budget;
