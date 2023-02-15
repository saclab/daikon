import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomePageScope from "@site/src/components/HomepageFeatures/HomePageScope";
import styles from "./index.module.css";
import { Box } from "grommet";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          
          <h1
            className="hero__title"
            style={{ letterSpacing: "0.2em", textTransform: "capitalize" }}
          >
            {/* {siteConfig.title} */}DAIKON
          </h1>
          <p className="hero__subtitle">
            <b>Open source</b> foundational framework <i>integrating</i>{" "}
            <b>target-based</b> drug discovery workflows.
          </p>
          <img
            src="/daikon/img/Components/horizion-view.gif"
            style={{
              width: "700px",
              height: "300px",
              objectFit: "cover",
              margin: "1em",
              filter: "brightness(110%) contrast(100%)"
            }}
          />
          <p>
            
            <b>
              Deploy on-premise or on cloud and bring in your Organization's
              users quickly with Active Directory Connect. DAIKON is a framework
              developed for pharma–academic consortium-based drug discovery
              efforts to share ideas, technologies, compounds, assays, projects
              and portfolios.
            </b>
          </p>
          
          <Box
            direction="row"
            pad="medium"
            align="center"
            alignContent="center"
            alignSelf="center"
            gap="medium"
            justify="center"
          >
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--md"
                to="/docs/category/deployment-manual"
              >
                Deployment Manual
              </Link>
            </div>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--md"
                to="/docs/category/user-guide"
              >
                User Guide
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--md"
                to="/docs/category/admin-guide"
              >
                Admin Guide
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--md"
                to="/docs/intro"
              >
                Developers Manual
              </Link>
            </div>
          </Box>
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Home`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <HomePageScope />
        </main>
      </Layout>
    </div>
  );
}
