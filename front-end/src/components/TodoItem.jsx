import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';

import { Mutation, Query } from '../graphQL';

const TodoItem = ({ id, number, description, isFinished, onOpenModal }) => {
  const [done, setDone] = useState(isFinished);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(description);
  const { GET_TODOS } = Query;

  const [updateTodo] = useMutation(Mutation.UPDATE_TODO)

  const handleChange = (e) => {
    setDone(e.target.checked)
  }

  const handleChangeEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      setValue(description);
      setDone(isFinished)
    }
  };

  const handleChangeDescription = (e) => {
    setValue(e.target.value);
  }

  const handleSave = () => {
    updateTodo({variables: {id, description: value, isFinished: done}, refetchQueries: [{ query: GET_TODOS }]})
  }

  return (
    <div className="flex items-center gap-2 justify-between py-2 px-5 rounded-lg bg-purple-400">
        <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" defaultChecked={done} onChange={handleChange} />
            {isEdit ? <input type="text" className="w-full border px-3 rounded-md outline-none" value={value} onChange={handleChangeDescription} /> : 
            (<h2 className={`text-white font-semibold ${done ? 'line-through' : null}`}>{number + 1}. {description}</h2>)}
        </div>
        <div className="flex gap-2">
            <button className={`py-1 px-4 rounded-md text-white font-medium ${value !== description || isFinished !== done ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300'}`} 
              disabled={value !== description || isFinished !== done ? false : true}
              onClick={handleSave}
            >
              Save
            </button>
            <button className="py-1 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium" onClick={handleChangeEdit}>Edit</button>
            <button className={`py-1 px-4 rounded-md text-white font-medium ${done ? 'bg-red-500 hover:bg-red-600' : 'bg-red-300'}`} 
              disabled={!done} 
              onClick={() => onOpenModal(id)}
            >
              Remove
            </button>
        </div>
    </div>
  )
};

TodoItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
  description: PropTypes.string,
  isFinished: PropTypes.bool,
  onOpenModal: PropTypes.func
};

export default memo(TodoItem);