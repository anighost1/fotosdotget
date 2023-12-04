import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    access_token:'',
    user:{}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
        state.access_token = action.payload
        // console.log('token added')
    },
    removeToken: (state) => {
        state.access_token = ''
        state.user = {}
    },
    addUser: (state, action) => {
        state.user = action.payload
    },
  },
})

export const { addToken, removeToken, addUser } = userSlice.actions

export default userSlice.reducer