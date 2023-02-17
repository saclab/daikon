import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Glue Molecular DBs & PMTs.",
    imageLoc: "img/glue.png",
    description: (
      <>
        Streamline your drug discovery process by bridging gaps between
        molecular databases and project management tools.
      </>
    ),
  },
  {
    title: "Retain knowledge as compounds evolve.",
    imageLoc: "img/knowledge.png",
    description: (
      <>
        Don't lose valuable insights as your compounds evolve - retain your
        knowledge every step of the way..
      </>
    ),
  },
  {
    title: "Actively developed.*",
    imageLoc: "img/active.png",
    description: (
      <>
        Our project is constantly evolving with new features and updates to
        provide the best user experience possible.
      </>
    ),
  },
];

function Feature({ imageLoc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imageLoc} role="img" width="200" />
      </div>
      <div
        className="text--center padding-horiz--md"
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
    </div>
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
