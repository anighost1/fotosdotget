import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AuthCheck() {

    const accessToken = useSelector((state) => state.user?.access_token)
    const user = useSelector((state) => state.user)

    const isLoggedIn = ()=>{
        if(!accessToken || !user){
            window.location.replace('/')
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

  return (
    <></>
  )
}
