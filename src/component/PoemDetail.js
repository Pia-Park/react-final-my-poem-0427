import React from 'react'

const PoemDetail = props => {
    const { 
        id,
        title,
        content,
        createdAt
    } = props


    return (
        <div className="poem-detail" key={id}>
            <h3 className="poem-title">{title}</h3>
            <div className="poem-content">
                {content}
            </div>
            <div className="data-area">
                <span className="poem-data">
                    {createdAt}
                </span>
            </div>

        </div>
    )
}

export default PoemDetail