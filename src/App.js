import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Slider from "./Slider";
import Categories from "./Categories";

const promise = loadStripe(
  "pk_test_51LQjKEE9YQAk8HvgvgBc2liQbYR7lQLx8AbLZtcVWqKbI4BJ7kCzAGVCN6mYNc9lqwQbMCnRsXw1bBrQejzRgww400xeLTHP0a"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={
          <>
          <Header />
          <Orders />
          </>
          } />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Categories />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Slider />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
