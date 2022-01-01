import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { container, gnb, logo } from "./layout.module.css";

function Layout({ pageTitle, children, className }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <nav className={gnb}>
                <Link to="/" className={logo}>
                    <StaticImage src="../images/logo.png" alt="ㅂㄹㄱ" />
                </Link>
            </nav>
            <main className={container + " " + className}>{children}</main>
        </>
    );
}

export default Layout;
