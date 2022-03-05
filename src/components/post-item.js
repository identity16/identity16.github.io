import React, { useEffect, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
    postItem,
    featuredImage,
    infoContainer,
    category,
    title,
    description,
    date,
} from "./post-item.module.css";
import { emojiToImage, findEmoji } from "../utils/emoji";

function PostItem({ node }) {
    const [titleEmoji, setTitleEmoji] = useState(null);

    useEffect(() => {
        const emojiArr = findEmoji(node.frontmatter.title);

        if (emojiArr !== null) {
            setTitleEmoji(emojiArr[0]);
        }
    }, [node]);

    return (
        <article className={postItem}>
            <Link
                to={`/blog/${node.slug}`}
                style={
                    titleEmoji !== null
                        ? {
                              cursor: `url("${emojiToImage(
                                  titleEmoji
                              )}") 16 0, auto`,
                          }
                        : {}
                }
            >
                {node.frontmatter.featuredImage && (
                    <GatsbyImage
                        className={featuredImage}
                        image={
                            node.frontmatter.featuredImage.childImageSharp
                                .gatsbyImageData
                        }
                        alt="Featured Image"
                    />
                )}
                <div className={infoContainer}>
                    {node.frontmatter.category && (
                        <span to="/" className={category}>
                            {node.frontmatter.category}
                        </span>
                    )}
                    <h2 className={title}>{node.frontmatter.title}</h2>
                    {node.frontmatter.description && (
                        <p className={description}>
                            {node.frontmatter.description}
                        </p>
                    )}
                    <p className={date}>{node.frontmatter.date}</p>
                </div>
            </Link>
        </article>
    );
}

export default PostItem;
