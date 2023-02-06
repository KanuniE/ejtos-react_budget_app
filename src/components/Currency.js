import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'


const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const [currencyLabel, setCurrencyLabel] = useState(currency)

    const setNewCurrency = (newValue) => {
        console.log(newValue)
        switch (newValue) {
            case '$':
                setCurrencyLabel('$ Dollar');
                break;
            case '€':
                setCurrencyLabel('€ Euro');
                break;
            case '£':
                setCurrencyLabel('£ Pound');
                break;
            case '₹':
                setCurrencyLabel('₹ Ruppee');
                break;
            default:
                setCurrencyLabel('')
                break;
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newValue,
        })
    }

    return (
        <DropdownButton title={"Currency (" + currencyLabel + ")"} onSelect={(event) => setNewCurrency(event)}>
            <Dropdown.Item style={{ background: 'ligthgreen' }} eventKey="$"> $ Dollar </Dropdown.Item>
            <Dropdown.Item eventKey="€"> € Euro </Dropdown.Item>
            <Dropdown.Item eventKey="£"> £ Pound </Dropdown.Item>
            <Dropdown.Item eventKey="₹"> ₹ Ruppee </Dropdown.Item>
        </DropdownButton>
    );
};

export default CurrencyDropdown;
