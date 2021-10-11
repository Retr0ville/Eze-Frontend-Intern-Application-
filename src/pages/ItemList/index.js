/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import Content from "../../layout/content";

const ItemList = (props) => {
  return (
    <div>
      <Header />
      <div className="main">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;
