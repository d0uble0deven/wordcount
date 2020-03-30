import { useState } from 'react';

export const useInput = (initialValue) => {
    console.log('initialValue: ' + initialValue);
    const [value, setValue] = useState(initialValue);
    console.log('value: ' + value);
    console.log('setValue: ' + setValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value, onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};