import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetUserDipositesHistoryQuery,
  useGetUserWithdrewHistoryQuery,
} from "../Redux/querySlice";
import TransactionHistory from "../Component/TransactionHistory";
import Loader from "../Component/Loader";

const MyDeposites = () => {
  const { data, isLoading, isError } = useGetUserDipositesHistoryQuery();

  return (
    <div className="max-w-lg mx-auto bg-slate-50 p-3">
      <h3 className="text-md font-medium m-3 text-red-600">
        My deposites History
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((e) => (
          <TransactionHistory
            key={e._id}
            status={e.status}
            amount={e.balance}
            orderId={e.orderNumber}
            date={e.createdAt}
            userId={e._id}
          />
        ))
      )}
    </div>
  );
};

export default MyDeposites;
