import React from "react";
import {
  github,
  kinshasadigitalAcademy,
  linkedin,
  instagram,
} from "../../../util/externalLinks";
import Layout from "../../layout";

const Index = () => {
  return (
    <Layout pageTitle="François Disubi">
      <div className="page-content">
        <h1 className="page-content">François Disubi </h1>
        <p>Hey, I'm François Disubi, A dynamic full stack developer.</p>

        <p>
          I help developers to become more skilled and companies to implement
          digital tools to optimize their workflows.
        </p>

        <p>
          Currently I work at{" "}
          <a href={kinshasadigitalAcademy} target="blank">
            Kinshasa Digital Academy
          </a>{" "}
          as a full-stack developer trainer. <br />
          My tasks consist in :
          <ul>
            <li>Prepare trainings sessions,</li>
            <li>Follow up on the learners skills development,</li>
            <li> And manage projects</li>
          </ul>
        </p>
        <p>
          In my free time (and even when I'm working), I love listening to
          music.
        </p>
        <p>
          You can follow me on{" "}
          <a href={github} target="blank">
            GitHub,
          </a>{" "}
          <a href={linkedin} target="blank">
            Linkedin,
          </a>{" "}
          <a href={instagram} target="blank">
            Instagram
          </a>{" "}
          or you can email me at{" "}
          <a href="mailto:disubif@gmail.com">disubif@gmail.com</a>
        </p>
      </div>
    </Layout>
  );
};

export default Index;
