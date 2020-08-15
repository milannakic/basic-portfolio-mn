import React from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <span>
              <span style={{ color: "#ddd" }}>Milan </span>
              <strong>Nakic</strong>
            </span>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
