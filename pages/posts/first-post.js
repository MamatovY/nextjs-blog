'use client'
import Head from 'next/head'
import Layout from "../../components/layout";
import InputUser from '../../components/inputUser';

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3001/users/3')
    const data = await res.json()
    return { props: { data } }
}

const FirstPost = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>

            <div>
                {data.name}
            </div>
            <InputUser id={3} name={data.name} />
        </Layout>
    )
}

export default FirstPost