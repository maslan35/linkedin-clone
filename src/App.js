import './App.css';
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {login} from './features/userSlice'
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() =>{
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const user = await userAuth.getIdTokenResult()
        dispatch(login({
          displayName: user.claims.name,
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL
        }))
      }
    })
  })

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> :
       (
        <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
       )}
      
    </div>
  );
}

export default App;
