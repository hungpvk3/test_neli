import { gql } from '@apollo/client';

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID) {
        deleteTodo(id: $id) {
            id
        }
    }
`;


export const ADD_TODO = gql`
    mutation AddTodo($description: String) {
        addTodo(description: $description) {
            id
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID, $description: String, $isFinished: Boolean) {
        updateTodo(id: $id, description: $description, isFinished: $isFinished) {
            id
        }
    }
`;
