import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const paymentSlice = createSlice({
    name: "payment",
    initialState: { 
      wallet: "00",
   
       
    },
    reducers: {
        addMoney: (state, actions) => {
               axios .post("/user/order", {
        amount: actions.payload,
        curency: "INR",
      })
                 .then((res) => {
         
        const response = res.data.order;
     
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY, // Razorpay Key ID
          amount: response.amount, // Amount in paise (₹500.00)
          currency: "INR",
          name: "Add balance",
          description: "I'm adding balance in my wallet",
          order_id: response.id, // Pass the order ID received from the backend
          handler: function (response) {
            // Send payment details to the backend for verification
            axios
              .post("/user/verify-payment", {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: actions.payload,
                teamName: "Team Alpha", // Example team details
                members: ["John", "Jane"],
              })
              .then((res) => {
              toast.success("money added")
               
                  location.replace("/account")
              })
              .catch((err) => {
                  toast.error("Failed to add money")
              });
          },
        };
        const rzp = new Razorpay(options);
        rzp.open();
      })
      .catch((err) => {
        console.log(err);
      });
            
        },
     
    }
})

export const { addMoney } = paymentSlice.actions
export default paymentSlice.reducer;