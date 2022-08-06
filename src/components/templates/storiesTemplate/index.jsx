import React from 'react'
import Layout from "../../layout";
import Posts from '../../molecules/posts';


const StoriesTemplate = ({posts}) => {
  return (
    <Layout>
      <h1>Just a gatsby Blog</h1>
      <Posts posts={posts} />
    </Layout>
  )
}

export default StoriesTemplate