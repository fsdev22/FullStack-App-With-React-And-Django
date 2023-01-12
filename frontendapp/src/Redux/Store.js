import {configureStore, createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
    totaluser:0,
    users:[]
}
const userSlice = createSlice({
    name:'userSlice',
    initialState:INITIAL_STATE,
    reducers:{
        updateUserDetails(state,action){
            if(action.payload!=null){
                state.totaluser = action.payload.totaluser
                state.users = action.payload.users
            }
        }
    }
})

const store = configureStore({
    reducer:userSlice.reducer
})

export const userAction = userSlice.actions;
export default store