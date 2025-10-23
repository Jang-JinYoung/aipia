import { useState } from "react";

const Header = () => {
    const [activeTab, setActiveTab] = useState("top");
    return (
        <header className="header">
            <h1 className="header-title">AIPIA News</h1>

            <nav className="tab-menu">
                <div
                    className={`tab-item ${
                        activeTab === "top" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("top")}
                >
                    Top
                </div>
                <div
                    className={`tab-item ${
                        activeTab === "new" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("new")}
                >
                    New
                </div>
                <div
                    className={`tab-item ${
                        activeTab === "best" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("best")}
                >
                    Best
                </div>
            </nav>
        </header>
    );
};

export default Header;
