import React from "react";
import Layout from "../../layout";
import Posts from "../../molecules/posts";
import StoriesTemplateContainer from "./style";

const StoriesTemplate = ({ posts }) => {
  return (
    <Layout>
      <StoriesTemplateContainer>
        <div>
          <h1>Just a gatsby Blog</h1>
        </div>
        <div>
          <Posts posts={posts} />
        </div>
      </StoriesTemplateContainer>
    </Layout>
  );
};

export default StoriesTemplate;
