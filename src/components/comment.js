import React, { useEffect, useRef, useState } from "react";

function Comment() {
    const commentsEl = useRef();
    const [status, setStatus] = useState("pending");

    useEffect(() => {
        const scriptEl = document.createElement("script");
        scriptEl.onload = () => setStatus("success");
        scriptEl.onerror = () => setStatus("failed");
        scriptEl.async = true;
        scriptEl.src = "https://utteranc.es/client.js";
        scriptEl.setAttribute("repo", "identity16/identity16.github.io");
        scriptEl.setAttribute("label", "comment");
        scriptEl.setAttribute("issue-term", "title");
        scriptEl.setAttribute("theme", "github-light");
        scriptEl.setAttribute("crossorigin", "anonymous");
        commentsEl.current.appendChild(scriptEl);
    }, []);

    return (
        <div className="comments-wrapper">
            {status === "failed" && <div>Error. Please try again.</div>}
            {status === "pending" && <div>Loading script...</div>}
            <div ref={commentsEl} />
        </div>
    );
}

export default Comment;
