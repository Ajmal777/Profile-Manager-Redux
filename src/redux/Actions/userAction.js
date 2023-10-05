import axios from "axios"
import { ADD_USER, DELETE_USER, EDIT_USER } from "./actionType"

export const addUser = (userData) => {
    return {
        type: ADD_USER,
        payload: userData,
    }
}

export const editUser = (userData) => {
    return {
        type: EDIT_USER,
        payload: userData,
    }
}

export const deleteUser = (userData) => {
    return {
        type: DELETE_USER,
        payload: userData,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                res.data.data.forEach(user => dispatch({
                    type: ADD_USER,
                    payload: user
                }));

            })
            .catch(err => console.log(err))
    }
}