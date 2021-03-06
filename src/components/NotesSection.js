import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './Noteitem';
import inputActions from '../redux/actioins/inputActions';
import './NotesSection.styles.scss';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>There is no Poem yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if(item) {
          return (
            <NoteItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;