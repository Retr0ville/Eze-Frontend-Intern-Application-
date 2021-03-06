import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import Message from "../../components/Message";
import Search from "../../components/Search";

const Content = () => {
  // state init
  const [itemData, setItemData] = useState([]);
  const [msgData, setMsgData] = useState("");
  const [err, setErr] = useState();

  async function loadItems() {
    try {
      const response = await axios.get(
        "https://eze-mobile-api-staging.herokuapp.com/api/v1/products/price?limit=20&page=1&category=Smartphones&brand=Apple&sort=lowestAsk&hoursInterval=24"
      );

      console.log(response.data.message);
      return response.data.data;
    } catch (err) {
      return err;
    }
  }
  const updateItemList = () => {
    console.log("updating");
    loadItems()
      .then((result) => {
        result.data ? setItemData(result.data) : setItemData([]);
        setMsgData(result.data ? result.data.length : 0);
      })
      .catch((err) => {
        setErr(err);
      });
  };
  useEffect(() => {
    updateItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemCards = itemData.map((item) => {
    const { imgUrl, name } = item;

    if (item.data)
      return item.data.map(({ price }) => {
        const { id, amount, quantity, grade, carrier, storageSize, createdAt } =
          price;
        //  price : {}
        return (
          <Col key={id ? id : ""} className="item">
            <ItemCard
              featuredImage={imgUrl ? imgUrl : ""}
              grade={grade ? grade : ""}
              quantity={quantity ? quantity : ""}
              carrier={carrier ? carrier : ""}
              postedOn={createdAt ? createdAt.slice(0, 10) : ""}
              title={name ? name : ""}
              storageSize={storageSize ? storageSize : ""}
              cost={`$${amount ? amount : ""}`}
            />
          </Col>
        );
      });
    else return [];
  });

  return (
    <div>
      <Container className="Itemlist">
        <Message onClick={updateItemList} msgData={msgData} err={err} />
        <Search />

        <div className="content">
          <Row xs={2} sm={2} md={3} lg={4} xl={5}>
            {itemCards}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Content;
