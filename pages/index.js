import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getServerSideProps(context) {
  //https://jsonplaceholder.typicode.com/posts/1
  const allPostsData = getSortedPostsData();
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await res.json()
  return {
    props: {
      allPostsData,
      post
    },
  };
}



export default function Home({ allPostsData, post }) {
  console.log(allPostsData);
  console.log(post);
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h2 className={utilStyles.headingLg}>{post.title}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}