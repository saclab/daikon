import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Box } from "grommet";

const HomePageScope = () => {
  return (
    <div
      className="container"
      style={{
        paddingTop: "5em",
        paddingBottom: "5em",
        // background: "rgba(255,255,255, 0.4)",
        borderRadius: "10px",
      }}
    >
      <Box
        direction="column"
        border={{ color: "#332288", size: "large" }}
        pad="medium"
      >
        <h1 className="hero__title">
          Positioned right at the early drug discovery research phase.
        </h1>
        <div
          style={{
            margin: "40px",
            background: "rgba(255,255,255, 0.4)",
            padding: "1em",
            borderRadius: "20px",
          }}
        >
          <img src="/daikon/img/Landing/Scope.png" />
        </div>
        <div style={{ padding: "2em" }}>
          <div className="row">
            <div className="text--left">
              DAIKON is a comprehensive drug discovery management tool designed
              to support the drug discovery process from target identification
              to pre-clinical development. The tool is intended to be used by
              pharmaceutical and biotech companies, academic researchers, and
              other organizations involved in drug discovery.
              <ul>
                <li>
                  Data capture and organization: DAIKON provides a centralized
                  platform to capture and organize data related to drug
                  discovery, including experimental data. The tool allows users
                  to store, search, and retrieve data in a structured and
                  organized way.
                </li>
                <li>
                  Project management: DAIKON includes project management
                  features to help teams track project progress, manage tasks,
                  and collaborate effectively. The tool enables users to set
                  milestones, assign tasks, and monitor progress, ensuring that
                  the project stays on track.
                </li>
                <li>
                  Collaboration: DAIKON supports collaboration among team
                  members by providing a platform for communication and
                  knowledge sharing. The tool enables users to share data,
                  exchange feedback, and communicate with team members in
                  real-time.
                </li>
                <li>
                  Data analysis: DAIKON includes data analysis features to help
                  users make informed decisions about drug development. The tool
                  provides visualization and analysis tools to help users
                  identify trends and patterns in the data.
                </li>
              </ul>
              DAIKON is a comprehensive drug discovery management tool designed
              to support the drug discovery process. The tool includes data
              capture and organization, project management, collaboration, and
              data analysis to help teams streamline their workflows, improve
              communication, and accelerate drug development.
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default HomePageScope;
