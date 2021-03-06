import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <head>
        <link rel="stylesheet" href="styles.css" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web Dev Bootcamp</title>
      </head>

      <body>
        <img
          src="https://raw.githubusercontent.com/clickonrefresh/textures/main/clickonrefresh1.png"
          alt="Logo"
          label="Clickonrefresh"
        />
        <div>
          <h1>Make Your Selection</h1>
          <h2>Monty Python Shenanigans</h2>

          <ol>
            <li>
              <a href="section3/stoning.html">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 4, The Stoning
                </span>
              </a>
            </li>
            <li>
              <a href="section3/sceana-ix.html">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 9, Brian Learns To
                  Conjugate
                </span>
              </a>
            </li>
            <li>
              <a href="section4/emmet.html">
                Section 4:
                <span>Emmet in VSCode</span>
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2>Dont Panic!</h2>
          <ul>
            <h3>
              <li>Projects & Portfolio</li>
            </h3>
            <ul>
              <li>
                <a href="https://clickonrefresh.github.io">
                  {" "}
                  Clickonrefresh 3D
                </a>
              </li>
              <li>
                <a href="https://clickonrefresh.github.io/clickonodoo/">
                  ClickonOdoo - Odoo CE customised, dockerized and automated
                </a>
              </li>
            </ul>

            <h3>
              <li>Profile</li>
            </h3>
            <ul>
              <li>
                <a href="https://linkedin.com/in/clickonrefresh">
                  Linkedin - Clickonrefresh
                </a>
              </li>
            </ul>
          </ul>

          <img
            src="assets/bamboo.png"
            alt="Bamboo Background"
            label="Bamboo Background"
          />
        </div>
      </body>
    </Layout>
  );
}
