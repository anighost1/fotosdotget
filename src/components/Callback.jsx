// Currently not in use
import React, { useEffect } from 'react'
import Service from '../services/http';

const Callback = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code')

    const authentication = async () => {
        const authResponse = await Service.getAuthToken(code)
        console.log(authResponse)
    }

    useEffect(() => {
        if (code) {
            authentication()
        }
    }, [])

    return (
        <h1>Callback</h1>
    )
}

export default Callback