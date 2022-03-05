import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";

const MyImage = (props) => (
    <figure style={{ margin: "2.5em auto" }}>
        <GatsbyImage
            style={{
                display: "block",
                width: "fit-content",
                margin: "0 auto",
                borderRadius: 8,
                boxShadow: "0 0 0.3em 0.1em rgb(0 0 0 / 10%)",
                isolation: "isolate",
            }}
            {...props}
        />
        <figcaption
            style={{
                textAlign: "center",
                margin: "1.5em auto",
                color: "#999",
                fontSize: "0.9em",
                fontWeight: "bold",
            }}
        >
            {props.alt}
        </figcaption>
    </figure>
);

const components = {
    GatsbyImage: MyImage,
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
);
