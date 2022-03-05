import React, { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Query, Mutation } from './graphQL';
import TodoItem from './components/TodoItem';
import Loading from './components/Loading';
import Modal from './components/ModalDelete';

function App() {
  const [todo, setTodo] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idTodo, setIdTodo] = useState('');
  const { GET_TODOS } = Query;
  // query
  const { loading, error, data } = useQuery(GET_TODOS);
  const [deleteTodo] = useMutation(Mutation.DELETE_TODO);
  const [addTodo] = useMutation(Mutation.ADD_TODO);

  const handleOpenModal = useCallback((idTodo) => {
    setIsOpenModal(true);
    setIdTodo(idTodo);
  }, [])

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setIdTodo('');
  };

  const handleAddTodo = () => {
    addTodo({
      variables: {description: todo},
      refetchQueries: [{ query: GET_TODOS }]
    });
    setTodo('');
  }

  const handleRemove = () => {
    deleteTodo({ variables: { id: idTodo }, refetchQueries: [{ query: GET_TODOS }] });
    setIsOpenModal(false);
  }
  
  if (error) return 'Internal server error';
  return (
    <div className="w-full">
        <div className="max-w-4xl mx-auto px-5">
            <div className="w-full bg-purple-600 rounded-b-md">
            <h1 className="text-center p-5 text-3xl text-white font-bold md:text-4xl lg:text-5xl">Todo App</h1>
          </div>

          <div className="mt-3 py-5 px-2 h-max shadow rounded-lg">
            <div className="flex items-center gap-2 justify-center">
              <input type="text" 
                placeholder="Enter to do something..." 
                className="w-80 border px-3 py-1 rounded-md outline-none" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className={todo ? "px-5 py-1.5 rounded-lg bg-purple-600 text-white font-semibold" : 
                "px-5 py-1.5 rounded-lg bg-purple-400 text-white font-semibold cursor-not-allowed"} 
                disabled={!todo} onClick={handleAddTodo}
              >
                ADD
              </button>
            </div>

            <div className="mt-5 px-10 flex flex-col gap-3 max-h-[500px] overflow-auto">
              {loading ? (
                <Loading />
              ) : (
                data?.todos?.map((todo, index) => (
                  <div key={todo.id}>
                    <TodoItem id={todo.id} number={index} description={todo.description} isFinished={todo.isFinished} onOpenModal={handleOpenModal} />
                  </div>
                ))
              )}
            </div>
          </div>
      </div>
      <Modal isOpen={isOpenModal} onCancel={handleCloseModal} onOk={handleRemove}>
        <div className="p-10 pb-16">
          <p>Vui long hoan thanh truoc khi xoa</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
