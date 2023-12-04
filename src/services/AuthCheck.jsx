import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthCheck() {

    const accessToken = useSelector((state) => state.user?.access_token)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const isLoggedIn = ()=>{
        if(!accessToken || !user){
            // window.location.replace('/')
            navigate('/')
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

  return (
    <></>
  )
}
