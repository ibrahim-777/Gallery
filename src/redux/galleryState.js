import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=9');
        const formattedResponse = await response.json()
        return formattedResponse
    }
)

export const gallerySlice = createSlice({
name:'gallery',
initialState:{
    photos:[],
    isloading:false
},
extraReducers: (builder) =>{
    ///for pending loading when server send api
    builder
    .addCase(getPhotos.pending,(state)=> {
        state.status = 'pending';
        state.isloading = true
    })

    ///for successful calling api
    .addCase(getPhotos.fulfilled,(state,action) => {
    state.status = 'fulfilled';
    state.photos = action.payload;
    state.isloading = false;
    })
    /// for rejected call 
    .addCase(getPhotos.rejected,(state)=> {
    state.status = 'rejected';
    state.isloading = false;
    })
}
});

export default gallerySlice.reducer