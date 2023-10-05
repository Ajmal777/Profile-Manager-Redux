import React, { useState } from "react";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import '../Styles/addUser.css'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/Actions/userAction";
import { message } from "antd";

const AddUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const usersList = useSelector((state) => state);
    const dispatch = useDispatch();

    function success(){
        messageApi.open({
            type: 'success',
            content: 'User Added Successfully',
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            id: usersList.length + 1,
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: avatar,
        }

        dispatch(addUser(userData));
        success();
        console.log(usersList);
    }

    return (
        <>
            {contextHolder}
            <Form className="d-flex w-50 flex-col text-center" handleSubmit={handleSubmit}>
                <h1>Add User</h1>
                <Input
                    id='first_name'
                    placeholder="First Name"
                    type='text'
                    required={true}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    id='last_name'
                    placeholder="Last Name"
                    type='text'
                    required={true}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    id='email'
                    placeholder="Email"
                    type='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id='avatar'
                    placeholder="Avatar URL"
                    type="url"
                    required={true}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <Button className="btn btn-primary submit-btn align-self-center" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default AddUser;