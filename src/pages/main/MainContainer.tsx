import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const MainContainer= ({ }) => {
    return (
        <div>
            <Header />
            <Main  />
            <Footer />
        </div>
    );
};

export default MainContainer;