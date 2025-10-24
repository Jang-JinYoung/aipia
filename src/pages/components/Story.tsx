// 뉴스
/*
- 각 뉴스 항목은 **카드 형태**로 구성하고, 아래 정보를 포함해야 합니다:
    - 썸네일 이미지 (랜덤 이미지나 Placeholder API 사용 가능, 예: https://picsum.photos)
    - 제목 (`title`)
    - 작성자 (`by`)
    - 작성일 (`time`)
 */

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../libs/network";
import { getFormatDate } from "../../utils/timeUtil";

interface IProps {
    articleId: number;
}

const Story = ({ articleId }: IProps) => {
    const { data: article, isLoading: isArticleLoading } = useQuery({
        queryKey: ["article", articleId],
        queryFn: () =>
            axiosInstance
                .get(`/item/${articleId}.json`)
                .then((res) => res.data),
    });

    if (isArticleLoading) {
        return <div>스켈레톤</div>;
    }

    return (
        <div className="article-card">
            <div className="article-thumbnail" />
            <div className="article-content">
                <div className="article-title">{article.title}</div>
                <div className="article-meta">
                    {article.by}
                    <br />
                    {getFormatDate(article.time)}
                </div>
            </div>
        </div>
    );
};

export default Story;
