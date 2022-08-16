import React from "react";
import Layout from "../../atoms/layout";
import Posts from "../../molecules/posts";
import StoriesTemplateContainer from "./style";

const StoriesTemplate = ({ posts }) => {
  return (
    <Layout>
      <StoriesTemplateContainer>
        <div>
          <h1>Stories</h1>
          <p>
            New skills I learned, technologies I used or tutorials, sharing is
            caring.
          </p>
        </div>
        <div>
          <Posts posts={posts} />
        </div>
      </StoriesTemplateContainer>
    </Layout>
  );
};

export default StoriesTemplate;
