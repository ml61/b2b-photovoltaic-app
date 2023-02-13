import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  ISignInInput,
  ISignInOutput,
} from '../../interfaces/ApiInterfaces/ISignIn';
import {
  ISignUpInput,
  ISignUpOutput,
} from '../../interfaces/ApiInterfaces/ISignUp';
import { RequestError } from '../../interfaces/globalInterfaces';
import { IUser } from '../../interfaces/IUser';
import { baseURL } from '../../utils/constants';
import { rtkQueryErrorHandler } from '../../utils/rtkQueryErrorModifier';
import authSlice from '../reducers/authReducer';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }) as BaseQueryFn<string | FetchArgs, unknown, RequestError | undefined, {}>,
  tagTypes: ['User'],
  endpoints: (build) => ({
    fetchUsers: build.query<IUser[], number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: (limit) => ({ url: '/users', params: { _limit: limit } }),
      // transformErrorResponse: (
      //   response: { status: string | number },
      //   meta,
      //   arg
      // ) => response.status,
      providesTags: (result) => ['User'],
    }),

    signUp: build.mutation<ISignUpOutput, ISignUpInput>({
      query: (payload) => ({
        url: 'user/signUp',
        body: { ...payload },
        method: 'POST',
      }),
      invalidatesTags: ['User'],

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          // `onSuccess` side-effect
          const { data } = await queryFulfilled;
          const {
            token,
            user: { companyName, phoneNumber, role, _id },
          } = data;
          dispatch(
            authSlice.actions.setUserAuth({
              token,
              user: { companyName, phoneNumber, role, _id },
            })
          );
        } catch (err) {
          // `onError` side-effect
        }
      },

      transformErrorResponse: (baseQueryReturnValue, meta, arg) =>
        rtkQueryErrorHandler(baseQueryReturnValue),
    }),

    signIn: build.mutation<ISignInOutput, ISignInInput>({
      query: (payload) => ({
        url: 'user/signIn',
        body: { ...payload },
        method: 'POST',
      }),
      invalidatesTags: ['User'],

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          // `onSuccess` side-effect
          const { data } = await queryFulfilled;
          const {
            token,
            user: { companyName, phoneNumber, role, _id },
          } = data;
          dispatch(
            authSlice.actions.setUserAuth({
              token,
              user: { companyName, phoneNumber, role, _id },
            })
          );
        } catch (err) {
          // `onError` side-effect
        }
      },

      transformErrorResponse: (baseQueryReturnValue, meta, arg) =>
        rtkQueryErrorHandler(baseQueryReturnValue),
    }),
  }),
});
