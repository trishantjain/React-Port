import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiDesignernews
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
            <Col xs={4} md={2} className="tech-icons">
                <a href="https://graphics-infinity.odoo.com/explore" style={{"color": "inherit"}}>
                    <SiDesignernews />
                </a>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col> */}
        </Row>
    );
}

export default Toolstack;
