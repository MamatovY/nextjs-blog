import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps(context) {
  //https://jsonplaceholder.typicode.com/posts/1
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}


export default function Home({ allPostsData }) {
  console.log(allPostsData);

  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
        <h2>
          <Link href="/posts/first-post">First post</Link>
        </h2>
      </section>
    </Layout>
  );
}