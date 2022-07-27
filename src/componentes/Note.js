import React from "react";

const Note = ({key, note}) =>{
    return (
        <li key={key}>{note.content}</li>
    )
}

export default Note