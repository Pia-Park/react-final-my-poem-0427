import React from 'react'
import {setTimeForm } from '../utils/utils'

const PoemDetail = props => {
    const { 
        targetPoem: {
            id,
            title,
            content,
            createdAt
        }
    } = props

    const converNewlineSpace = content => {
        return content.split('\n').map((line, i) => (
            <p key={i}>
                {line.split(' ').map((word, i) => <span key={i}>{word}&nbsp;</span>)}
            </p>
        ))
    }

    return (
        <div className="poem-detail" key={id}>
            <h3 className="poem-title">{title}</h3>
            <div className="poem-content">
                {converNewlineSpace(content)}
            </div>
            <div className="data-area">
                <span className="poem-data">
                    {setTimeForm(createdAt)}
                </span>
            </div>

        </div>
    )
}

export default PoemDetail