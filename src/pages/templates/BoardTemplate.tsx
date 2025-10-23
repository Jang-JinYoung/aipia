import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../libs/network";
import Article from "../components/Article";
import Header from "../components/Header";

const BoardTemplate = () => {
    // 신문 기사ID 목록 조회
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
            <Header />
            <Article articleId={articleList[0]} />
        </div>
    );
};

export default BoardTemplate;
