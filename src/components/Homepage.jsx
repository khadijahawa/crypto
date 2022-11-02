import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <div style={{ height: 800, alignItems: "center", padding: 20 }}>
      <Title style={{ padding: 10, color: "#0071bd" }}>Crypto Currencies</Title>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <p>
            {" "}
            Coins are classified according to their risk status. It is divided
            into three groups as high risk, medium risk and low risk.
          </p>
          <Button shape="round" style={{ height: 100, width: 200, margin: 20 }}>
            <Link to="/Currency">Coin Revenues</Link>
          </Button>
        </Col>
        <Col span={12}>
          <p>
            {" "}
            What is a monthly income? The return of the coins according to the
            definition of risk changes, the profit rate per month
          </p>
          <Button shape="round" style={{ height: 100, width: 200, margin: 20 }}>
            Risk Analysis
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
