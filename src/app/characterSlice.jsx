import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  profile:[],
  characters: [],
  status: "",
  error: null,
  pagination: {
    count: 0,
    pages: 0,
    next: "",
    prev: ""
  },
  querySearch:"",
  recentVisitedProfile: [],
}
export const fetchCharacters = createAsyncThunk(
  'characters/FetchCharacters',
  async({ page = 1 ,query = ""})=>{
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;

  }
)
  'fetchCharacters',
  async ({page = 1}) => {
    try {
      const path_url  = `https://rickandmortyapi.com/api/character/?page=${page}`
      const res = await fetch(path_url)
      const characterData = await res.json()
      return characterData
    } catch (error) {
      error
    }
  };
export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  
    reducers:{
      setRecentProfiles: (state,action)=>{
        state.recentVisitedProfile =  action.payload
    }},

    extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status=  "pending"
      state.error = null;
    })
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = "fulfilled"
      state.characters = action.payload
      state.pagination = {
        count: action.payload.info.count,
        pages: action.payload.info.pages,
        next: action.payload.info.next,
        prev: action.payload.info.prev,

      }
      state.error = null;
    })
    .addCase(fetchCharacters.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    })
     builder.addCase(fetchProfile.pending, (state) => {
      state.status = "pending";
      state.error = null;
    })
    .addCase(fetchProfile.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.profile = action.payload;
      state.error = null;
    })
    .addCase(fetchProfile.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});


export const fetchProfile = createAsyncThunk(
  'fetchProfile',
  async (id) => {
    const responce = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data=  await responce.json();
    return data;
  }
);

export default characterSlice.reducer
// export const SelectData = (state) => console.log(state, "data");
export const SelectPagination = (state) => state.characters.pagination;
export const SelectData = (state) => state.characters.characters.results;
export const SelectSinglecharacter =(state)=> state.characters.profile;
export const selectSearchque = (state) => state.characters.querySearch;
export const selectError = (state) => state.characters.error;
export const selectStatus = (state) => state.characters.status;
export const {setRecentProfiles} = characterSlice.actions
