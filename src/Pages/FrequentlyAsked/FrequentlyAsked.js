import React from "react";
import { Accordion } from "react-bootstrap";

const FrequentlyAsked = () => {
  return (
    <div>
      <h4 className="text-primary text-center m-4">
        Frequently Asked questions
      </h4>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Is there any data security ?</Accordion.Header>
          <Accordion.Body>
            Yes, in this website we used mongodb as database.So,There is no
            problem with data security.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Who can use this website ?</Accordion.Header>
          <Accordion.Body>
            This website easily operate by anyone,Because of it's friendly UI
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FrequentlyAsked;
