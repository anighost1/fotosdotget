import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    keyword:'',
    trigger: false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    assignKeyword: (state, action) => {
        state.keyword = action.payload
    },
    searchTrigger: (state) => {
        state.trigger = !state.trigger
    },
  },
})

export const { assignKeyword, searchTrigger } = searchSlice.actions

export default searchSlice.reducer