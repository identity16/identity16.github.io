import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
    return (
        <div>
            <Link to={"/blog"}>Go to Blog</Link>
        </div>
    );
};

export default IndexPage;
