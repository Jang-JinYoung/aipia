import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../libs/network";
import Article from "../components/Article";

const BoardTemplate = () => {
    const { data: articleList, isLoading: isArticleListLoading } = useQuery({
        queryKey: ["article", "list"],
        queryFn: () =>
            axiosInstance.get("/topstories.json").then((res) => res.data),
    });

    if (isArticleListLoading) {
        return <div>loading..</div>;
    }

    return (
        <div>
            {/* {articleList.map((articleId: number) => (
                <Article articleId={articleId} />
            ))} */}
            <Article articleId={articleList[0]} />
        </div>
    );
};

export default BoardTemplate;
