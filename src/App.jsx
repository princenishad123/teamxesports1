import React, { lazy, Suspense, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import UserProtected from "./ProtectedRoutes/UserProtected";
import Loader from "./Component/Loader";
import { userAccount } from "./Redux/Auth/authSlice";

const Home = lazy(() => import("./Pages/Home"));
const ViewContest = lazy(() => import("./Pages/ViewContest"));
const MyContest = lazy(() => import("./Pages/MyContest"));
const Winner = lazy(() => import("./Pages/Winner"));
const Account = lazy(() => import("./Pages/Account"));
const RegisterTeam = lazy(() => import("./Pages/RegisterTeam"));
const StartPage = lazy(() => import("./Pages/StartPage"));
const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const AddMoney = lazy(() => import("./Pages/AddMoney"));
const Withdrawals = lazy(() => import("./Pages/AdminPages/Withdrawals"));
const Withdraw = lazy(() => import("./Pages/Withdraw"));

const TournamentsDetails = lazy(() =>
  import("./Pages/AdminPages/TournamentsDetails")
);
const LiveTournaments = lazy(() =>
  import("./Pages/AdminPages/LiveTournaments")
);

const CompletedTournaments = lazy(() =>
  import("./Pages/AdminPages/CompletedTournaments")
);

import AdminProtectedToute from "./ProtectedRoutes/AdminProtectedToute";
const MyWithdraw = lazy(() => import("./Pages/MyWithdraw"));
const MyDeposites = lazy(() => import("./Pages/MyDeposites"));
const ForgetPassword = lazy(() => import("./Pages/ForgetPassword"));

const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const HomeAdmin = lazy(() => import("./Pages/AdminPages/HomeAdmin"));
const PostTournaments = lazy(() => import("./Pages/PostTournaments"));
const Users = lazy(() => import("./Pages/AdminPages/Users"));
const App = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn, userData } = useSelector((state) => state.auth);
  axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;
  axios.defaults.headers.common["Authorization"] = token;

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* admin Dashboard */}
          <Route
            path="/admin-account"
            element={<AdminProtectedToute Component={AdminDashboard} />}
          >
            <Route path="" element={<HomeAdmin />} />
            <Route path="create-tournament" element={<PostTournaments />} />
            <Route path="live-tournaments" element={<LiveTournaments />} />
            <Route path="tournament/:id" element={<TournamentsDetails />} />
            <Route path="withdrawals" element={<Withdrawals />} />
            <Route path="all-users" element={<Users />} />
            <Route
              path="completed-tournament"
              element={<CompletedTournaments />}
            />
          </Route>

          {/* // protected routes */}
          <Route path="/" element={<UserProtected Component={Home} />} />

          <Route
            path="/view-contest/:id"
            element={<UserProtected Component={ViewContest} />}
          />

          <Route
            path="/my-contest"
            element={<UserProtected Component={MyContest} />}
          />
          <Route
            path="/winners"
            element={<UserProtected Component={Winner} />}
          />
          <Route
            path="/account"
            element={<UserProtected Component={Account} />}
          />
          <Route
            path="/withdraw"
            element={<UserProtected Component={Withdraw} />}
          />
          <Route
            path="/add-money"
            element={<UserProtected Component={AddMoney} />}
          />
          <Route
            path="/registration"
            element={<UserProtected Component={RegisterTeam} />}
          />
          <Route
            path="/transactions/withdraw"
            element={<UserProtected Component={MyWithdraw} />}
          />
          <Route
            path="/transactions/deposites"
            element={<UserProtected Component={MyDeposites} />}
          />

          <Route path="/start" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
