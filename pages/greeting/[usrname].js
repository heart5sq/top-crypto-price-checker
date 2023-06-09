import {useRouter} from "next/router"
import Head from 'next/head'

const Greeting = () => {
    const router = useRouter();
    const {usrname} = router.query
    return (
        <>
            <Head>
                <title>Hi {usrname} - Boomarket</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{textAlign:"center",paddingTop:"25%"}}>
                <h1>hey {usrname}</h1>
            </div>
        </>
    )
}

export default Greeting;