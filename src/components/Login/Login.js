import React, {useState} from 'react'
import { auth } from '../../firebase'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp = async (e) => {
        e.preventDefault()
        try {
            const userAuth= await auth.signInWithEmailAndPassword(email, password)
            
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName, 
                photoURL: userAuth.user.photoURL
            }))

        } catch (error) {
            console.log(error)
        }
    }

    const register = async () => {
        try{
            const userAuth = await auth.createUserWithEmailAndPassword(email, password)
            
            await userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            dispatch(login({
                displayName: name,
                photoURL: profilePic,
                email: userAuth.user.email,
                uid: userAuth.user.uid
            }))
        } catch(err){
            console.log(err)
            alert(err)
        }      
    }

  return (
    <div className='login'>
        <img
            src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
            alt="Linkedin main logo"
        />
        <form>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" 
            placeholder="Full Name" />
            <input 
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
            type="text" 
            placeholder="Profile pic URL(optional)" />
            <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
             placeholder="Email" />
            <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
             type="password"
             placeholder="Password" />

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login