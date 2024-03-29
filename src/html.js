import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="google-site-verification"
                    content="Fz8BAsf6U11BJKbwiE6pg7s4xyp6tdDLSNA-RreiDgA"
                />
                <meta
                    name="naver-site-verification"
                    content="d5811eecb84a1904a51ec259689d8501d50de110"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
