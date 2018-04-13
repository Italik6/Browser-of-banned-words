import React from 'react';
import WordListItem from './word_list_item';
import keyIndex from 'react-key-index';

const WordList = (props) => {
    const wordsWithID = keyIndex(props.words, 1);

    const wordItems = wordsWithID.map((word) => {
        return (
            <WordListItem 
                key={word.id} 
                word={word.value}  
            />
        )
    });

    return (
        <ul className="list-group">
            {wordItems}
        </ul>
    );
};

export default WordList;