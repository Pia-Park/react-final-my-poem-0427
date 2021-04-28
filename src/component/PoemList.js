import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PoemWrite from '../containers/PoemWrite';
import { setTimeForm } from '../utils/utils';


const PoemList = props => {
    const { poemList, isSending, isDelete, onPoemDelete  } = props
    const [ getWritePoem, setWritePoem ] = useState(false)
    const hasPoem = poemList&&poemList.length > 0
    console.log(poemList);

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
            {(isSending || isDelete) && (
                <div className="sending-bar">
                    <FontAwesomeIcon icon={faSpinner} size="4x" pulse />

                </div>
            )}
            <ul>
                {!hasPoem && (
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
                {hasPoem && poemList.map(poem => (
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
                            onClick={() => onPoemDelete(poem.id)}
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

