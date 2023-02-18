---
sidebar_position: 1
---
# Importing Any Genes

# From a JSON or CSV Source
To import genes into the app, you need to have admin privileges. Follow these steps to import genes:

<img src="/daikon/img/AdminGuide/AppImports/GeneImport.png" style={{ margin: "1em", filter: "brightness(100%) contrast(100%)"}} />

- Navigate to the **Admin Panel** in the app's sidebar.

- Select the "**App Imports**" tab from the menu.

- Click on the "**Genes**" option.

- Prepare a properly **formatted JSON** array file that contains the gene data you wish to import. You can use a text editor or a spreadsheet software to create the file.

- Upload the JSON file by clicking on the "Choose File" button and selecting the file from your computer.
  
- Click on the "**Upload to Server**" button to start the gene import process.

Once the import process is complete, you can view the imported genes in the app's gene section.

:::tip
Upload a JSON array to bulk upload genes to the app.
:::
:::tip
CSV files can be converted to JSON arrays using any online converters such as https://csvjson.com/csv2json
:::

## JSON Format Example
```
[
  {
  "accessionNumber": "Rv0262c",
  "geneName": "aac",
  "function": "Confers resistance to aminoglycosides (gentamicin, tobramycin, dibekacin, netilmicin, and 6'-N-ethylnetilmicin).",
  "product": "Aminoglycoside 2'-N-acetyltransferase Aac (Aac(2')-IC)",
  "functionalCategory": "virulence, detoxification, adaptation",
  "geneExternalIds": [
    {
      "geneAccessionNumber": "Rv0262c",
      "externalIdRef": "UniProt",
      "externalId": "P9WQG9"
    }
  ],
  "genePublicData": {
    "type": "CDS",
    "proteomics": null,
    "mutant": null,
    "comments": "Rv0262c, (MTCY06A4.06c), len: 181 aa. Aac, aminoglycoside 2'-N-acetyltransferase (aac(2')-IC) (see citation below), highly similar to NP_302635.1|NC_002677 aminoglycoside 2'-N-acetyltransferase from Mycobacterium leprae (182 aa); Q49157|AAC2_MYCFO|AAC aminoglycoside 2'-N-acetyltransferase from Mycobacterium fortuitum (195 aa), Contains GNAT (Gcn5-related N-acetyltransferase) domain. See Vetting et al. 2005. FASTA scores: opt: 884, E(): 0, (69.1% identity in 181 aa overlap); and P94968|AAC2_MYCSM|AAC aminoglycoside 2'-N-acetyltransferase from Mycobacterium smegmatis (210 aa) (see also citation below). Also similar to Q52424|AAC2_PROST aminoglycoside 2'-N-acetyltransferase from Providencia stuartii (178 aa). Belongs to the AAC(2')-I family of acetyltransferases. Note that previously known as aac(2')-IC..",
    "start": "314309",
    "end": "314854",
    "orientation": "-",
    "geneLength": "546",
    "location": "314309",
    "geneSequence": "GTGCACACCCAGGTACACACGGCCCGCCTGGTCCACACCGCCGATCTTGACAGCGAGACCCGCCAGGACATCCGTCAGATGGTCACCGGCGCGTTTGCCGGTGACTTCACCGAGACCGACTGGGAGCACACGCTGGGTGGGATGCACGCCCTGATCTGGCATCACGGGGCGATCATCGCGCATGCCGCGGTGATCCAGCGGCGACTGATCTACCGCGGCAACGCGCTGCGCTGCGGGTACGTCGAAGGCGTTGCGGTGCGGGCGGACTGGCGGGGCCAACGCCTGGTGAGCGCGCTGTTGGACGCCGTCGAGCAGGTGATGCGCGGCGCTTACCAGCTCGGAGCGCTCAGTTCCTCGGCGCGGGCCCGCAGACTGTACGCCTCACGCGGCTGGCTGCCCTGGCACGGCCCGACATCGGTACTGGCACCAACCGGTCCAGTCCGTACACCCGATGACGACGGAACGGTGTTCGTCCTGCCCATCGACATCAGCCTGGACACCTCGGCGGAGCTGATGTGCGATTGGCGCGCGGGCGACGTCTGGTAA",
    "molecularMass": null,
    "isoelectricPoint": null,
    "proteinLength": "181 AA",
    "proteinSequence": "VHTQVHTARLVHTADLDSETRQDIRQMVTGAFAGDFTETDWEHTLGGMHALIWHHGAIIAHAAVIQRRLIYRGNALRCGYVEGVAVRADWRGQRLVSALLDAVEQVMRGAYQLGALSSSARARRLYASRGWLPWHGPTSVLAPTGPVRTPDDDGTVFVLPIDISLDTSAELMCDWRAGDVW",
    "pfam": "P9WQG9",
    "m_Leprae": "ML2551",
    "m_Marinum": "MMAR_0522",
    "m_Smegmatis": "MSMEG_0434",
    "cryo": null,
    "xRay": null,
    "model": null,
    "ligand": null
  },
  "geneEssentiality": [],
  "geneProteinProduction": [],
  "geneProteinActivityAssay": [],
  "geneCRISPRiStrain": [],
  "geneResistanceMutation": [],
  "geneVulnerability": [],
  "geneHypomorphs": [],
  "geneUnpublishedStructures": []
  }
]
```


:::note
A module to automate this process is under way!.
:::