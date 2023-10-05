import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { deleteUser, editUser } from "../redux/Actions/userAction";
import '../Styles/updateUser.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

const UpdateUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [id, setId] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();

    const usersList = useSelector((state) => state);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user = usersList.find(user => user.id === parseInt(params.id));
        setId(user.id);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setAvatar(user.avatar);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: avatar,
        }

        dispatch(editUser(userData));
        success();
        console.log(usersList);
    }

    function handleDeleteUser() {
        const user = usersList.find(user => user.id === parseInt(params.id));
        console.log(user);
        dispatch(deleteUser(user));
        navigate('/');
    }

    function success() {
        messageApi.open({
            type: 'success',
            content: 'User Updated Successfully',
        })
    }
    
    return (
        <>
            {contextHolder}
            <Form className='d-flex flex-col w-50 text-center' handleSubmit={handleSubmit}>
                <h1>Update User</h1>
                <Input
                    id='first_name'
                    placeholder="First Name"
                    type='text'
                    value={firstName}
                    required={false}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    id='last_name'
                    placeholder="Last Name"
                    type='text'
                    value={lastName}
                    required={false}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    id='email'
                    placeholder="Email"
                    type='email'
                    value={email}
                    required={false}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id='avatar'
                    placeholder="Avatar URL"
                    type="url"
                    value={avatar}
                    required={false}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <div className="update-btns d-flex justify-content-center">
                    <Button className="btn btn-primary submit-btn align-self-center" type="submit">
                        Submit
                    </Button>
                    <Button onClick={handleDeleteUser} className="btn btn-secondary submit-btn align-self-center" type="button">
                        Delete User
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default UpdateUser;