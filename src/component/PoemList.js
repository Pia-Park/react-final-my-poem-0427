import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPen, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PoemWrite from '../containers/PoemWrite';


const PoemList = props => {
    const { poemList, isSending, isDelete, onPoemDelete  } = props
    const [ getWritePoem, setWritePoem ] = useState(false)
    const hasPoem = poemList&&poemList.length > 0;
    console.log(poemList);
    // const currentList = Object.keys(poemList).map(function(poem){
    //     return {key: poemList[poem].value}
    // })
    // console.log(currentList);

    // function getList() {
    //     return (poemList&& poemList)
    //         ? Object.keys(poemList).map((poem) => (<div>{poem.title}</div>))
    //         : [];
    // }

    // function getList() {
    //     return (poemList&& poemList)
    //         ? Object.keys(poemList).map(function(id, index) {
    //             return (
    //                 <>
    //                 <div>{poemList[id].title}</div>
    //                 <div>{poemList[id].content}</div>
    //                 </>
    //             )
    //         })
    //         : [];
    // }

    function getList() {
        return (poemList&& poemList)
            ? Object.keys(poemList).map(function(id, index) {
                return poemList[id].title
            })
            : [];
    }

   
    console.log(getList());
    



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
                <p>{getList()}</p>
                {/* <p>{Object.keys(poemList).forEach(poem => (<div>{poem.content}</div>))}</p> */}
                {/* {!hasPoem && (
                    <li className="poem-list">
                        <div className="no-poem">
                            <h2 className="title">
                                No Poems
                            </h2>
                            <p>
                                Write anything that you want!
                            </p>
                        </div>
                    </li>
                )} */}
                {/* {poemList?.map((poem) => (
                    <li key={poem.id}>
                        <Link to={`/poems/${poem.id}`}>
                            <h2 className="poem-title">{poem.title}</h2>
                            <div className="poem-content">{poem.content}</div>
                            <span className="poem-date">
                                {poem.createdAt}
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
                ))} */}
                
            </ul>
        </>
    )
}

export default PoemList

