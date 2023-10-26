import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {authService} from "../../services/auth.service";
import {IAuth} from "../../interfaces/auth.interface";
import {AxiosError} from "axios";
import {IErrorAuth} from "../../interfaces/error.interface";
import {IUser} from "../../interfaces/user.interface";
import {ITokens} from "../../interfaces/tokens.interface";

interface IState {
    error:IErrorAuth
    me:IUser
}


const initialState :IState = {
     error:null,
    me:null
}

const login = createAsyncThunk<IUser, IAuth>(
    'authSlice/login',
    async (user, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
)

const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.registerUser(user)
        } catch (e) {
            const err = e as AxiosError

            return rejectWithValue(err.response.data)
        }

    })


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {},
    extraReducers:builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addMatcher(isFulfilled(), (state, action) => {
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
            state.error = action.payload as IErrorAuth
        })
    }
})


const {reducer: AuthReducer, actions} = AuthSlice


const authActions = {
    ...actions,
    register,
    login
}

export {
    AuthReducer,
    authActions
}