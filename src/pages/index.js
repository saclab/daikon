import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomePageScope from "@site/src/components/HomepageFeatures/HomePageScope";
import styles from "./index.module.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            <b>Open source</b> foundational framework <i>integrating</i> <b>target-based</b> drug discovery workflows.
          </p>

          <p>
            Deploy on-premise or on cloud and bring in your Organization's users
            quickly with Active Directory Connect.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--md"
              to="/docs/intro"
            >
              Developers Guide
            </Link>
          </div>
        </div>
      </header>
    </div>

  );
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div >
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
