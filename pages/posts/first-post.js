import Link from "next/link"
import Head from 'next/head'
import Layout from "../../components/layout";
import Script from 'next/script'
import useSWR from 'swr';

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

const Profile = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users/2', fetchData);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
}

const FirstPost = () => {

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Profile />
        </Layout>
    )
}

export default FirstPost