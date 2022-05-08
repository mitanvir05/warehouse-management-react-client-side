import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Difference between javascript and nodejs</h2>
      <p>
        Ans.Javascript is a programming language that is used for writing
        scripts on the website.NodeJS is a Javascript runtime
        environment.Javascript can only be run in the browsers.We can run
        Javascript outside the browser with the help of NodeJS.It is basically
        used on the client-side.It is mostly used on the server-side.
      </p>
      <h2>When should you use nodejs and when should you use mongodb</h2>
      <p>
        Ans. When we are building a website and that need a database to store
        the data or information so here we can use MongoDB but to be connected
        with MongoDB we need a connector, so here we can use NodeJS which will
        help our website to run outside of server.
      </p>
      <h2>Differences between sql and nosql databases.</h2>
      <p>
        Ans. SQL databases are relational, NoSQL databases are non-relational.
        SQL databases use structured query language and have a predefined
        schema. NoSQL databases have dynamic schemas for unstructured data. SQL
        databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON.
      </p>
      <h2>What is the purpose of jwt and how does it work</h2>
      <p>
        Ans. JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.
      </p>
      https://stackoverflow.com/questions/72158120/how-can-i-increase-quantity-by-clicking-that-delivered-button-in-react-js-and-al/72158258#72158258
    </div>
  );
};

export default Blogs;
