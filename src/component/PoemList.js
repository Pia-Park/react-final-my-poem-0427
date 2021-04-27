import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MemoWrite from '../containers/MemoWrite';
import { setTimeForm } from '../utils/utils';


const PoemList = props => {
    const { poemList } = props
    const [ getWritePoem, setWritePoem ] = useState(false)

    const poem = poemList&&poemList.length > 0

    return (
        <>
            <div>
                <FontAwesomeIcon icon={faPen} />
                <span>Write</span>
                <input 
                    value={getWritePoem}
                    type="checkbox"
                    onChange={() => setWritePoem(!getWritePoem)}
                />
                
            </div>
        </>
    )
}

export default PoemList

