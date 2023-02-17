---
sidebar_position: 2
---
# App

The app is organized into specific directories and namespaces that perform critical functions in the application. Here's a breakdown of each directory and its function:

### API
***src/app/api/agent.js***

'***api***': This directory is responsible for calling the backend and other external resources that the frontend uses to display and format data. For instance, it calls the 'EBI' API to display ligand monomers. This directory is essential for data processing and management within the application.

Supported types:
```
const requests = {
  get: (url) => axiosServerInstance.get(url).then(responseBody),
  post: (url, body) => axiosServerInstance.post(url, body).then(responseBody),
  put: (url, body) => axiosServerInstance.put(url, body).then(responseBody),
  del: (url) => axiosServerInstance.delete(url).then(responseBody),
};
```
API uses the **axios** library. Daikon wraps the library and does basic error handling.

An example of HIT API Calls
```
const Hit = {
  create: (newHit) => requests.post(`/hit/`, newHit),
  update: (hitId, updatedHit) => requests.post(`/hit/${hitId}`, updatedHit),
};
```

### Common

'***Common***': The 'Common' namespace hosts the common objects that are used throughout the app. These include the Horizon View, Section Heading component, Tags, KeyValLists, and other shared components. This namespace ensures consistency throughout the application, making it easier to manage and maintain in the long run.

### Layout
'***Layout***': This namespace defines the basic wireframing of the app. This is where headers, footers, title bars, menu bars, and the login component are created. This directory is critical to the overall layout and design of the application.

### Stores
'***Stores***': This directory houses the frontend data part and uses the **MobX library** for state management. It also caches data from the APIs, making it easier to access and manipulate data within the application.

MobX stores are an important part of the MobX library, which provides state management for JavaScript applications. In the Daikon app, stores are extensively used to manage the application's state, making it reactive and simpler to manage. Here's an example of how stores are used in the Daikon app:

For example, the app has '**GeneStore**,' which is responsible for managing the **state** of gene-related data in the application. This store has observable properties such as 'genes,' '**selectedGene**,' and '**isLoading**,' which hold the gene data, the currently selected gene, and a boolean value indicating if the data is currently loading, respectively. Any changes made to these properties are automatically propagated to all components that use them, ensuring that the state is always up-to-date. The app also has 'TargetStore,' which is responsible for managing the state of target-related data. This store has observable properties such as 'targets,' 'selectedTarget,' and 'isLoading,' which hold the target data, the currently selected target, and a boolean value indicating if the data is currently loading, respectively.

Similarly, the app has stores for each stage of the pipeline. These stores manage the state of the data and results for each stage of the pipeline, including the input data, the intermediate outputs, and the final results. By using stores, the application can seamlessly pass data from one stage of the pipeline to the next without losing any critical information.

A general pattern that is followed is to keep the fetched data in JS Map and query the lists before refetching the data
An example in target

```
/* Fetch Target list from API */
  fetchTargetList = async () => {
    this.displayLoading = true;
    if (this.targetRegistry.size !== 0) {
      this.displayLoading = false;
      return;
    }
    try {
      var resp = await agent.Target.list();
      runInAction(() => {
        resp.forEach((fetchedTarget) => {
          fetchedTarget = {
            ...fetchedTarget,
            targetGenesAccesionNumbers:
              _helper_associatedGenesAccessionNumbersToArray(fetchedTarget),
          };
          //
          //
          this.targetRegistry.set(fetchedTarget.id, fetchedTarget);
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.displayLoading = false;
      });
    }
  };
```

And while querying note the caching part:

```
 // first check cache
    let fetchedTarget = this.targetRegistryExpanded.get(id);

    if (fetchedTarget) {
      this.selectedTarget = fetchedTarget;
      this.displayLoading = false;
    }

```



