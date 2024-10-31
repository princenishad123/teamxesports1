import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
            prepareHeaders: (headers, { getState }) => {
      // Get the token from the state or storage
      const token = getState().auth.token || localStorage.getItem('token');
      
      // If a token is available, set the Authorization header
      if (token) {
        headers.set('Authorization', `${token}`);
      }

      return headers;
    },
  
     }),
    
    endpoints: (builder) => ({

        // get user data
        getUserAccount: builder.query({
            query: () => "/user/account"
        }),

        getAllUsers: builder.query({
            query: () => "/user/get-allusers"
        }),

        // get contests
        getContests: builder.query({
            query:()=> "/matches/tournaments"
        }),

        // get my contests
        getMyContests: builder.query({
            query:()=> "/user/my-contests"
        }),


        // get contests by id
        getContestsById: builder.query({
            query: ({ id }) => { `/matches/tournaments/${id}` }
        }),

        // get live tournaments
        getLiveTournaments: builder.query({
            query: () =>"/matches/live-tournaments"
  
        }),
        // get completed tournaments
        getCompletedTournaments: builder.query({
            query: () =>"/matches/completed-tournaments"
  
        }),

        registerTeam: builder.mutation({
            query: ({ id, ...updatedData }) => {
                try {
                    return {
                url: `/matches/register-team/${id}`,
                method: "POST",
                body:updatedData
                    }
                } catch (error) {
                    console.log(error)
                }
    
                
            }
        }),



         // get withdrawals
        getWithdrawals: builder.query({
            query:()=> "/user/get-withdrawals"
        }),


       
        
    })
});


export const {useGetUserAccountQuery,useRegisterTeamMutation,useGetContestsQuery,useGetContestsByIdQuery , useGetMyContestsQuery,useGetLiveTournamentsQuery,useGetCompletedTournamentsQuery,useGetAllUsersQuery,useGetWithdrawalsQuery } = api