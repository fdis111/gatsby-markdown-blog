import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="François Disubi">
      <h1>François Disubi </h1>
      <p>Hey, I'm François Disubi, A dynamic full stack developer.</p>

      <p>
        I help developers to become more skilled and companies to implement
        digital tools to optimize their workflows.
      </p>

      <p>
        Currently I work at{" "}
        <a href="https://www.kinshasadigital.academy/" target="blank">
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
        In my free time (and even when I'm working), I love listening to music.
      </p>
      <p>
        You can follow me on{" "}
        <a href="https://github.com/fdis111" target="blank">
          GitHub,
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/fran%C3%A7ois-disubi-200653199/"
          target="blank"
        >
          Linkedin,
        </a>{" "}
        <a href="https://www.instagram.com/big_diss_blckb/" target="blank">
          Instagram
        </a>{" "}
        or you can email me at{" "}
        <a href="mailto:disubif@gmail.com">disubif@gmail.com</a>
      </p>
      {/* <p>If you like my work, you can buy me a coffee.</p> */}
    </Layout>
  );
};

export default IndexPage;
