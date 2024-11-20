import React from 'react'
import { useAuth } from '../../context/auth'

const Profile = () => {
  const [auth,setAuth] = useAuth()
  return (
    <div>Profile

<pre>{JSON.stringify(auth, null, 4)}</pre>

    </div>
  )
}

export default Profile