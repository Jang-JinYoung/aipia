import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getBestStories, getNewStories, getTopStories } from "../../libs/api";
import { getToLowerCase } from "../../utils/stringUtil";
import Story from "../components/Story";


const BoardTemplate = () => {
    const [activeTab, setActiveTab] = useState("top");

    // 신문 기사ID 목록 조회
    const { data, isLoading } = useQuery({
        queryKey: ["article", "list", activeTab],
        queryFn: () => getQueryFn(),
    });

    // 탭에 따른 쿼리호출
    const getQueryFn = () => {
        if (activeTab === "top") {
            return getTopStories();
        } else if (activeTab === "new") {
            return getNewStories();
        } else if (activeTab === "best") {
            return getBestStories();
        }
    };


    return (
        <div>
            <header className="header">
                <h1 className="header-title">AIPIA News</h1>
                <nav className="tab-menu">
                    {["Top", "New", "Best"].map((tab) => (
                        <div
                            key={tab}
                            className={`tab-item ${
                                activeTab === getToLowerCase(tab)
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setActiveTab(getToLowerCase(tab))}
                        >
                            {tab}
                        </div>
                    ))}
                </nav>
            </header>
            {isLoading ? (
                <div>isLoading..</div>
            ) : data ? (
                <div className="article-list">
                    {/* {articleList.map((articleId: number) => (
                <Article articleId={articleId} />
            ))} */}
                    <Story articleId={data[0]} />
                    <Story articleId={data[1]} />
                </div>
            ) : (
                <div>No Data</div>
            )}
        </div>
    );
};

export default BoardTemplate;
