import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Emmet</title>
  </head>
  <body>
    <main>
      <section>
        <h1>
          <span>
            <canvas>
              <h1></h1>
              <h2>
                {/* <code> canvas>nav>ul>li*5>a[href=www.$.com]{CLick Me!} </code> */}
              </h2>
              <h2></h2>
            </canvas>
          </span>
        </h1>
      </section>
      <canvas>
        <nav>
          <ul>
            <li><a href="www.1.com">Click Me!</a></li>
            <li><a href="www.2.com">Click Me!</a></li>
            <li><a href="www.3.com">Click Me!</a></li>
            <li><a href="www.4.com">Click Me!</a></li>
            <li><a href="www.5.com">Click Me!</a></li>
          </ul>
        </nav>
      </canvas>
    </main>
  </body>
</html>

</Layout>
);
}