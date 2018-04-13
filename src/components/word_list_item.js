import React from 'react';

const WordListItem = ({word}) => {
    const wordValue = word;

    return (
        <li className="list-group-item">
            {wordValue}
        </li>
    );
};

export default WordListItem;