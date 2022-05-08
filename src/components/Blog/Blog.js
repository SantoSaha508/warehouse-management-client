import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-success'>
                <h3>Difference between javaScript and node.js?</h3>
                <p>
                    javaScript: <br />
                    1. It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well. <br />
                    2. NodeJS helps us run JS outside the browser as well. <br />
                    3. It lets us use JS on the server-side as well since it works on the server-side. <br />
                    4. The Node.JS, on the other hand, isn’t capable enough to add various HTML tags. <br />
                    5. Inside Node.JS, we have the JS engine known as V8. It helps in parsing and running the JS code. <br />

                    <br />
                    node.js <br />
                    1. It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature. <br />	
                    2. We can only run JS on browsers. <br />	
                    3. It is utilised on the web page’s client-side. <br />
                    4. The JS can easily add HTML and even play with the DOM. <br />
                    5. We can run JS in any browser engine, such as the Spidermonkey in the Firefox browser and the JS core in the Safari browser. <br />	
                </p>
            </div>
            <div className='bg-danger'>
                <h3>Difference between sql and nosql database?</h3>
                <p>
                    sql: <br />
                    1. SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database. <br />
                    2. Use of SQL queries and syntax to analyse and get further data insights. Used for OLAP systems. <br />
                    3. 	They are scalable vertically. <br />
                    4. SQL uses specialized DB hardware to enhance performance	
                </p>
                <p>
                    nosql: <br />
                    1. NoSQL is a distributed or Non-relational Database. <br />
                    2. Apply different types of database technologies. <br />
                    3. These are horizontally scalable. <br />
                    4. Dynamic schema is used for unstructured or disorganised data. <br />
                </p>
            </div>
            <div className='bg-success'>
                <h3>What is the purpose of jwt and how does it works?</h3>
                <p>
                JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
            </div>
        </div>
    );
};

export default Blog;