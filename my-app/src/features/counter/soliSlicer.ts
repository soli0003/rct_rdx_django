import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getRefresh, loginServer } from './soliAPI';

export interface SoliState {
    uName: string;
    isLoggedIn: boolean;
    status: 'logged' | 'not logged'
}

const initialState: SoliState = {
    uName: '',
    isLoggedIn: false,
    status: 'not logged'
};


export const loginAsync = createAsyncThunk(
    'login/soliAPI',
    async (cred: any) => {
        const response = await loginServer(cred.username, cred.password)
        const token = localStorage.getItem("access")
        return response.data
    }
)

export const getRe = createAsyncThunk(
    'login/soliAPI',
    async (refToken: any) => {
        // const token = sessionStorage.getItem("refresh")
        const response = await getRefresh(refToken)


        // const response = await getRefresh(token)
        console.log(response);
    }
)

export const soliSlice = createSlice({
    name: 'soli',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.uName = '';
        },
        setLog(state) {
            state.status = 'logged'
            console.log("ss");
            state.isLoggedIn = true;

            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                if (action != null) {
                    state.isLoggedIn = true;
                    state.status = 'logged'
                    console.log("good");

                } else {
                    state.isLoggedIn = false;
                    state.status = 'not logged'
                    console.log("shit");
                    state.uName = '';
                }
            })
    }
});



export const { logout, setLog } = soliSlice.actions;

export const selectUname = (state: RootState) => state.soli.uName;
export const selectIsLoggedIn = (state: RootState) => state.soli.isLoggedIn;
export const selectStatus = (state: RootState) => state.soli.status;

export default soliSlice.reducer;
