import React, {useState} from 'react'

const PoemWrite = props => {
    const [poemTitle, setPoemTitle] = useState('')
    const [poemContent, setPoemContent] = useState('')

    const { onPoemSubmit } = props

    const handleChange = e => {
        if(e.target.name === 'poemTitle'){
            setPoemTitle(e.target.value)

        } else if (e.target.name === 'poemContent'){
            setPoemContent(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const title = poemTitle;
        const content = poemContent;
        const time = new Date().toISOString();
        const id = new Date().getTime();

        if(!title.trim() || !content.trim()){
            alert('Enter the Poem')
            return;
        }
        onPoemSubmit(id, title, content, time)
        setPoemTitle('');
        setPoemContent('')
    }

    return (
        <form
            className="poem-form"
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                name="poemTitle"
                value={poemTitle}
                onChange={handleChange}
                placeholder="title"
            />
            <textarea 
                name="poemContent"
                value={poemContent}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="btn-submit"
            >
                submit
            </button>

        </form>
    )

}

export default PoemWrite