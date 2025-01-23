import { useState } from 'react';

const FilterButtons = ({ filters, setFilter }) => {
    const [clickedID, setClickedId] = useState(0);

    const handleOnClick = (index, name) => {
        setClickedId(index);
        setFilter(name);
    };

    return (
        <>
            {filters &&
                filters.map((name, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => handleOnClick(index, name)}
                            className={`filter ${index} ${index === clickedID ? 'active' : ''}`}
                        >
                            {name}
                        </button>
                    );
                })
            }
        </>
    );
};

export default FilterButtons;