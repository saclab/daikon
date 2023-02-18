---
sidebar_position: 2
---
# Importing H37Rv Genes
While we are simplifying importing of Gene data to the app,for H37Rv Genes this is already built.

If you need to import H37Rv genes to the app, you can use a pre-built feature that simplifies the process. You just need to make a GET request to the following API endpoint:

```
[GET] /api/batch/gene/sync
```

This API call will fetch the latest dataset for H37Rv genes from [Mycobrowser](https://mycobrowser.epfl.ch/) and load it into the app. 

Please note that the loading process may take up to an hour to complete, depending on the allocated resources to the Daikon server.


:::caution
This module will be deprecated in favour of a generic gene importer connected to UniProt.
:::