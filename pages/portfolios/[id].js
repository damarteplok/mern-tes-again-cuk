import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import axios from "axios";

const Portfolio = ({portfolio}) => {
    const router = useRouter();

    return (
        <BaseLayout>
            <BasePage>
                <h1>I am Portfolio Detail</h1>
                <h2>{portfolio.title}</h2>
                <p>Body: {portfolio.body}</p>
                <p>Id: {portfolio.id}</p>
            </BasePage>
        </BaseLayout>
    )
}

Portfolio.getInitialProps = async ({query}) => {
    let post = {}

    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
    } catch (e) {
        console.error(e)
    }

    return {portfolio : post}
}

export default Portfolio
