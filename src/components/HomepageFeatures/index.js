import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Glue Molecular DBs & PMTs.",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        View the schematic activities involved in the TB drug discovery process.
      </>
    ),
  },
  {
    title: "Retain knowledge as compounds evolve.",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Learn about the databases & APIs used in DAIKON.</>,
  },
  {
    title: "Actively developed.*",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Know more about the ongoing developments and future plans to incorporate more discovery
        pipelines.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md"
      // style={{
      //   background: "rgba(255,255,255, 0.4)",
      //   minHeight: "140px",
      //   borderRadius: "4px",
      //   paddingTop: "25px"

      // }}
      >
        <h3>{title}</h3>
        <p> {description}</p>
      </div>
    </div >
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={"container"}>
        <div
        // className={styles.boxEnclose}

        >
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
