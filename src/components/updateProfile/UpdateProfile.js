import { useState } from "react"
import { Button, Form, Card } from "react-bootstrap";
import { update, auth } from "../../firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth";
import './updateProfile.css'
import NavBar from "../navbar/NavBar";

export default function UpdateProfile() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const [displayName, setDisplayName] = useState(user.displayName || '');
    const [avatar, setAvatar] = useState(user.photoURL || '');
    const handleSubmit = async e => {
        e.preventDefault()
        await update({
            displayName,
            photoURL: avatar
        })
        dispatch(login(auth.currentUser));
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className='d-flex align-items-center justify-content-center  ' >
                <Card className="updateProfileCard shadow">
                    <h1 className="mt-5 title">Update Profile</h1>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name-Surname</Form.Label>
                        <Form.Control type="text" placeholder="John doe" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="text" placeholder="upload image" value={avatar} onChange={e => setAvatar(e.target.value)} />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button type='submit' className='updateBtn container-fluid'  >Update </Button>
                    </div>
                </Card>
            </Form>
        </>
    )
}