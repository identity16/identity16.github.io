import { navigate } from "gatsby";
import { useEffect } from "react";

// markup
const IndexPage = () => {
    useEffect(() => {
        navigate("/blog/");
    }, []);
    return null;
};

export default IndexPage;
