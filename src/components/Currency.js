import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const setNewCurrency = (newValue) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newValue,
        })
    }

    return (
        <span>
            <label>Currency</label>
            <select className="custom-select" id="currencyDropdown"  onChange={(event) => setNewCurrency(event.target.value)}>
                <option value="$ Dollar" name="$ Dollar">$ Dollar</option>
                <option defaultValue value="£ Pound" name="£ Pound">£ Pound</option>
                <option value="€ Euro" name="€ Euro">€ Euro</option>
                <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>

            </select>
        </span>
    );
};

export default CurrencyDropdown;
