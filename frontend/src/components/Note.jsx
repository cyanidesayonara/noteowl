import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Draggable from 'react-draggable'
import Notification from './Notification'
import NoteDate from './NoteDate'
import NoteControls from './NoteControls'

const Note = props => {
  console.log(props)
  const zIndex = 8000 + props.index
  const divStyle = {
    zIndex: zIndex
  }
  return (
    <Draggable
      cancel=".note form>*"
      position={props.note.position}
      bounds="parent"
      onDrag={props.handleDrag(props.note)}
    >
      <div className={'note color-' + props.note.color} style={divStyle}>
        <Notification message={props.note.notification} />
        <form>
          <div className="owl-field">
            <TextareaAutosize
              onResize={e => {}}
              value={props.note.title}
              name="title"
              placeholder="Title"
              onChange={props.handleInputChange(props.note)}
            />
            <span className="border" />
          </div>
          <NoteDate text="Created: " date={props.note.created} />
          <NoteDate text="Saved: " date={props.note.updated} />
          <div className="owl-field">
            <TextareaAutosize
              onResize={e => {}}
              value={props.note.content}
              name="content"
              placeholder="Add text here"
              onChange={props.handleInputChange(props.note)}
            />
            <span className="border" />
          </div>
          <NoteControls
            user={props.user}
            note={props.note}
            handleRemove={props.handleRemove}
            colors={props.colors}
            handleInputChange={props.handleInputChange}
          />
        </form>
      </div>
    </Draggable>
  )
}

export default Note
