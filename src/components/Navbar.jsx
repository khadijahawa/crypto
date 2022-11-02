import React, { useState } from "react";
import { Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="nav-container">
      <div
        style={{
          backgroundColor: "#001529",
          display: "flex",
          padding: 20,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography.Title level={2}>
          <Link to="/">Crypto</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
