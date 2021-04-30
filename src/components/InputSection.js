import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actioins/noteActions';
import inputActions from '../redux/actioins/inputActions';
import './InputSection.styles.scss';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();

  const addNote = () => {
    if(title && content) {
      dispatch(noteActions.addNote({
        title,
        content
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  

  const updateNote = () => {
    if(title && content) {
      dispatch(noteActions.updateNote(id, {
        title, content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="Poem title"
        value={title}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <textarea
        placeholder="Poem content"
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection__container__btnWrapper"
      >
        <button
          onClick={id === -1 ? addNote : updateNote}
        >
          {id === -1 ? "ADD POEM" : "UPDATE POEM"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: '#BF0050' }}
          >
            DELETE POEM
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;