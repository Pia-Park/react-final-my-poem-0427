import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PoemWrite from '../containers/PoemWrite';
import { setTimeForm } from '../utils/utils';


const PoemList = props => {
    const { poemList } = props
    const [ getWritePoem, setWritePoem ] = useState(false)

    const poem = poemList&&poemList.length > 0

    return (
        <>
            <div>
                <label>

                    <FontAwesomeIcon icon={faPen} />
                    <span>Write</span>
                    <input 
                        value={getWritePoem}
                        type="checkbox"
                        onChange={() => setWritePoem(!getWritePoem)}
                    />
                </label>
                
            </div>
            {getWritePoem && <PoemWrite />}
            <ul>
                {!hasMemo && (
                    <li className="poem-list">
                        <div className="no=memo">
                            <h2 className="title">
                                No Poems
                            </h2>
                            <p>
                                Write anything that you want!
                            </p>
                        </div>
                    </li>
                )}
                {hasMemo && poemList.map(poem => (
                    <li key={poem.id}>
                        <Link to={`/poems/${poem.id}`}>
                            <h2 className="poem-title">{poem.title}</h2>
                            <div className="poem-content">{poem.content}</div>
                            <span className="poem-date">
                                {setTimeForm(poem.createdAt)}
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="btn-delete"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                            <span className="delete-text">delete</span>
                        </button>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default PoemList

