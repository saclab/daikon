# Create a new HA through Screen

To begin a new HA, click on '+ New Hit Assessment' 


<img src="/daikon/img/UserGuide/HA/NewHA.png" />


<b>Note:
All chemical structures shown in this guide are publicly available and used solely for demonstration and instructional purposes within the user guide.  They do not represent proprietary or confidential compounds.</b>
<br />
<br />

<h4>1. Nomenclature</h4>
The Nomenclature form is the first step in creating a new Hit Assessment. It captures key identifiers and metadata for the project.
Fields include:

- Project Name - Give your project a clear and meaningful name that reflects its purpose or objective. A good name will make it easier to identify the project later.
- Description - Provide a brief explanation of the project's goal or scope.
- Primary Organization - Lead organization responsible for the project.
- Participating Organizations - Include any other organizations collaborating on the project.
- Status (e.g., Ready, Active, Inactive, Complete) - Definitions for each status are shown in the [Overview](ha-module-structure) tab for reference.

- Click Next to proceed to add more information.

<img src="/daikon/img/UserGuide/HA/HANomeclature.png" />

<h4>2. Compound</h4>
A HA is typically linked to a specific screen, most often through a primary compound and a related set of compounds from the screen’s hit list.
On this page, there are three ways to proceed:


- Start with a Screen: Select an existing screen to automatically retrieve its associated hit list and nominate a primary compound.
- Start with a Compound: Manually enter a specific compound (e.g., via SMILES or Compound ID) and associate it with the appropriate screen.
- Undisclosed Compound: Proceed without revealing the compound structure. This option is intended for assessments involving confidential or unregistered compounds.
  - ⚠️  Note: If the compound originates from a screen, it should first be added as an undisclosed entry in the Screen section before proceeding.


<img src="/daikon/img/UserGuide/HA/HACompoundForm.png" />

<h4>3. Association</h4>

<h5>3.1 Start with a Screen</h5>

To initiate a Hit Assessment using an existing screen, follow these steps:

- Click on the "Select a Screen" dropdown.
- Browse or search by screen name and select the appropriate screening campaign from the list.
- Click Next to proceed to the Hit Collection step.

<img src="/daikon/img/UserGuide/HA/HAStartScreen.png" />


- Select the relevant Hit Collection for the chosen screen from the dropdown menu.
- Click Next to proceed to select hits

<img src="/daikon/img/UserGuide/HA/HASelectHitCollection.png" />

- Choose the hits required for the HA project.
- You can multi-select hits (including both primary and related compounds).
- Click Next to proceed to select primary hit(s)

<img src="/daikon/img/UserGuide/HA/HASelectHits.png" />

- Nominate a Primary Hit to represent the group.
- Other selected compounds will be added as related hits in the Hit Assessment.

<img src="/daikon/img/UserGuide/HA/HASelectPrimaryHit.png" />

- Review the details of your project, and then click "Create Hit Assessment" to complete the setup.

Ensure the selected screen and hits accurately reflect the scope and intent of the HA.

<img src="/daikon/img/UserGuide/HA/HAReviewScreen.png" />

<h5>3.2 Start with a Compound</h5>

To begin a Hit Assessment by selecting a compound directly:

- Search for the compound in the MolecuLogix database.
- Use any of the following query types - SMILES, Substructure, Similarity, Exact Match or Name Search
- If the compound is registered in MolecuLogix, it will appear in the window below. Select the respective compound to continue.
- Select the appropriate Hit Collection (if any) to link the HA to the corresponding screen.
- Select all related hits for the HA project.
- Review all entered details, and click Create Hit Assessment to finalize.



- If the compound is not yet registered, please ensure it is registered in MolecuLogix before proceeding. You can view the registration process here.
- Once the compound is located, select it to populate the compound fields in the HA creation form.
