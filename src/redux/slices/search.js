import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    keyword:''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    assignKeyword: (state, action) => {
        state.keyword = action.payload
    },
  },
})

export const { assignKeyword } = searchSlice.actions

export default searchSlice.reducer