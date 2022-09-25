---
title: API v1 (Expanded)
language/tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc/footers: []
includes: []
search: true
highlight/theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="my-api">My API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. JWT Authorization header using the Bearer scheme. \r\n\r\n 
                  Enter 'Bearer' [space] and then your token in the text input below.
                  \r\n\r\nExample: 'Bearer 12345abcdef'

<h1 id="my-api-account">Account</h1>

## GET /api/Account

`GET /api/Account`

> Example responses

> 200 Response

```
{"id":"string","displayName":"string","email":"string","roles":["string"],"bio":"string","org":{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","alias":"string","address":"string"},"lock":true,"archived":"2019-08-24T14:15:22Z"}
```

```json
{
  "id": "string",
  "displayName": "string",
  "email": "string",
  "roles": [
    "string"
  ],
  "bio": "string",
  "org": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "lock": true,
  "archived": "2019-08-24T14:15:22Z"
}
```

<h3 id="get /api/account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UserDto](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-accounts">Accounts</h1>

## GET /api/elevated/Accounts/roles

`GET /api/elevated/Accounts/roles`

> Example responses

> 200 Response

```
[{"id":"string","name":"string","normalizedName":"string","concurrencyStamp":"string","description":"string"}]
```

```json
[
  {
    "id": "string",
    "name": "string",
    "normalizedName": "string",
    "concurrencyStamp": "string",
    "description": "string"
  }
]
```

<h3 id="get /api/elevated/accounts/roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="get /api/elevated/accounts/roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppRole](#schemaapprole)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Accounts/roles

`POST /api/elevated/Accounts/roles`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "normalizedName": "string",
  "concurrencyStamp": "string",
  "description": "string"
}
```

<h3 id="post /api/elevated/accounts/roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppRole](#schemaapprole)|false|none|

<h3 id="post /api/elevated/accounts/roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Accounts/orgs

`GET /api/elevated/Accounts/orgs`

> Example responses

> 200 Response

```
[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","alias":"string","address":"string"}]
```

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  }
]
```

<h3 id="get /api/elevated/accounts/orgs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="get /api/elevated/accounts/orgs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppOrg](#schemaapporg)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Accounts/orgs

`POST /api/elevated/Accounts/orgs`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "alias": "string",
  "address": "string"
}
```

<h3 id="post /api/elevated/accounts/orgs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppOrg](#schemaapporg)|false|none|

<h3 id="post /api/elevated/accounts/orgs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Accounts/orgs/{id}

`POST /api/elevated/Accounts/orgs/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "alias": "string",
  "address": "string"
}
```

<h3 id="post /api/elevated/accounts/orgs/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[AppOrg](#schemaapporg)|false|none|

<h3 id="post /api/elevated/accounts/orgs/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Accounts

`GET /api/elevated/Accounts`

<h3 id="get /api/elevated/accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Accounts

`POST /api/elevated/Accounts`

> Body parameter

```json
{
  "email": "user@example.com",
  "displayName": "string",
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "bio": "string",
  "roles": [
    "string"
  ],
  "lock": true
}
```

<h3 id="post /api/elevated/accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterDto](#schemaregisterdto)|false|none|

<h3 id="post /api/elevated/accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Accounts/{email}

`GET /api/elevated/Accounts/{email}`

<h3 id="get /api/elevated/accounts/{email}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|none|

> Example responses

> 200 Response

```
{"email":"user@example.com","displayName":"string","orgId":"25b2c2d5-a7fc-47d0-89e4-8709a1560bfa","bio":"string","roles":["string"],"lock":true}
```

```json
{
  "email": "user@example.com",
  "displayName": "string",
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "bio": "string",
  "roles": [
    "string"
  ],
  "lock": true
}
```

<h3 id="get /api/elevated/accounts/{email}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[RegisterDto](#schemaregisterdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Accounts/{email}

`POST /api/elevated/Accounts/{email}`

> Body parameter

```json
{
  "email": "user@example.com",
  "displayName": "string",
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "bio": "string",
  "roles": [
    "string"
  ],
  "lock": true
}
```

<h3 id="post /api/elevated/accounts/{email}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|none|
|body|body|[RegisterDto](#schemaregisterdto)|false|none|

<h3 id="post /api/elevated/accounts/{email}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-buggy">Buggy</h1>

## GET /api/Buggy/not-found

`GET /api/Buggy/not-found`

<h3 id="get /api/buggy/not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Buggy/bad-request

`GET /api/Buggy/bad-request`

<h3 id="get /api/buggy/bad-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Buggy/server-error

`GET /api/Buggy/server-error`

<h3 id="get /api/buggy/server-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Buggy/unauthorised

`GET /api/Buggy/unauthorised`

<h3 id="get /api/buggy/unauthorised-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-discussion">Discussion</h1>

## GET /api/Discussion/{reference}

`GET /api/Discussion/{reference}`

<h3 id="get /api/discussion/{reference}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reference|path|string|true|none|

<h3 id="get /api/discussion/{reference}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Discussion

`POST /api/Discussion`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reference": "string",
  "section": "string",
  "topic": "string",
  "description": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "replies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
      "body": "string",
      "postedBy": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "mentions": [
        "string"
      ],
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="post /api/discussion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Discussion](#schemadiscussion)|false|none|

<h3 id="post /api/discussion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Discussion/{id}

`POST /api/Discussion/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reference": "string",
  "section": "string",
  "topic": "string",
  "description": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "replies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
      "body": "string",
      "postedBy": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "mentions": [
        "string"
      ],
      "tags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="post /api/discussion/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[Discussion](#schemadiscussion)|false|none|

<h3 id="post /api/discussion/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DELETE /api/Discussion/{id}

`DELETE /api/Discussion/{id}`

<h3 id="delete /api/discussion/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="delete /api/discussion/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Discussion/{discussionId}/reply

`POST /api/Discussion/{discussionId}/reply`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
  "body": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ]
}
```

<h3 id="post /api/discussion/{discussionid}/reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discussionId|path|string(uuid)|true|none|
|body|body|[Reply](#schemareply)|false|none|

<h3 id="post /api/discussion/{discussionid}/reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Discussion/{discussionId}/reply/{id}

`POST /api/Discussion/{discussionId}/reply/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
  "body": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ]
}
```

<h3 id="post /api/discussion/{discussionid}/reply/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discussionId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[Reply](#schemareply)|false|none|

<h3 id="post /api/discussion/{discussionid}/reply/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DELETE /api/Discussion/{discussionId}/reply/{id}

`DELETE /api/Discussion/{discussionId}/reply/{id}`

<h3 id="delete /api/discussion/{discussionid}/reply/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|discussionId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|

<h3 id="delete /api/discussion/{discussionid}/reply/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-gene">Gene</h1>

## GET /api/Gene

`GET /api/Gene`

<h3 id="get /api/gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene

`POST /api/Gene`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "accessionNumber": "string",
  "geneName": "string",
  "function": "string",
  "product": "string",
  "functionalCategory": "string",
  "geneExternalIds": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "externalIdRef": "string",
      "externalId": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "genePublicData": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
    "geneAccessionNumber": "string",
    "type": "string",
    "proteomics": "string",
    "mutant": "string",
    "comments": "string",
    "start": "string",
    "end": "string",
    "orientation": "string",
    "geneLength": "string",
    "location": "string",
    "geneSequence": "string",
    "molecularMass": "string",
    "isoelectricPoint": "string",
    "proteinLength": "string",
    "proteinSequence": "string",
    "pfam": "string",
    "m/Leprae": "string",
    "m/Marinum": "string",
    "m/Smegmatis": "string",
    "cryo": "string",
    "xRay": "string",
    "model": "string",
    "ligand": "string"
  },
  "geneEssentiality": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "classification": "string",
      "condition": "string",
      "strain": "string",
      "method": "string",
      "reference": "string",
      "notes": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneProteinProduction": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "production": "string",
      "method": "string",
      "purity": "string",
      "date": "2019-08-24T14:15:22Z",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneProteinActivityAssay": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "activity": "string",
      "type": "string",
      "throughput": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneCRISPRiStrain": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "crispRiStrain": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneResistanceMutation": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "mutation": "string",
      "isolate": "string",
      "parentStrain": "string",
      "compound": "string",
      "shiftInMIC": "string",
      "org": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneVulnerability": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "rank": "string",
      "uVi": "string",
      "iVi": "string",
      "viRatio": "string",
      "vulnerabilityCondition": "string",
      "operon": "string",
      "confounded": "string",
      "shell2015Operon": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneHypomorphs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "knockdownStrain": "string",
      "phenotype": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneUnpublishedStructures": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "organization": "string",
      "method": "string",
      "resolution": "string",
      "ligands": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ]
}
```

<h3 id="post /api/gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Gene](#schemagene)|false|none|

<h3 id="post /api/gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Gene/{id}

`GET /api/Gene/{id}`

<h3 id="get /api/gene/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/gene/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{id}

`POST /api/Gene/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "accessionNumber": "string",
  "geneName": "string",
  "function": "string",
  "product": "string",
  "functionalCategory": "string",
  "genePublicData": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
    "geneAccessionNumber": "string",
    "type": "string",
    "proteomics": "string",
    "mutant": "string",
    "comments": "string",
    "start": "string",
    "end": "string",
    "orientation": "string",
    "geneLength": "string",
    "location": "string",
    "geneSequence": "string",
    "molecularMass": "string",
    "isoelectricPoint": "string",
    "proteinLength": "string",
    "proteinSequence": "string",
    "pfam": "string",
    "m/Leprae": "string",
    "m/Marinum": "string",
    "m/Smegmatis": "string",
    "cryo": "string",
    "xRay": "string",
    "model": "string",
    "ligand": "string"
  }
}
```

<h3 id="post /api/gene/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[GenePublicEditDTO](#schemagenepubliceditdto)|false|none|

<h3 id="post /api/gene/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DELETE /api/Gene/{id}

`DELETE /api/Gene/{id}`

<h3 id="delete /api/gene/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="delete /api/gene/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Gene/by-accession/{accessionNo}

`GET /api/Gene/by-accession/{accessionNo}`

<h3 id="get /api/gene/by-accession/{accessionno}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessionNo|path|string|true|none|

<h3 id="get /api/gene/by-accession/{accessionno}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Gene/{id}/history

`GET /api/Gene/{id}/history`

<h3 id="get /api/gene/{id}/history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/gene/{id}/history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/promotionrequest/{targetName}

`POST /api/Gene/promotionrequest/{targetName}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ]
}
```

<h3 id="post /api/gene/promotionrequest/{targetname}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetName|path|string|true|none|
|body|body|[GenePromotionRequest](#schemagenepromotionrequest)|false|none|

<h3 id="post /api/gene/promotionrequest/{targetname}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Gene/{id}/promotionrequest

`GET /api/Gene/{id}/promotionrequest`

<h3 id="get /api/gene/{id}/promotionrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetName|query|string|false|none|
|id|path|string|true|none|

<h3 id="get /api/gene/{id}/promotionrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Gene/{targetName}/validateNewTargetName

`GET /api/Gene/{targetName}/validateNewTargetName`

<h3 id="get /api/gene/{targetname}/validatenewtargetname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetName|path|string|true|none|

<h3 id="get /api/gene/{targetname}/validatenewtargetname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/essentiality

`POST /api/Gene/{geneId}/essentiality`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "classification": "string",
  "condition": "string",
  "strain": "string",
  "method": "string",
  "reference": "string",
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/essentiality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneEssentiality](#schemageneessentiality)|false|none|

<h3 id="post /api/gene/{geneid}/essentiality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/essentiality/{id}

`POST /api/Gene/{geneId}/essentiality/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "classification": "string",
  "condition": "string",
  "strain": "string",
  "method": "string",
  "reference": "string",
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/essentiality/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneEssentiality](#schemageneessentiality)|false|none|

<h3 id="post /api/gene/{geneid}/essentiality/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/proteinproduction

`POST /api/Gene/{geneId}/proteinproduction`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "production": "string",
  "method": "string",
  "purity": "string",
  "date": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/proteinproduction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneProteinProduction](#schemageneproteinproduction)|false|none|

<h3 id="post /api/gene/{geneid}/proteinproduction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/proteinproduction/{id}

`POST /api/Gene/{geneId}/proteinproduction/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "production": "string",
  "method": "string",
  "purity": "string",
  "date": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/proteinproduction/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneProteinProduction](#schemageneproteinproduction)|false|none|

<h3 id="post /api/gene/{geneid}/proteinproduction/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/proteinactivityassay

`POST /api/Gene/{geneId}/proteinactivityassay`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "activity": "string",
  "type": "string",
  "throughput": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/proteinactivityassay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneProteinActivityAssay](#schemageneproteinactivityassay)|false|none|

<h3 id="post /api/gene/{geneid}/proteinactivityassay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/proteinactivityassay/{id}

`POST /api/Gene/{geneId}/proteinactivityassay/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "activity": "string",
  "type": "string",
  "throughput": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/proteinactivityassay/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneProteinActivityAssay](#schemageneproteinactivityassay)|false|none|

<h3 id="post /api/gene/{geneid}/proteinactivityassay/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/crispristrain

`POST /api/Gene/{geneId}/crispristrain`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "crispRiStrain": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/crispristrain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneCRISPRiStrain](#schemagenecrispristrain)|false|none|

<h3 id="post /api/gene/{geneid}/crispristrain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/crispristrain/{id}

`POST /api/Gene/{geneId}/crispristrain/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "crispRiStrain": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/crispristrain/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneCRISPRiStrain](#schemagenecrispristrain)|false|none|

<h3 id="post /api/gene/{geneid}/crispristrain/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/resistancemutation

`POST /api/Gene/{geneId}/resistancemutation`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "mutation": "string",
  "isolate": "string",
  "parentStrain": "string",
  "compound": "string",
  "shiftInMIC": "string",
  "org": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/resistancemutation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneResistanceMutation](#schemageneresistancemutation)|false|none|

<h3 id="post /api/gene/{geneid}/resistancemutation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/resistancemutation/{id}

`POST /api/Gene/{geneId}/resistancemutation/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "mutation": "string",
  "isolate": "string",
  "parentStrain": "string",
  "compound": "string",
  "shiftInMIC": "string",
  "org": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/resistancemutation/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneResistanceMutation](#schemageneresistancemutation)|false|none|

<h3 id="post /api/gene/{geneid}/resistancemutation/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/unpublishedstructures

`POST /api/Gene/{geneId}/unpublishedstructures`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "organization": "string",
  "method": "string",
  "resolution": "string",
  "ligands": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/unpublishedstructures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneUnpublishedStructures](#schemageneunpublishedstructures)|false|none|

<h3 id="post /api/gene/{geneid}/unpublishedstructures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/unpublishedstructures/{id}

`POST /api/Gene/{geneId}/unpublishedstructures/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "organization": "string",
  "method": "string",
  "resolution": "string",
  "ligands": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/unpublishedstructures/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneUnpublishedStructures](#schemageneunpublishedstructures)|false|none|

<h3 id="post /api/gene/{geneid}/unpublishedstructures/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/vulnerability

`POST /api/Gene/{geneId}/vulnerability`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "rank": "string",
  "uVi": "string",
  "iVi": "string",
  "viRatio": "string",
  "vulnerabilityCondition": "string",
  "operon": "string",
  "confounded": "string",
  "shell2015Operon": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/vulnerability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneVulnerability](#schemagenevulnerability)|false|none|

<h3 id="post /api/gene/{geneid}/vulnerability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/vulnerability/{id}

`POST /api/Gene/{geneId}/vulnerability/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "rank": "string",
  "uVi": "string",
  "iVi": "string",
  "viRatio": "string",
  "vulnerabilityCondition": "string",
  "operon": "string",
  "confounded": "string",
  "shell2015Operon": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/vulnerability/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneVulnerability](#schemagenevulnerability)|false|none|

<h3 id="post /api/gene/{geneid}/vulnerability/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/hypomorph

`POST /api/Gene/{geneId}/hypomorph`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "knockdownStrain": "string",
  "phenotype": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/hypomorph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|body|body|[GeneHypomorph](#schemagenehypomorph)|false|none|

<h3 id="post /api/gene/{geneid}/hypomorph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Gene/{geneId}/hypomorph/{id}

`POST /api/Gene/{geneId}/hypomorph/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "knockdownStrain": "string",
  "phenotype": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/gene/{geneid}/hypomorph/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|
|id|path|string(uuid)|true|none|
|body|body|[GeneHypomorph](#schemagenehypomorph)|false|none|

<h3 id="post /api/gene/{geneid}/hypomorph/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Gene/promotionrequests

`GET /api/elevated/Gene/promotionrequests`

<h3 id="get /api/elevated/gene/promotionrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Gene/groups

`GET /api/elevated/Gene/groups`

<h3 id="get /api/elevated/gene/groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Gene/groups

`POST /api/elevated/Gene/groups`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "name": "string",
  "type": "string",
  "genes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneGroupId": "ee44a9df-bc3d-455e-9532-c0c75cc025f5",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "accessionNumber": "string",
      "gene": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "accessionNumber": "string",
        "geneName": "string",
        "function": "string",
        "product": "string",
        "functionalCategory": "string",
        "geneExternalIds": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "externalIdRef": "string",
            "externalId": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "genePublicData": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
          "geneAccessionNumber": "string",
          "type": "string",
          "proteomics": "string",
          "mutant": "string",
          "comments": "string",
          "start": "string",
          "end": "string",
          "orientation": "string",
          "geneLength": "string",
          "location": "string",
          "geneSequence": "string",
          "molecularMass": "string",
          "isoelectricPoint": "string",
          "proteinLength": "string",
          "proteinSequence": "string",
          "pfam": "string",
          "m/Leprae": "string",
          "m/Marinum": "string",
          "m/Smegmatis": "string",
          "cryo": "string",
          "xRay": "string",
          "model": "string",
          "ligand": "string"
        },
        "geneEssentiality": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "classification": "string",
            "condition": "string",
            "strain": "string",
            "method": "string",
            "reference": "string",
            "notes": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinProduction": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "production": "string",
            "method": "string",
            "purity": "string",
            "date": "2019-08-24T14:15:22Z",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinActivityAssay": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "activity": "string",
            "type": "string",
            "throughput": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneCRISPRiStrain": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "crispRiStrain": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneResistanceMutation": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "mutation": "string",
            "isolate": "string",
            "parentStrain": "string",
            "compound": "string",
            "shiftInMIC": "string",
            "org": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneVulnerability": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "rank": "string",
            "uVi": "string",
            "iVi": "string",
            "viRatio": "string",
            "vulnerabilityCondition": "string",
            "operon": "string",
            "confounded": "string",
            "shell2015Operon": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneHypomorphs": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "knockdownStrain": "string",
            "phenotype": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneUnpublishedStructures": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "organization": "string",
            "method": "string",
            "resolution": "string",
            "ligands": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ]
      },
      "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
    }
  ]
}
```

<h3 id="post /api/elevated/gene/groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GeneGroup](#schemagenegroup)|false|none|

<h3 id="post /api/elevated/gene/groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/elevated/Gene/groups/{groupId}

`GET /api/elevated/Gene/groups/{groupId}`

<h3 id="get /api/elevated/gene/groups/{groupid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string(uuid)|true|none|

<h3 id="get /api/elevated/gene/groups/{groupid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Gene/{accessionNo}/externalId

`POST /api/elevated/Gene/{accessionNo}/externalId`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "externalIdRef": "string",
  "externalId": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/elevated/gene/{accessionno}/externalid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessionNo|path|string|true|none|
|body|body|[GeneExternalId](#schemageneexternalid)|false|none|

<h3 id="post /api/elevated/gene/{accessionno}/externalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-geneconfig">GeneConfig</h1>

## GET /api/GeneConfig/promote/questionaire

`GET /api/GeneConfig/promote/questionaire`

<h3 id="get /api/geneconfig/promote/questionaire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/GeneConfig/groups/search-by-gene-id/{geneId}

`GET /api/GeneConfig/groups/search-by-gene-id/{geneId}`

<h3 id="get /api/geneconfig/groups/search-by-gene-id/{geneid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|geneId|path|string(uuid)|true|none|

<h3 id="get /api/geneconfig/groups/search-by-gene-id/{geneid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-general">General</h1>

## GET /api/General/app-vars

`GET /api/General/app-vars`

<h3 id="get /api/general/app-vars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-hit">Hit</h1>

## POST /api/Hit

`POST /api/Hit`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "externalCompoundIds": "string",
  "targetName": "string",
  "library": "string",
  "source": "string",
  "method": "string",
  "mic": 0,
  "micCondition": "string",
  "iC50": 0,
  "clusterGroup": "string",
  "smile": "string",
  "molWeight": "string",
  "molArea": "string"
}
```

<h3 id="post /api/hit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HitCSVDTO](#schemahitcsvdto)|false|none|

<h3 id="post /api/hit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-horizon">Horizon</h1>

## GET /api/Horizon/{entryPointName}

`GET /api/Horizon/{entryPointName}`

<h3 id="get /api/horizon/{entrypointname}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entryPointName|path|string|true|none|

<h3 id="get /api/horizon/{entrypointname}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Horizon/by-accession/{accessionNumber}

`GET /api/Horizon/by-accession/{accessionNumber}`

<h3 id="get /api/horizon/by-accession/{accessionnumber}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessionNumber|path|string|true|none|

<h3 id="get /api/horizon/by-accession/{accessionnumber}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-project">Project</h1>

## GET /api/Project

`GET /api/Project`

<h3 id="get /api/project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Project/{id}

`GET /api/Project/{id}`

<h3 id="get /api/project/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/project/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Project/{id}

`POST /api/Project/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teamPriority": "string",
  "teamPriorityDescription": "string",
  "teamProbability": "string",
  "teamProbabilityDescription": "string"
}
```

<h3 id="post /api/project/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[ProjectPriorityProbabilityDTO](#schemaprojectpriorityprobabilitydto)|false|none|

<h3 id="post /api/project/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Project/{projectId}/compoundevolution

`GET /api/Project/{projectId}/compoundevolution`

<h3 id="get /api/project/{projectid}/compoundevolution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|none|

<h3 id="get /api/project/{projectid}/compoundevolution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project

`POST /api/elevated/Project`

> Body parameter

```json
{
  "projectName": "string",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "baseHits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "library": "string",
      "source": "string",
      "method": "string",
      "mic": 0,
      "micCondition": "string",
      "iC50": 0,
      "clusterGroup": 0,
      "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
      "compound": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "externalCompoundIds": "string",
        "smile": "string",
        "molWeight": "string",
        "molArea": "string",
        "createdAt": "2019-08-24T14:15:22Z"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "vote": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
        "positive": 0,
        "neutral": 0,
        "negative": 0,
        "isVotingAllowed": true,
        "lastModified": "2019-08-24T14:15:22Z",
        "voters": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
            "voterEmail": "string",
            "votedPositive": true,
            "votedNeutral": true,
            "votedNegative": true,
            "votedOn": "2019-08-24T14:15:22Z",
            "comment": "string"
          }
        ],
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    }
  ],
  "representationStructure": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "externalCompoundIds": "string",
    "smile": "string",
    "molWeight": "string",
    "molArea": "string",
    "createdAt": "2019-08-24T14:15:22Z"
  },
  "primaryOrg": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "supportingOrgs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "alias": "string",
      "address": "string"
    }
  ],
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string"
}
```

<h3 id="post /api/elevated/project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectCreateDTO](#schemaprojectcreatedto)|false|none|

<h3 id="post /api/elevated/project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/unlinked

`POST /api/elevated/Project/unlinked`

> Body parameter

```json
{
  "projectName": "string",
  "representationStructure": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "externalCompoundIds": "string",
    "smile": "string",
    "molWeight": "string",
    "molArea": "string",
    "createdAt": "2019-08-24T14:15:22Z"
  },
  "representationStructureSMILE": "string",
  "representationStructureExternalCompoundIds": "string",
  "primaryOrg": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "supportingOrgs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "alias": "string",
      "address": "string"
    }
  ],
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string",
  "molWeight": "string",
  "molArea": "string",
  "mic": 0,
  "iC50": 0
}
```

<h3 id="post /api/elevated/project/unlinked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UnlinkedProjectCreateDTO](#schemaunlinkedprojectcreatedto)|false|none|

<h3 id="post /api/elevated/project/unlinked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}

`POST /api/elevated/Project/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "priority": "string",
  "priorityDescription": "string",
  "probability": "string",
  "probabilityDescription": "string",
  "teamPriority": "string",
  "teamPriorityDescription": "string",
  "teamProbability": "string",
  "teamProbabilityDescription": "string",
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaPredictedStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string",
  "h2LStart": "2019-08-24T14:15:22Z",
  "h2LPredictedStart": "2019-08-24T14:15:22Z",
  "h2LDescription": "string",
  "loStart": "2019-08-24T14:15:22Z",
  "loPredictedStart": "2019-08-24T14:15:22Z",
  "loDescription": "string",
  "spStart": "2019-08-24T14:15:22Z",
  "spPredictedStart": "2019-08-24T14:15:22Z",
  "spDescription": "string",
  "pcdDate": "2019-08-24T14:15:22Z",
  "pcdDescription": "string",
  "indStart": "2019-08-24T14:15:22Z",
  "indPredictedStart": "2019-08-24T14:15:22Z",
  "indDescription": "string",
  "clinicalP1Start": "2019-08-24T14:15:22Z",
  "clinicalP1PredictedStart": "2019-08-24T14:15:22Z",
  "clinicalP1Description": "string"
}
```

<h3 id="post /api/elevated/project/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[ProjectEditDTO](#schemaprojecteditdto)|false|none|

<h3 id="post /api/elevated/project/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/terminate

`POST /api/elevated/Project/{id}/terminate`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "projectName": "string"
}
```

<h3 id="post /api/elevated/project/{id}/terminate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[ProjectTerminateDTO](#schemaprojectterminatedto)|false|none|

<h3 id="post /api/elevated/project/{id}/terminate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/createH2L

`POST /api/elevated/Project/{id}/createH2L`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "h2LStart": "2019-08-24T14:15:22Z",
  "h2LDescription": "string"
}
```

<h3 id="post /api/elevated/project/{id}/createh2l-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[H2LDTO](#schemah2ldto)|false|none|

<h3 id="post /api/elevated/project/{id}/createh2l-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/createLO

`POST /api/elevated/Project/{id}/createLO`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "loStart": "2019-08-24T14:15:22Z",
  "loDescription": "string"
}
```

<h3 id="post /api/elevated/project/{id}/createlo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[LODTO](#schemalodto)|false|none|

<h3 id="post /api/elevated/project/{id}/createlo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/createSP

`POST /api/elevated/Project/{id}/createSP`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "spStart": "2019-08-24T14:15:22Z",
  "spDescription": "string"
}
```

<h3 id="post /api/elevated/project/{id}/createsp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[SPDTO](#schemaspdto)|false|none|

<h3 id="post /api/elevated/project/{id}/createsp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/createIND

`POST /api/elevated/Project/{id}/createIND`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "indStart": "2019-08-24T14:15:22Z",
  "indDescription": "string"
}
```

<h3 id="post /api/elevated/project/{id}/createind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[INDDTO](#schemainddto)|false|none|

<h3 id="post /api/elevated/project/{id}/createind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{id}/createP1

`POST /api/elevated/Project/{id}/createP1`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "p1Start": "2019-08-24T14:15:22Z",
  "p1Description": "string"
}
```

<h3 id="post /api/elevated/project/{id}/createp1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[P1DTO](#schemap1dto)|false|none|

<h3 id="post /api/elevated/project/{id}/createp1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Project/{projectId}/compoundevolution

`POST /api/elevated/Project/{projectId}/compoundevolution`

> Body parameter

```json
{
  "smile": "string",
  "molWeight": "string",
  "molArea": "string",
  "projectId": "5a8591dd-4039-49df-9202-96385ba3eff8",
  "notes": "string",
  "mic": 0,
  "iC50": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/elevated/project/{projectid}/compoundevolution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string(uuid)|true|none|
|body|body|[CompoundEvolutionAddDTO](#schemacompoundevolutionadddto)|false|none|

<h3 id="post /api/elevated/project/{projectid}/compoundevolution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-screen">Screen</h1>

## POST /api/Screen

`POST /api/Screen`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "baseTarget": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "name": "string",
    "type": "string",
    "targetGenes": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "accessionNumber": "string",
        "gene": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
          "accessionNumber": "string",
          "geneName": "string",
          "function": "string",
          "product": "string",
          "functionalCategory": "string",
          "geneExternalIds": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "externalIdRef": "string",
              "externalId": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "genePublicData": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "type": "string",
            "proteomics": "string",
            "mutant": "string",
            "comments": "string",
            "start": "string",
            "end": "string",
            "orientation": "string",
            "geneLength": "string",
            "location": "string",
            "geneSequence": "string",
            "molecularMass": "string",
            "isoelectricPoint": "string",
            "proteinLength": "string",
            "proteinSequence": "string",
            "pfam": "string",
            "m/Leprae": "string",
            "m/Marinum": "string",
            "m/Smegmatis": "string",
            "cryo": "string",
            "xRay": "string",
            "model": "string",
            "ligand": "string"
          },
          "geneEssentiality": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "classification": "string",
              "condition": "string",
              "strain": "string",
              "method": "string",
              "reference": "string",
              "notes": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinProduction": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "production": "string",
              "method": "string",
              "purity": "string",
              "date": "2019-08-24T14:15:22Z",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinActivityAssay": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "activity": "string",
              "type": "string",
              "throughput": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneCRISPRiStrain": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "crispRiStrain": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneResistanceMutation": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "mutation": "string",
              "isolate": "string",
              "parentStrain": "string",
              "compound": "string",
              "shiftInMIC": "string",
              "org": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneVulnerability": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "rank": "string",
              "uVi": "string",
              "iVi": "string",
              "viRatio": "string",
              "vulnerabilityCondition": "string",
              "operon": "string",
              "confounded": "string",
              "shell2015Operon": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneHypomorphs": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "knockdownStrain": "string",
              "phenotype": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneUnpublishedStructures": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "organization": "string",
              "method": "string",
              "resolution": "string",
              "ligands": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ]
        },
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
      }
    ],
    "bucket": "string",
    "impactScore": 0,
    "impactComplete": 0,
    "likeScore": 0,
    "likeComplete": 0,
    "screeningScore": 0,
    "screeningComplete": 0,
    "structureScore": 0,
    "structureComplete": 0,
    "vulnerabilityRatio": 0,
    "vulnerabilityRank": 0,
    "htsFeasibility": 0,
    "sbdFeasibility": 0,
    "progressibility": 0,
    "safety": 0,
    "targetScorecard": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
      "targetName": "string",
      "targetScoreCardValues": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
          "targetName": "string",
          "question": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "identification": "string",
            "module": "string",
            "subModule": "string",
            "questionBody": "string",
            "notes": "string",
            "toolTip": "string",
            "possibleAnswers": [
              "string"
            ]
          },
          "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
          "questionIdentification": "string",
          "questionModule": "string",
          "questionSubModule": "string",
          "answer": "string",
          "description": "string",
          "answerdBy": "string"
        }
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    },
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string",
    "background": "string",
    "enablement": "string",
    "strategy": "string",
    "challenges": "string"
  },
  "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
  "screenName": "string",
  "screenType": "string",
  "method": "string",
  "targetName": "string",
  "geneName": "string",
  "status": "string",
  "org": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "promotionDate": "2019-08-24T14:15:22Z",
  "promoter": "string",
  "screenSequences": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "method": "string",
      "protocol": "string",
      "library": "string",
      "scientist": "string",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "unverifiedHitCount": 0,
      "noOfCompoundsScreened": 0,
      "concentration": 0,
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "validatedHits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "library": "string",
      "source": "string",
      "method": "string",
      "mic": 0,
      "micCondition": "string",
      "iC50": 0,
      "clusterGroup": 0,
      "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
      "compound": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "externalCompoundIds": "string",
        "smile": "string",
        "molWeight": "string",
        "molArea": "string",
        "createdAt": "2019-08-24T14:15:22Z"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "vote": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
        "positive": 0,
        "neutral": 0,
        "negative": 0,
        "isVotingAllowed": true,
        "lastModified": "2019-08-24T14:15:22Z",
        "voters": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
            "voterEmail": "string",
            "votedPositive": true,
            "votedNeutral": true,
            "votedNegative": true,
            "votedOn": "2019-08-24T14:15:22Z",
            "comment": "string"
          }
        ],
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    }
  ],
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/screen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Screen](#schemascreen)|false|none|

<h3 id="post /api/screen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Screen

`GET /api/Screen`

<h3 id="get /api/screen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/Screen/phenotypic

`POST /api/Screen/phenotypic`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "baseTarget": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "name": "string",
    "type": "string",
    "targetGenes": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "accessionNumber": "string",
        "gene": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
          "accessionNumber": "string",
          "geneName": "string",
          "function": "string",
          "product": "string",
          "functionalCategory": "string",
          "geneExternalIds": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "externalIdRef": "string",
              "externalId": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "genePublicData": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "type": "string",
            "proteomics": "string",
            "mutant": "string",
            "comments": "string",
            "start": "string",
            "end": "string",
            "orientation": "string",
            "geneLength": "string",
            "location": "string",
            "geneSequence": "string",
            "molecularMass": "string",
            "isoelectricPoint": "string",
            "proteinLength": "string",
            "proteinSequence": "string",
            "pfam": "string",
            "m/Leprae": "string",
            "m/Marinum": "string",
            "m/Smegmatis": "string",
            "cryo": "string",
            "xRay": "string",
            "model": "string",
            "ligand": "string"
          },
          "geneEssentiality": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "classification": "string",
              "condition": "string",
              "strain": "string",
              "method": "string",
              "reference": "string",
              "notes": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinProduction": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "production": "string",
              "method": "string",
              "purity": "string",
              "date": "2019-08-24T14:15:22Z",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinActivityAssay": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "activity": "string",
              "type": "string",
              "throughput": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneCRISPRiStrain": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "crispRiStrain": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneResistanceMutation": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "mutation": "string",
              "isolate": "string",
              "parentStrain": "string",
              "compound": "string",
              "shiftInMIC": "string",
              "org": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneVulnerability": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "rank": "string",
              "uVi": "string",
              "iVi": "string",
              "viRatio": "string",
              "vulnerabilityCondition": "string",
              "operon": "string",
              "confounded": "string",
              "shell2015Operon": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneHypomorphs": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "knockdownStrain": "string",
              "phenotype": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneUnpublishedStructures": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "organization": "string",
              "method": "string",
              "resolution": "string",
              "ligands": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ]
        },
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
      }
    ],
    "bucket": "string",
    "impactScore": 0,
    "impactComplete": 0,
    "likeScore": 0,
    "likeComplete": 0,
    "screeningScore": 0,
    "screeningComplete": 0,
    "structureScore": 0,
    "structureComplete": 0,
    "vulnerabilityRatio": 0,
    "vulnerabilityRank": 0,
    "htsFeasibility": 0,
    "sbdFeasibility": 0,
    "progressibility": 0,
    "safety": 0,
    "targetScorecard": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
      "targetName": "string",
      "targetScoreCardValues": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
          "targetName": "string",
          "question": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "identification": "string",
            "module": "string",
            "subModule": "string",
            "questionBody": "string",
            "notes": "string",
            "toolTip": "string",
            "possibleAnswers": [
              "string"
            ]
          },
          "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
          "questionIdentification": "string",
          "questionModule": "string",
          "questionSubModule": "string",
          "answer": "string",
          "description": "string",
          "answerdBy": "string"
        }
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    },
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string",
    "background": "string",
    "enablement": "string",
    "strategy": "string",
    "challenges": "string"
  },
  "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
  "screenName": "string",
  "screenType": "string",
  "method": "string",
  "targetName": "string",
  "geneName": "string",
  "status": "string",
  "org": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "promotionDate": "2019-08-24T14:15:22Z",
  "promoter": "string",
  "screenSequences": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "method": "string",
      "protocol": "string",
      "library": "string",
      "scientist": "string",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "unverifiedHitCount": 0,
      "noOfCompoundsScreened": 0,
      "concentration": 0,
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "validatedHits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "library": "string",
      "source": "string",
      "method": "string",
      "mic": 0,
      "micCondition": "string",
      "iC50": 0,
      "clusterGroup": 0,
      "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
      "compound": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "externalCompoundIds": "string",
        "smile": "string",
        "molWeight": "string",
        "molArea": "string",
        "createdAt": "2019-08-24T14:15:22Z"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "vote": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
        "positive": 0,
        "neutral": 0,
        "negative": 0,
        "isVotingAllowed": true,
        "lastModified": "2019-08-24T14:15:22Z",
        "voters": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
            "voterEmail": "string",
            "votedPositive": true,
            "votedNeutral": true,
            "votedNegative": true,
            "votedOn": "2019-08-24T14:15:22Z",
            "comment": "string"
          }
        ],
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    }
  ],
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/screen/phenotypic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Screen](#schemascreen)|false|none|

<h3 id="post /api/screen/phenotypic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Screen/phenotypic

`GET /api/Screen/phenotypic`

<h3 id="get /api/screen/phenotypic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Screen/{id}

`GET /api/Screen/{id}`

<h3 id="get /api/screen/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/screen/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-screensequence">ScreenSequence</h1>

## POST /api/ScreenSequence/{screenId}

`POST /api/ScreenSequence/{screenId}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "targetName": "string",
  "method": "string",
  "protocol": "string",
  "library": "string",
  "scientist": "string",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z",
  "unverifiedHitCount": 0,
  "noOfCompoundsScreened": 0,
  "concentration": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}
```

<h3 id="post /api/screensequence/{screenid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|screenId|path|string(uuid)|true|none|
|body|body|[ScreenSequence](#schemascreensequence)|false|none|

<h3 id="post /api/screensequence/{screenid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-sync">Sync</h1>

## GET /api/batch/gene/Sync

`GET /api/batch/gene/Sync`

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","status":"string","type":"string","dateCreated":"2019-08-24T14:15:22Z","dateCompleted":"2019-08-24T14:15:22Z"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "type": "string",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateCompleted": "2019-08-24T14:15:22Z"
}
```

<h3 id="get /api/batch/gene/sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BTask](#schemabtask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/batch/gene/Sync/{id}

`GET /api/batch/gene/Sync/{id}`

<h3 id="get /api/batch/gene/sync/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```
{"header":{"items":[{}]},"data":{"characters":"string"}}
```

```json
{
  "header": {
    "items": [
      {}
    ]
  },
  "data": {
    "characters": "string"
  }
}
```

<h3 id="get /api/batch/gene/sync/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[Sequence](#schemasequence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-target">Target</h1>

## GET /api/Target

`GET /api/Target`

<h3 id="get /api/target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Target/{id}

`GET /api/Target/{id}`

<h3 id="get /api/target/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/target/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GET /api/Target/{id}/history

`GET /api/Target/{id}/history`

<h3 id="get /api/target/{id}/history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="get /api/target/{id}/history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Target

`POST /api/elevated/Target`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ]
}
```

<h3 id="post /api/elevated/target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenePromotionRequest](#schemagenepromotionrequest)|false|none|

<h3 id="post /api/elevated/target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Target/{id}

`POST /api/elevated/Target/{id}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "name": "string",
  "type": "string",
  "targetGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "accessionNumber": "string",
      "gene": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "accessionNumber": "string",
        "geneName": "string",
        "function": "string",
        "product": "string",
        "functionalCategory": "string",
        "geneExternalIds": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "externalIdRef": "string",
            "externalId": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "genePublicData": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
          "geneAccessionNumber": "string",
          "type": "string",
          "proteomics": "string",
          "mutant": "string",
          "comments": "string",
          "start": "string",
          "end": "string",
          "orientation": "string",
          "geneLength": "string",
          "location": "string",
          "geneSequence": "string",
          "molecularMass": "string",
          "isoelectricPoint": "string",
          "proteinLength": "string",
          "proteinSequence": "string",
          "pfam": "string",
          "m/Leprae": "string",
          "m/Marinum": "string",
          "m/Smegmatis": "string",
          "cryo": "string",
          "xRay": "string",
          "model": "string",
          "ligand": "string"
        },
        "geneEssentiality": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "classification": "string",
            "condition": "string",
            "strain": "string",
            "method": "string",
            "reference": "string",
            "notes": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinProduction": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "production": "string",
            "method": "string",
            "purity": "string",
            "date": "2019-08-24T14:15:22Z",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinActivityAssay": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "activity": "string",
            "type": "string",
            "throughput": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneCRISPRiStrain": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "crispRiStrain": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneResistanceMutation": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "mutation": "string",
            "isolate": "string",
            "parentStrain": "string",
            "compound": "string",
            "shiftInMIC": "string",
            "org": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneVulnerability": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "rank": "string",
            "uVi": "string",
            "iVi": "string",
            "viRatio": "string",
            "vulnerabilityCondition": "string",
            "operon": "string",
            "confounded": "string",
            "shell2015Operon": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneHypomorphs": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "knockdownStrain": "string",
            "phenotype": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneUnpublishedStructures": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "organization": "string",
            "method": "string",
            "resolution": "string",
            "ligands": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ]
      },
      "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
    }
  ],
  "bucket": "string",
  "impactScore": 0,
  "impactComplete": 0,
  "likeScore": 0,
  "likeComplete": 0,
  "screeningScore": 0,
  "screeningComplete": 0,
  "structureScore": 0,
  "structureComplete": 0,
  "vulnerabilityRatio": 0,
  "vulnerabilityRank": 0,
  "htsFeasibility": 0,
  "sbdFeasibility": 0,
  "progressibility": 0,
  "safety": 0,
  "targetScorecard": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
    "targetName": "string",
    "targetScoreCardValues": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
        "targetName": "string",
        "question": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "identification": "string",
          "module": "string",
          "subModule": "string",
          "questionBody": "string",
          "notes": "string",
          "toolTip": "string",
          "possibleAnswers": [
            "string"
          ]
        },
        "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
        "questionIdentification": "string",
        "questionModule": "string",
        "questionSubModule": "string",
        "answer": "string",
        "description": "string",
        "answerdBy": "string"
      }
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string",
  "background": "string",
  "enablement": "string",
  "strategy": "string",
  "challenges": "string"
}
```

<h3 id="post /api/elevated/target/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[Target](#schematarget)|false|none|

<h3 id="post /api/elevated/target/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Target/{id}/summary

`POST /api/elevated/Target/{id}/summary`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "background": "string",
  "enablement": "string",
  "strategy": "string",
  "challenges": "string"
}
```

<h3 id="post /api/elevated/target/{id}/summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[TargetSummaryDTO](#schematargetsummarydto)|false|none|

<h3 id="post /api/elevated/target/{id}/summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Target/import

`POST /api/elevated/Target/import`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ],
  "bucket": "string",
  "simpleProteinAccessionNumber": "string",
  "impactScore": 0,
  "impactComplete": 0,
  "likeScore": 0,
  "likeComplete": 0,
  "screeningScore": 0,
  "screeningComplete": 0,
  "structureScore": 0,
  "structureComplete": 0,
  "vulnerabilityRatio": 0,
  "vulnerabilityRank": 0,
  "htsFeasibility": 0,
  "sbdFeasibility": 0,
  "progressibility": 0,
  "safety": 0
}
```

<h3 id="post /api/elevated/target/import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TargetImportDTO](#schematargetimportdto)|false|none|

<h3 id="post /api/elevated/target/import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Target/importComplex

`POST /api/elevated/Target/importComplex`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ],
  "bucket": "string",
  "simpleProteinAccessionNumber": "string",
  "impactScore": 0,
  "impactComplete": 0,
  "likeScore": 0,
  "likeComplete": 0,
  "screeningScore": 0,
  "screeningComplete": 0,
  "structureScore": 0,
  "structureComplete": 0,
  "vulnerabilityRatio": 0,
  "vulnerabilityRank": 0,
  "htsFeasibility": 0,
  "sbdFeasibility": 0,
  "progressibility": 0,
  "safety": 0
}
```

<h3 id="post /api/elevated/target/importcomplex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TargetImportDTO](#schematargetimportdto)|false|none|

<h3 id="post /api/elevated/target/importcomplex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-vote">Vote</h1>

## POST /api/Vote/{id}

`POST /api/Vote/{id}`

> Body parameter

```json
{
  "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
  "voteButton": "string",
  "comment": "string"
}
```

<h3 id="post /api/vote/{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[RegisterVoteDTO](#schemaregistervotedto)|false|none|

<h3 id="post /api/vote/{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Vote/freeze

`POST /api/elevated/Vote/freeze`

> Body parameter

```json
[
  "497f6eca-6276-4993-bfeb-53cbbbba6f08"
]
```

<h3 id="post /api/elevated/vote/freeze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## POST /api/elevated/Vote/enable

`POST /api/elevated/Vote/enable`

> Body parameter

```json
[
  "497f6eca-6276-4993-bfeb-53cbbbba6f08"
]
```

<h3 id="post /api/elevated/vote/enable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="my-api-vtarget">VTarget</h1>

## GET /api/data-view/VTarget/dash-view

`GET /api/data-view/VTarget/dash-view`

<h3 id="get /api/data-view/vtarget/dash-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS/AppOrg">AppOrg</h2>

<a id="schemaapporg"></a>
<a id="schema/AppOrg"></a>
<a id="tocSapporg"></a>
<a id="tocsapporg"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "alias": "string",
  "address": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string¦null|false|none|none|
|alias|string¦null|false|none|none|
|address|string¦null|false|none|none|

<h2 id="tocS/AppRole">AppRole</h2>

<a id="schemaapprole"></a>
<a id="schema/AppRole"></a>
<a id="tocSapprole"></a>
<a id="tocsapprole"></a>

```json
{
  "id": "string",
  "name": "string",
  "normalizedName": "string",
  "concurrencyStamp": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|name|string¦null|false|none|none|
|normalizedName|string¦null|false|none|none|
|concurrencyStamp|string¦null|false|none|none|
|description|string¦null|false|none|none|

<h2 id="tocS/BTask">BTask</h2>

<a id="schemabtask"></a>
<a id="schema/BTask"></a>
<a id="tocSbtask"></a>
<a id="tocsbtask"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "type": "string",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateCompleted": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|status|string¦null|false|none|none|
|type|string¦null|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateCompleted|string(date-time)|false|none|none|

<h2 id="tocS/Compound">Compound</h2>

<a id="schemacompound"></a>
<a id="schema/Compound"></a>
<a id="tocScompound"></a>
<a id="tocscompound"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "externalCompoundIds": "string",
  "smile": "string",
  "molWeight": "string",
  "molArea": "string",
  "createdAt": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|strainId|string(uuid)|false|none|none|
|externalCompoundIds|string¦null|false|none|none|
|smile|string¦null|false|none|none|
|molWeight|string¦null|false|none|none|
|molArea|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS/CompoundEvolutionAddDTO">CompoundEvolutionAddDTO</h2>

<a id="schemacompoundevolutionadddto"></a>
<a id="schema/CompoundEvolutionAddDTO"></a>
<a id="tocScompoundevolutionadddto"></a>
<a id="tocscompoundevolutionadddto"></a>

```json
{
  "smile": "string",
  "molWeight": "string",
  "molArea": "string",
  "projectId": "5a8591dd-4039-49df-9202-96385ba3eff8",
  "notes": "string",
  "mic": 0,
  "iC50": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smile|string¦null|false|none|none|
|molWeight|string¦null|false|none|none|
|molArea|string¦null|false|none|none|
|projectId|string(uuid)|false|none|none|
|notes|string¦null|false|none|none|
|mic|number(double)|false|none|none|
|iC50|number(double)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/Discussion">Discussion</h2>

<a id="schemadiscussion"></a>
<a id="schema/Discussion"></a>
<a id="tocSdiscussion"></a>
<a id="tocsdiscussion"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reference": "string",
  "section": "string",
  "topic": "string",
  "description": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "replies": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
      "body": "string",
      "postedBy": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "mentions": [
        "string"
      ],
      "tags": [
        "string"
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|reference|string¦null|false|none|none|
|section|string¦null|false|none|none|
|topic|string¦null|false|none|none|
|description|string¦null|false|none|none|
|postedBy|string¦null|false|none|none|
|timestamp|string(date-time)|false|none|none|
|mentions|[string]¦null|false|none|none|
|tags|[string]¦null|false|none|none|
|replies|[[Reply](#schemareply)]¦null|false|none|none|

<h2 id="tocS/Gene">Gene</h2>

<a id="schemagene"></a>
<a id="schema/Gene"></a>
<a id="tocSgene"></a>
<a id="tocsgene"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "accessionNumber": "string",
  "geneName": "string",
  "function": "string",
  "product": "string",
  "functionalCategory": "string",
  "geneExternalIds": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "externalIdRef": "string",
      "externalId": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "genePublicData": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
    "geneAccessionNumber": "string",
    "type": "string",
    "proteomics": "string",
    "mutant": "string",
    "comments": "string",
    "start": "string",
    "end": "string",
    "orientation": "string",
    "geneLength": "string",
    "location": "string",
    "geneSequence": "string",
    "molecularMass": "string",
    "isoelectricPoint": "string",
    "proteinLength": "string",
    "proteinSequence": "string",
    "pfam": "string",
    "m/Leprae": "string",
    "m/Marinum": "string",
    "m/Smegmatis": "string",
    "cryo": "string",
    "xRay": "string",
    "model": "string",
    "ligand": "string"
  },
  "geneEssentiality": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "classification": "string",
      "condition": "string",
      "strain": "string",
      "method": "string",
      "reference": "string",
      "notes": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneProteinProduction": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "production": "string",
      "method": "string",
      "purity": "string",
      "date": "2019-08-24T14:15:22Z",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneProteinActivityAssay": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "activity": "string",
      "type": "string",
      "throughput": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneCRISPRiStrain": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "crispRiStrain": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneResistanceMutation": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "mutation": "string",
      "isolate": "string",
      "parentStrain": "string",
      "compound": "string",
      "shiftInMIC": "string",
      "org": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneVulnerability": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "rank": "string",
      "uVi": "string",
      "iVi": "string",
      "viRatio": "string",
      "vulnerabilityCondition": "string",
      "operon": "string",
      "confounded": "string",
      "shell2015Operon": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneHypomorphs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "knockdownStrain": "string",
      "phenotype": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "geneUnpublishedStructures": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "organization": "string",
      "method": "string",
      "resolution": "string",
      "ligands": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|strainId|string(uuid)|false|none|none|
|accessionNumber|string¦null|false|none|none|
|geneName|string¦null|false|none|none|
|function|string¦null|false|none|none|
|product|string¦null|false|none|none|
|functionalCategory|string¦null|false|none|none|
|geneExternalIds|[[GeneExternalId](#schemageneexternalid)]¦null|false|none|none|

<h2 id="tocS/GeneCRISPRiStrain">GeneCRISPRiStrain</h2>

<a id="schemagenecrispristrain"></a>
<a id="schema/GeneCRISPRiStrain"></a>
<a id="tocSgenecrispristrain"></a>
<a id="tocsgenecrispristrain"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "crispRiStrain": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|crispRiStrain|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneEssentiality">GeneEssentiality</h2>

<a id="schemageneessentiality"></a>
<a id="schema/GeneEssentiality"></a>
<a id="tocSgeneessentiality"></a>
<a id="tocsgeneessentiality"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "classification": "string",
  "condition": "string",
  "strain": "string",
  "method": "string",
  "reference": "string",
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|classification|string¦null|false|none|none|
|condition|string¦null|false|none|none|
|strain|string¦null|false|none|none|
|method|string¦null|false|none|none|
|reference|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneExternalId">GeneExternalId</h2>

<a id="schemageneexternalid"></a>
<a id="schema/GeneExternalId"></a>
<a id="tocSgeneexternalid"></a>
<a id="tocsgeneexternalid"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "externalIdRef": "string",
  "externalId": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|externalIdRef|string¦null|false|none|none|
|externalId|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneGroup">GeneGroup</h2>

<a id="schemagenegroup"></a>
<a id="schema/GeneGroup"></a>
<a id="tocSgenegroup"></a>
<a id="tocsgenegroup"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "name": "string",
  "type": "string",
  "genes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneGroupId": "ee44a9df-bc3d-455e-9532-c0c75cc025f5",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "accessionNumber": "string",
      "gene": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "accessionNumber": "string",
        "geneName": "string",
        "function": "string",
        "product": "string",
        "functionalCategory": "string",
        "geneExternalIds": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "externalIdRef": "string",
            "externalId": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "genePublicData": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
          "geneAccessionNumber": "string",
          "type": "string",
          "proteomics": "string",
          "mutant": "string",
          "comments": "string",
          "start": "string",
          "end": "string",
          "orientation": "string",
          "geneLength": "string",
          "location": "string",
          "geneSequence": "string",
          "molecularMass": "string",
          "isoelectricPoint": "string",
          "proteinLength": "string",
          "proteinSequence": "string",
          "pfam": "string",
          "m/Leprae": "string",
          "m/Marinum": "string",
          "m/Smegmatis": "string",
          "cryo": "string",
          "xRay": "string",
          "model": "string",
          "ligand": "string"
        },
        "geneEssentiality": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "classification": "string",
            "condition": "string",
            "strain": "string",
            "method": "string",
            "reference": "string",
            "notes": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinProduction": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "production": "string",
            "method": "string",
            "purity": "string",
            "date": "2019-08-24T14:15:22Z",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinActivityAssay": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "activity": "string",
            "type": "string",
            "throughput": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneCRISPRiStrain": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "crispRiStrain": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneResistanceMutation": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "mutation": "string",
            "isolate": "string",
            "parentStrain": "string",
            "compound": "string",
            "shiftInMIC": "string",
            "org": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneVulnerability": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "rank": "string",
            "uVi": "string",
            "iVi": "string",
            "viRatio": "string",
            "vulnerabilityCondition": "string",
            "operon": "string",
            "confounded": "string",
            "shell2015Operon": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneHypomorphs": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "knockdownStrain": "string",
            "phenotype": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneUnpublishedStructures": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "organization": "string",
            "method": "string",
            "resolution": "string",
            "ligands": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ]
      },
      "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|strainId|string(uuid)|false|none|none|
|name|string¦null|false|none|none|
|type|string¦null|false|none|none|
|genes|[[GeneGroupGenes](#schemagenegroupgenes)]¦null|false|none|none|

<h2 id="tocS/GeneGroupGenes">GeneGroupGenes</h2>

<a id="schemagenegroupgenes"></a>
<a id="schema/GeneGroupGenes"></a>
<a id="tocSgenegroupgenes"></a>
<a id="tocsgenegroupgenes"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneGroupId": "ee44a9df-bc3d-455e-9532-c0c75cc025f5",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "accessionNumber": "string",
  "gene": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "accessionNumber": "string",
    "geneName": "string",
    "function": "string",
    "product": "string",
    "functionalCategory": "string",
    "geneExternalIds": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "externalIdRef": "string",
        "externalId": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "genePublicData": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "type": "string",
      "proteomics": "string",
      "mutant": "string",
      "comments": "string",
      "start": "string",
      "end": "string",
      "orientation": "string",
      "geneLength": "string",
      "location": "string",
      "geneSequence": "string",
      "molecularMass": "string",
      "isoelectricPoint": "string",
      "proteinLength": "string",
      "proteinSequence": "string",
      "pfam": "string",
      "m/Leprae": "string",
      "m/Marinum": "string",
      "m/Smegmatis": "string",
      "cryo": "string",
      "xRay": "string",
      "model": "string",
      "ligand": "string"
    },
    "geneEssentiality": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "classification": "string",
        "condition": "string",
        "strain": "string",
        "method": "string",
        "reference": "string",
        "notes": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneProteinProduction": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "production": "string",
        "method": "string",
        "purity": "string",
        "date": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneProteinActivityAssay": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "activity": "string",
        "type": "string",
        "throughput": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneCRISPRiStrain": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "crispRiStrain": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneResistanceMutation": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "mutation": "string",
        "isolate": "string",
        "parentStrain": "string",
        "compound": "string",
        "shiftInMIC": "string",
        "org": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneVulnerability": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "rank": "string",
        "uVi": "string",
        "iVi": "string",
        "viRatio": "string",
        "vulnerabilityCondition": "string",
        "operon": "string",
        "confounded": "string",
        "shell2015Operon": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneHypomorphs": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "knockdownStrain": "string",
        "phenotype": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneUnpublishedStructures": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "organization": "string",
        "method": "string",
        "resolution": "string",
        "ligands": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ]
  },
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneGroupId|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|accessionNumber|string¦null|false|none|none|

<h2 id="tocS/GeneHypomorph">GeneHypomorph</h2>

<a id="schemagenehypomorph"></a>
<a id="schema/GeneHypomorph"></a>
<a id="tocSgenehypomorph"></a>
<a id="tocsgenehypomorph"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "knockdownStrain": "string",
  "phenotype": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|knockdownStrain|string¦null|false|none|none|
|phenotype|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GenePromotionRequest">GenePromotionRequest</h2>

<a id="schemagenepromotionrequest"></a>
<a id="schema/GenePromotionRequest"></a>
<a id="tocSgenepromotionrequest"></a>
<a id="tocsgenepromotionrequest"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|genePromtionRequestGenes|[[GenePromtionRequestGene](#schemagenepromtionrequestgene)]¦null|false|none|none|

<h2 id="tocS/GenePromotionRequestValue">GenePromotionRequestValue</h2>

<a id="schemagenepromotionrequestvalue"></a>
<a id="schema/GenePromotionRequestValue"></a>
<a id="tocSgenepromotionrequestvalue"></a>
<a id="tocsgenepromotionrequestvalue"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
  "question": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identification": "string",
    "module": "string",
    "subModule": "string",
    "questionBody": "string",
    "notes": "string",
    "toolTip": "string",
    "possibleAnswers": [
      "string"
    ]
  },
  "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
  "answer": "string",
  "description": "string",
  "answerdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|genePromotionRequestId|string(uuid)|false|none|none|

<h2 id="tocS/GenePromtionRequestGene">GenePromtionRequestGene</h2>

<a id="schemagenepromtionrequestgene"></a>
<a id="schema/GenePromtionRequestGene"></a>
<a id="tocSgenepromtionrequestgene"></a>
<a id="tocsgenepromtionrequestgene"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|genePromotionRequestId|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|

<h2 id="tocS/GeneProteinActivityAssay">GeneProteinActivityAssay</h2>

<a id="schemageneproteinactivityassay"></a>
<a id="schema/GeneProteinActivityAssay"></a>
<a id="tocSgeneproteinactivityassay"></a>
<a id="tocsgeneproteinactivityassay"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "activity": "string",
  "type": "string",
  "throughput": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|activity|string¦null|false|none|none|
|type|string¦null|false|none|none|
|throughput|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneProteinProduction">GeneProteinProduction</h2>

<a id="schemageneproteinproduction"></a>
<a id="schema/GeneProteinProduction"></a>
<a id="tocSgeneproteinproduction"></a>
<a id="tocsgeneproteinproduction"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "production": "string",
  "method": "string",
  "purity": "string",
  "date": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|production|string¦null|false|none|none|
|method|string¦null|false|none|none|
|purity|string¦null|false|none|none|
|date|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GenePublicData">GenePublicData</h2>

<a id="schemagenepublicdata"></a>
<a id="schema/GenePublicData"></a>
<a id="tocSgenepublicdata"></a>
<a id="tocsgenepublicdata"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "type": "string",
  "proteomics": "string",
  "mutant": "string",
  "comments": "string",
  "start": "string",
  "end": "string",
  "orientation": "string",
  "geneLength": "string",
  "location": "string",
  "geneSequence": "string",
  "molecularMass": "string",
  "isoelectricPoint": "string",
  "proteinLength": "string",
  "proteinSequence": "string",
  "pfam": "string",
  "m/Leprae": "string",
  "m/Marinum": "string",
  "m/Smegmatis": "string",
  "cryo": "string",
  "xRay": "string",
  "model": "string",
  "ligand": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|type|string¦null|false|none|none|
|proteomics|string¦null|false|none|none|
|mutant|string¦null|false|none|none|
|comments|string¦null|false|none|none|
|start|string¦null|false|none|none|
|end|string¦null|false|none|none|
|orientation|string¦null|false|none|none|
|geneLength|string¦null|false|none|none|
|location|string¦null|false|none|none|
|geneSequence|string¦null|false|none|none|
|molecularMass|string¦null|false|none|none|
|isoelectricPoint|string¦null|false|none|none|
|proteinLength|string¦null|false|none|none|
|proteinSequence|string¦null|false|none|none|
|pfam|string¦null|false|none|none|
|m/Leprae|string¦null|false|none|none|
|m/Marinum|string¦null|false|none|none|
|m/Smegmatis|string¦null|false|none|none|
|cryo|string¦null|false|none|none|
|xRay|string¦null|false|none|none|
|model|string¦null|false|none|none|
|ligand|string¦null|false|none|none|

<h2 id="tocS/GenePublicEditDTO">GenePublicEditDTO</h2>

<a id="schemagenepubliceditdto"></a>
<a id="schema/GenePublicEditDTO"></a>
<a id="tocSgenepubliceditdto"></a>
<a id="tocsgenepubliceditdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "accessionNumber": "string",
  "geneName": "string",
  "function": "string",
  "product": "string",
  "functionalCategory": "string",
  "genePublicData": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
    "geneAccessionNumber": "string",
    "type": "string",
    "proteomics": "string",
    "mutant": "string",
    "comments": "string",
    "start": "string",
    "end": "string",
    "orientation": "string",
    "geneLength": "string",
    "location": "string",
    "geneSequence": "string",
    "molecularMass": "string",
    "isoelectricPoint": "string",
    "proteinLength": "string",
    "proteinSequence": "string",
    "pfam": "string",
    "m/Leprae": "string",
    "m/Marinum": "string",
    "m/Smegmatis": "string",
    "cryo": "string",
    "xRay": "string",
    "model": "string",
    "ligand": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|accessionNumber|string¦null|false|none|none|
|geneName|string¦null|false|none|none|
|function|string¦null|false|none|none|
|product|string¦null|false|none|none|
|functionalCategory|string¦null|false|none|none|

<h2 id="tocS/GeneResistanceMutation">GeneResistanceMutation</h2>

<a id="schemageneresistancemutation"></a>
<a id="schema/GeneResistanceMutation"></a>
<a id="tocSgeneresistancemutation"></a>
<a id="tocsgeneresistancemutation"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "mutation": "string",
  "isolate": "string",
  "parentStrain": "string",
  "compound": "string",
  "shiftInMIC": "string",
  "org": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|mutation|string¦null|false|none|none|
|isolate|string¦null|false|none|none|
|parentStrain|string¦null|false|none|none|
|compound|string¦null|false|none|none|
|shiftInMIC|string¦null|false|none|none|
|org|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneUnpublishedStructures">GeneUnpublishedStructures</h2>

<a id="schemageneunpublishedstructures"></a>
<a id="schema/GeneUnpublishedStructures"></a>
<a id="tocSgeneunpublishedstructures"></a>
<a id="tocsgeneunpublishedstructures"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "organization": "string",
  "method": "string",
  "resolution": "string",
  "ligands": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|organization|string¦null|false|none|none|
|method|string¦null|false|none|none|
|resolution|string¦null|false|none|none|
|ligands|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/GeneVulnerability">GeneVulnerability</h2>

<a id="schemagenevulnerability"></a>
<a id="schema/GeneVulnerability"></a>
<a id="tocSgenevulnerability"></a>
<a id="tocsgenevulnerability"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "geneAccessionNumber": "string",
  "rank": "string",
  "uVi": "string",
  "iVi": "string",
  "viRatio": "string",
  "vulnerabilityCondition": "string",
  "operon": "string",
  "confounded": "string",
  "shell2015Operon": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|geneAccessionNumber|string¦null|false|none|none|
|rank|string¦null|false|none|none|
|uVi|string¦null|false|none|none|
|iVi|string¦null|false|none|none|
|viRatio|string¦null|false|none|none|
|vulnerabilityCondition|string¦null|false|none|none|
|operon|string¦null|false|none|none|
|confounded|string¦null|false|none|none|
|shell2015Operon|string¦null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/H2LDTO">H2LDTO</h2>

<a id="schemah2ldto"></a>
<a id="schema/H2LDTO"></a>
<a id="tocSh2ldto"></a>
<a id="tocsh2ldto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "h2LStart": "2019-08-24T14:15:22Z",
  "h2LDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|h2LStart|string(date-time)|false|none|none|
|h2LDescription|string¦null|false|none|none|

<h2 id="tocS/Header">Header</h2>

<a id="schemaheader"></a>
<a id="schema/Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "items": [
    {}
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[HeaderItem](#schemaheaderitem)]¦null|false|read-only|none|

<h2 id="tocS/HeaderItem">HeaderItem</h2>

<a id="schemaheaderitem"></a>
<a id="schema/HeaderItem"></a>
<a id="tocSheaderitem"></a>
<a id="tocsheaderitem"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS/Hit">Hit</h2>

<a id="schemahit"></a>
<a id="schema/Hit"></a>
<a id="tocShit"></a>
<a id="tocshit"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "targetName": "string",
  "library": "string",
  "source": "string",
  "method": "string",
  "mic": 0,
  "micCondition": "string",
  "iC50": 0,
  "clusterGroup": 0,
  "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
  "compound": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "externalCompoundIds": "string",
    "smile": "string",
    "molWeight": "string",
    "molArea": "string",
    "createdAt": "2019-08-24T14:15:22Z"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string",
  "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
  "vote": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
    "positive": 0,
    "neutral": 0,
    "negative": 0,
    "isVotingAllowed": true,
    "lastModified": "2019-08-24T14:15:22Z",
    "voters": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
        "voterEmail": "string",
        "votedPositive": true,
        "votedNeutral": true,
        "votedNegative": true,
        "votedOn": "2019-08-24T14:15:22Z",
        "comment": "string"
      }
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|screenId|string(uuid)|false|none|none|
|targetName|string¦null|false|none|none|
|library|string¦null|false|none|none|
|source|string¦null|false|none|none|
|method|string¦null|false|none|none|
|mic|number(double)|false|none|none|
|micCondition|string¦null|false|none|none|
|iC50|number(double)|false|none|none|
|clusterGroup|integer(int32)|false|none|none|
|compoundId|string(uuid)|false|none|none|

<h2 id="tocS/HitCSVDTO">HitCSVDTO</h2>

<a id="schemahitcsvdto"></a>
<a id="schema/HitCSVDTO"></a>
<a id="tocShitcsvdto"></a>
<a id="tocshitcsvdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "externalCompoundIds": "string",
  "targetName": "string",
  "library": "string",
  "source": "string",
  "method": "string",
  "mic": 0,
  "micCondition": "string",
  "iC50": 0,
  "clusterGroup": "string",
  "smile": "string",
  "molWeight": "string",
  "molArea": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|screenId|string(uuid)|false|none|none|
|externalCompoundIds|string¦null|false|none|none|
|targetName|string¦null|false|none|none|
|library|string¦null|false|none|none|
|source|string¦null|false|none|none|
|method|string¦null|false|none|none|
|mic|number(double)|false|none|none|
|micCondition|string¦null|false|none|none|
|iC50|number(double)|false|none|none|
|clusterGroup|string¦null|false|none|none|
|smile|string¦null|false|none|none|
|molWeight|string¦null|false|none|none|
|molArea|string¦null|false|none|none|

<h2 id="tocS/IActualSequence">IActualSequence</h2>

<a id="schemaiactualsequence"></a>
<a id="schema/IActualSequence"></a>
<a id="tocSiactualsequence"></a>
<a id="tocsiactualsequence"></a>

```json
{
  "characters": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|characters|string¦null|false|read-only|none|

<h2 id="tocS/INDDTO">INDDTO</h2>

<a id="schemainddto"></a>
<a id="schema/INDDTO"></a>
<a id="tocSinddto"></a>
<a id="tocsinddto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "indStart": "2019-08-24T14:15:22Z",
  "indDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|indStart|string(date-time)|false|none|none|
|indDescription|string¦null|false|none|none|

<h2 id="tocS/LODTO">LODTO</h2>

<a id="schemalodto"></a>
<a id="schema/LODTO"></a>
<a id="tocSlodto"></a>
<a id="tocslodto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "loStart": "2019-08-24T14:15:22Z",
  "loDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|loStart|string(date-time)|false|none|none|
|loDescription|string¦null|false|none|none|

<h2 id="tocS/P1DTO">P1DTO</h2>

<a id="schemap1dto"></a>
<a id="schema/P1DTO"></a>
<a id="tocSp1dto"></a>
<a id="tocsp1dto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "p1Start": "2019-08-24T14:15:22Z",
  "p1Description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|p1Start|string(date-time)|false|none|none|
|p1Description|string¦null|false|none|none|

<h2 id="tocS/ProjectCreateDTO">ProjectCreateDTO</h2>

<a id="schemaprojectcreatedto"></a>
<a id="schema/ProjectCreateDTO"></a>
<a id="tocSprojectcreatedto"></a>
<a id="tocsprojectcreatedto"></a>

```json
{
  "projectName": "string",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "baseHits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "library": "string",
      "source": "string",
      "method": "string",
      "mic": 0,
      "micCondition": "string",
      "iC50": 0,
      "clusterGroup": 0,
      "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
      "compound": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "externalCompoundIds": "string",
        "smile": "string",
        "molWeight": "string",
        "molArea": "string",
        "createdAt": "2019-08-24T14:15:22Z"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "vote": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
        "positive": 0,
        "neutral": 0,
        "negative": 0,
        "isVotingAllowed": true,
        "lastModified": "2019-08-24T14:15:22Z",
        "voters": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
            "voterEmail": "string",
            "votedPositive": true,
            "votedNeutral": true,
            "votedNegative": true,
            "votedOn": "2019-08-24T14:15:22Z",
            "comment": "string"
          }
        ],
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    }
  ],
  "representationStructure": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "externalCompoundIds": "string",
    "smile": "string",
    "molWeight": "string",
    "molArea": "string",
    "createdAt": "2019-08-24T14:15:22Z"
  },
  "primaryOrg": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "supportingOrgs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "alias": "string",
      "address": "string"
    }
  ],
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|string¦null|false|none|none|
|screenId|string(uuid)|false|none|none|
|baseHits|[[Hit](#schemahit)]¦null|false|none|none|

<h2 id="tocS/ProjectEditDTO">ProjectEditDTO</h2>

<a id="schemaprojecteditdto"></a>
<a id="schema/ProjectEditDTO"></a>
<a id="tocSprojecteditdto"></a>
<a id="tocsprojecteditdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "priority": "string",
  "priorityDescription": "string",
  "probability": "string",
  "probabilityDescription": "string",
  "teamPriority": "string",
  "teamPriorityDescription": "string",
  "teamProbability": "string",
  "teamProbabilityDescription": "string",
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaPredictedStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string",
  "h2LStart": "2019-08-24T14:15:22Z",
  "h2LPredictedStart": "2019-08-24T14:15:22Z",
  "h2LDescription": "string",
  "loStart": "2019-08-24T14:15:22Z",
  "loPredictedStart": "2019-08-24T14:15:22Z",
  "loDescription": "string",
  "spStart": "2019-08-24T14:15:22Z",
  "spPredictedStart": "2019-08-24T14:15:22Z",
  "spDescription": "string",
  "pcdDate": "2019-08-24T14:15:22Z",
  "pcdDescription": "string",
  "indStart": "2019-08-24T14:15:22Z",
  "indPredictedStart": "2019-08-24T14:15:22Z",
  "indDescription": "string",
  "clinicalP1Start": "2019-08-24T14:15:22Z",
  "clinicalP1PredictedStart": "2019-08-24T14:15:22Z",
  "clinicalP1Description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|priority|string¦null|false|none|none|
|priorityDescription|string¦null|false|none|none|
|probability|string¦null|false|none|none|
|probabilityDescription|string¦null|false|none|none|
|teamPriority|string¦null|false|none|none|
|teamPriorityDescription|string¦null|false|none|none|
|teamProbability|string¦null|false|none|none|
|teamProbabilityDescription|string¦null|false|none|none|
|fhaStart|string(date-time)|false|none|none|
|fhaPredictedStart|string(date-time)|false|none|none|
|fhaDescription|string¦null|false|none|none|
|h2LStart|string(date-time)|false|none|none|
|h2LPredictedStart|string(date-time)|false|none|none|
|h2LDescription|string¦null|false|none|none|
|loStart|string(date-time)|false|none|none|
|loPredictedStart|string(date-time)|false|none|none|
|loDescription|string¦null|false|none|none|
|spStart|string(date-time)|false|none|none|
|spPredictedStart|string(date-time)|false|none|none|
|spDescription|string¦null|false|none|none|
|pcdDate|string(date-time)|false|none|none|
|pcdDescription|string¦null|false|none|none|
|indStart|string(date-time)|false|none|none|
|indPredictedStart|string(date-time)|false|none|none|
|indDescription|string¦null|false|none|none|
|clinicalP1Start|string(date-time)|false|none|none|
|clinicalP1PredictedStart|string(date-time)|false|none|none|
|clinicalP1Description|string¦null|false|none|none|

<h2 id="tocS/ProjectPriorityProbabilityDTO">ProjectPriorityProbabilityDTO</h2>

<a id="schemaprojectpriorityprobabilitydto"></a>
<a id="schema/ProjectPriorityProbabilityDTO"></a>
<a id="tocSprojectpriorityprobabilitydto"></a>
<a id="tocsprojectpriorityprobabilitydto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teamPriority": "string",
  "teamPriorityDescription": "string",
  "teamProbability": "string",
  "teamProbabilityDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teamPriority|string¦null|false|none|none|
|teamPriorityDescription|string¦null|false|none|none|
|teamProbability|string¦null|false|none|none|
|teamProbabilityDescription|string¦null|false|none|none|

<h2 id="tocS/ProjectTerminateDTO">ProjectTerminateDTO</h2>

<a id="schemaprojectterminatedto"></a>
<a id="schema/ProjectTerminateDTO"></a>
<a id="tocSprojectterminatedto"></a>
<a id="tocsprojectterminatedto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "projectName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|projectName|string¦null|false|none|none|

<h2 id="tocS/Question">Question</h2>

<a id="schemaquestion"></a>
<a id="schema/Question"></a>
<a id="tocSquestion"></a>
<a id="tocsquestion"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identification": "string",
  "module": "string",
  "subModule": "string",
  "questionBody": "string",
  "notes": "string",
  "toolTip": "string",
  "possibleAnswers": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|identification|string¦null|false|none|none|
|module|string¦null|false|none|none|
|subModule|string¦null|false|none|none|
|questionBody|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|toolTip|string¦null|false|none|none|
|possibleAnswers|[string]¦null|false|none|none|

<h2 id="tocS/RegisterDto">RegisterDto</h2>

<a id="schemaregisterdto"></a>
<a id="schema/RegisterDto"></a>
<a id="tocSregisterdto"></a>
<a id="tocsregisterdto"></a>

```json
{
  "email": "user@example.com",
  "displayName": "string",
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "bio": "string",
  "roles": [
    "string"
  ],
  "lock": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|displayName|string|true|none|none|
|orgId|string(uuid)|true|none|none|
|bio|string¦null|false|none|none|
|roles|[string]|true|none|none|
|lock|boolean|false|none|none|

<h2 id="tocS/RegisterVoteDTO">RegisterVoteDTO</h2>

<a id="schemaregistervotedto"></a>
<a id="schema/RegisterVoteDTO"></a>
<a id="tocSregistervotedto"></a>
<a id="tocsregistervotedto"></a>

```json
{
  "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
  "voteButton": "string",
  "comment": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|voteId|string(uuid)|false|none|none|
|voteButton|string¦null|false|none|none|
|comment|string¦null|false|none|none|

<h2 id="tocS/Reply">Reply</h2>

<a id="schemareply"></a>
<a id="schema/Reply"></a>
<a id="tocSreply"></a>
<a id="tocsreply"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "discussionId": "9a94c521-c61a-42fa-ab06-09bac5ba5181",
  "body": "string",
  "postedBy": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "mentions": [
    "string"
  ],
  "tags": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|discussionId|string(uuid)|false|none|none|
|body|string¦null|false|none|none|
|postedBy|string¦null|false|none|none|
|timestamp|string(date-time)|false|none|none|
|mentions|[string]¦null|false|none|none|
|tags|[string]¦null|false|none|none|

<h2 id="tocS/SPDTO">SPDTO</h2>

<a id="schemaspdto"></a>
<a id="schema/SPDTO"></a>
<a id="tocSspdto"></a>
<a id="tocsspdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "spStart": "2019-08-24T14:15:22Z",
  "spDescription": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|spStart|string(date-time)|false|none|none|
|spDescription|string¦null|false|none|none|

<h2 id="tocS/Screen">Screen</h2>

<a id="schemascreen"></a>
<a id="schema/Screen"></a>
<a id="tocSscreen"></a>
<a id="tocsscreen"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "baseTarget": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "name": "string",
    "type": "string",
    "targetGenes": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "accessionNumber": "string",
        "gene": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
          "accessionNumber": "string",
          "geneName": "string",
          "function": "string",
          "product": "string",
          "functionalCategory": "string",
          "geneExternalIds": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "externalIdRef": "string",
              "externalId": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "genePublicData": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "type": "string",
            "proteomics": "string",
            "mutant": "string",
            "comments": "string",
            "start": "string",
            "end": "string",
            "orientation": "string",
            "geneLength": "string",
            "location": "string",
            "geneSequence": "string",
            "molecularMass": "string",
            "isoelectricPoint": "string",
            "proteinLength": "string",
            "proteinSequence": "string",
            "pfam": "string",
            "m/Leprae": "string",
            "m/Marinum": "string",
            "m/Smegmatis": "string",
            "cryo": "string",
            "xRay": "string",
            "model": "string",
            "ligand": "string"
          },
          "geneEssentiality": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "classification": "string",
              "condition": "string",
              "strain": "string",
              "method": "string",
              "reference": "string",
              "notes": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinProduction": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "production": "string",
              "method": "string",
              "purity": "string",
              "date": "2019-08-24T14:15:22Z",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneProteinActivityAssay": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "activity": "string",
              "type": "string",
              "throughput": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneCRISPRiStrain": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "crispRiStrain": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneResistanceMutation": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "mutation": "string",
              "isolate": "string",
              "parentStrain": "string",
              "compound": "string",
              "shiftInMIC": "string",
              "org": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneVulnerability": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "rank": "string",
              "uVi": "string",
              "iVi": "string",
              "viRatio": "string",
              "vulnerabilityCondition": "string",
              "operon": "string",
              "confounded": "string",
              "shell2015Operon": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneHypomorphs": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "knockdownStrain": "string",
              "phenotype": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ],
          "geneUnpublishedStructures": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
              "geneAccessionNumber": "string",
              "organization": "string",
              "method": "string",
              "resolution": "string",
              "ligands": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "createdBy": "string"
            }
          ]
        },
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
      }
    ],
    "bucket": "string",
    "impactScore": 0,
    "impactComplete": 0,
    "likeScore": 0,
    "likeComplete": 0,
    "screeningScore": 0,
    "screeningComplete": 0,
    "structureScore": 0,
    "structureComplete": 0,
    "vulnerabilityRatio": 0,
    "vulnerabilityRank": 0,
    "htsFeasibility": 0,
    "sbdFeasibility": 0,
    "progressibility": 0,
    "safety": 0,
    "targetScorecard": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
      "targetName": "string",
      "targetScoreCardValues": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
          "targetName": "string",
          "question": {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "identification": "string",
            "module": "string",
            "subModule": "string",
            "questionBody": "string",
            "notes": "string",
            "toolTip": "string",
            "possibleAnswers": [
              "string"
            ]
          },
          "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
          "questionIdentification": "string",
          "questionModule": "string",
          "questionSubModule": "string",
          "answer": "string",
          "description": "string",
          "answerdBy": "string"
        }
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    },
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string",
    "background": "string",
    "enablement": "string",
    "strategy": "string",
    "challenges": "string"
  },
  "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
  "screenName": "string",
  "screenType": "string",
  "method": "string",
  "targetName": "string",
  "geneName": "string",
  "status": "string",
  "org": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "orgId": "25b2c2d5-a7fc-47d0-89e4-8709a1560bfa",
  "promotionDate": "2019-08-24T14:15:22Z",
  "promoter": "string",
  "screenSequences": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "method": "string",
      "protocol": "string",
      "library": "string",
      "scientist": "string",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "unverifiedHitCount": 0,
      "noOfCompoundsScreened": 0,
      "concentration": 0,
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string"
    }
  ],
  "validatedHits": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
      "targetName": "string",
      "library": "string",
      "source": "string",
      "method": "string",
      "mic": 0,
      "micCondition": "string",
      "iC50": 0,
      "clusterGroup": 0,
      "compoundId": "7bd121cb-f376-4a53-aaa0-99a4ed392648",
      "compound": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "externalCompoundIds": "string",
        "smile": "string",
        "molWeight": "string",
        "molArea": "string",
        "createdAt": "2019-08-24T14:15:22Z"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "createdBy": "string",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "vote": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
        "positive": 0,
        "neutral": 0,
        "negative": 0,
        "isVotingAllowed": true,
        "lastModified": "2019-08-24T14:15:22Z",
        "voters": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
            "voterEmail": "string",
            "votedPositive": true,
            "votedNeutral": true,
            "votedNegative": true,
            "votedOn": "2019-08-24T14:15:22Z",
            "comment": "string"
          }
        ],
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    }
  ],
  "notes": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|strainId|string(uuid)|false|none|none|

<h2 id="tocS/ScreenSequence">ScreenSequence</h2>

<a id="schemascreensequence"></a>
<a id="schema/ScreenSequence"></a>
<a id="tocSscreensequence"></a>
<a id="tocsscreensequence"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "screenId": "0a3dc761-8e38-4c8a-ab93-391c2eb0c3c1",
  "targetName": "string",
  "method": "string",
  "protocol": "string",
  "library": "string",
  "scientist": "string",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z",
  "unverifiedHitCount": 0,
  "noOfCompoundsScreened": 0,
  "concentration": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|screenId|string(uuid)|false|none|none|
|targetName|string¦null|false|none|none|
|method|string¦null|false|none|none|
|protocol|string¦null|false|none|none|
|library|string¦null|false|none|none|
|scientist|string¦null|false|none|none|
|startDate|string(date-time)|false|none|none|
|endDate|string(date-time)¦null|false|none|none|
|unverifiedHitCount|integer(int32)|false|none|none|
|noOfCompoundsScreened|integer(int32)|false|none|none|
|concentration|number(float)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|createdBy|string¦null|false|none|none|

<h2 id="tocS/Sequence">Sequence</h2>

<a id="schemasequence"></a>
<a id="schema/Sequence"></a>
<a id="tocSsequence"></a>
<a id="tocssequence"></a>

```json
{
  "header": {
    "items": [
      {}
    ]
  },
  "data": {
    "characters": "string"
  }
}

```

### Properties

*None*

<h2 id="tocS/Target">Target</h2>

<a id="schematarget"></a>
<a id="schema/Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
  "name": "string",
  "type": "string",
  "targetGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "accessionNumber": "string",
      "gene": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
        "accessionNumber": "string",
        "geneName": "string",
        "function": "string",
        "product": "string",
        "functionalCategory": "string",
        "geneExternalIds": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "externalIdRef": "string",
            "externalId": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "genePublicData": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
          "geneAccessionNumber": "string",
          "type": "string",
          "proteomics": "string",
          "mutant": "string",
          "comments": "string",
          "start": "string",
          "end": "string",
          "orientation": "string",
          "geneLength": "string",
          "location": "string",
          "geneSequence": "string",
          "molecularMass": "string",
          "isoelectricPoint": "string",
          "proteinLength": "string",
          "proteinSequence": "string",
          "pfam": "string",
          "m/Leprae": "string",
          "m/Marinum": "string",
          "m/Smegmatis": "string",
          "cryo": "string",
          "xRay": "string",
          "model": "string",
          "ligand": "string"
        },
        "geneEssentiality": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "classification": "string",
            "condition": "string",
            "strain": "string",
            "method": "string",
            "reference": "string",
            "notes": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinProduction": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "production": "string",
            "method": "string",
            "purity": "string",
            "date": "2019-08-24T14:15:22Z",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneProteinActivityAssay": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "activity": "string",
            "type": "string",
            "throughput": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneCRISPRiStrain": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "crispRiStrain": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneResistanceMutation": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "mutation": "string",
            "isolate": "string",
            "parentStrain": "string",
            "compound": "string",
            "shiftInMIC": "string",
            "org": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneVulnerability": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "rank": "string",
            "uVi": "string",
            "iVi": "string",
            "viRatio": "string",
            "vulnerabilityCondition": "string",
            "operon": "string",
            "confounded": "string",
            "shell2015Operon": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneHypomorphs": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "knockdownStrain": "string",
            "phenotype": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ],
        "geneUnpublishedStructures": [
          {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
            "geneAccessionNumber": "string",
            "organization": "string",
            "method": "string",
            "resolution": "string",
            "ligands": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "createdBy": "string"
          }
        ]
      },
      "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
    }
  ],
  "bucket": "string",
  "impactScore": 0,
  "impactComplete": 0,
  "likeScore": 0,
  "likeComplete": 0,
  "screeningScore": 0,
  "screeningComplete": 0,
  "structureScore": 0,
  "structureComplete": 0,
  "vulnerabilityRatio": 0,
  "vulnerabilityRank": 0,
  "htsFeasibility": 0,
  "sbdFeasibility": 0,
  "progressibility": 0,
  "safety": 0,
  "targetScorecard": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
    "targetName": "string",
    "targetScoreCardValues": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
        "targetName": "string",
        "question": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "identification": "string",
          "module": "string",
          "subModule": "string",
          "questionBody": "string",
          "notes": "string",
          "toolTip": "string",
          "possibleAnswers": [
            "string"
          ]
        },
        "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
        "questionIdentification": "string",
        "questionModule": "string",
        "questionSubModule": "string",
        "answer": "string",
        "description": "string",
        "answerdBy": "string"
      }
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "createdBy": "string"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string",
  "background": "string",
  "enablement": "string",
  "strategy": "string",
  "challenges": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|strainId|string(uuid)|false|none|none|
|name|string¦null|false|none|none|
|type|string¦null|false|none|none|
|targetGenes|[[TargetGene](#schematargetgene)]¦null|false|none|none|

<h2 id="tocS/TargetGene">TargetGene</h2>

<a id="schematargetgene"></a>
<a id="schema/TargetGene"></a>
<a id="tocStargetgene"></a>
<a id="tocstargetgene"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "targetId": "cbca1126-180e-4334-9df8-cf82289d378b",
  "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
  "accessionNumber": "string",
  "gene": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "accessionNumber": "string",
    "geneName": "string",
    "function": "string",
    "product": "string",
    "functionalCategory": "string",
    "geneExternalIds": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "externalIdRef": "string",
        "externalId": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "genePublicData": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
      "geneAccessionNumber": "string",
      "type": "string",
      "proteomics": "string",
      "mutant": "string",
      "comments": "string",
      "start": "string",
      "end": "string",
      "orientation": "string",
      "geneLength": "string",
      "location": "string",
      "geneSequence": "string",
      "molecularMass": "string",
      "isoelectricPoint": "string",
      "proteinLength": "string",
      "proteinSequence": "string",
      "pfam": "string",
      "m/Leprae": "string",
      "m/Marinum": "string",
      "m/Smegmatis": "string",
      "cryo": "string",
      "xRay": "string",
      "model": "string",
      "ligand": "string"
    },
    "geneEssentiality": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "classification": "string",
        "condition": "string",
        "strain": "string",
        "method": "string",
        "reference": "string",
        "notes": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneProteinProduction": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "production": "string",
        "method": "string",
        "purity": "string",
        "date": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneProteinActivityAssay": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "activity": "string",
        "type": "string",
        "throughput": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneCRISPRiStrain": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "crispRiStrain": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneResistanceMutation": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "mutation": "string",
        "isolate": "string",
        "parentStrain": "string",
        "compound": "string",
        "shiftInMIC": "string",
        "org": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneVulnerability": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "rank": "string",
        "uVi": "string",
        "iVi": "string",
        "viRatio": "string",
        "vulnerabilityCondition": "string",
        "operon": "string",
        "confounded": "string",
        "shell2015Operon": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneHypomorphs": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "knockdownStrain": "string",
        "phenotype": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ],
    "geneUnpublishedStructures": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "geneId": "856784b5-c022-4da7-b7db-8943699c39a9",
        "geneAccessionNumber": "string",
        "organization": "string",
        "method": "string",
        "resolution": "string",
        "ligands": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "createdBy": "string"
      }
    ]
  },
  "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|targetId|string(uuid)|false|none|none|
|geneId|string(uuid)|false|none|none|
|accessionNumber|string¦null|false|none|none|

<h2 id="tocS/TargetImportDTO">TargetImportDTO</h2>

<a id="schematargetimportdto"></a>
<a id="schema/TargetImportDTO"></a>
<a id="tocStargetimportdto"></a>
<a id="tocstargetimportdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "genePromtionRequestGenes": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "geneId": "856784b5-c022-4da7-b7db-8943699c39a9"
    }
  ],
  "targetName": "string",
  "targetType": "string",
  "genePromotionRequestStatus": "string",
  "genePromotionRequestValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "genePromotionRequestId": "ef12751d-8cf1-4196-aef2-f96d96d25b46",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ],
  "bucket": "string",
  "simpleProteinAccessionNumber": "string",
  "impactScore": 0,
  "impactComplete": 0,
  "likeScore": 0,
  "likeComplete": 0,
  "screeningScore": 0,
  "screeningComplete": 0,
  "structureScore": 0,
  "structureComplete": 0,
  "vulnerabilityRatio": 0,
  "vulnerabilityRank": 0,
  "htsFeasibility": 0,
  "sbdFeasibility": 0,
  "progressibility": 0,
  "safety": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|genePromtionRequestGenes|[[GenePromtionRequestGene](#schemagenepromtionrequestgene)]¦null|false|none|none|

<h2 id="tocS/TargetScoreCardValue">TargetScoreCardValue</h2>

<a id="schematargetscorecardvalue"></a>
<a id="schema/TargetScoreCardValue"></a>
<a id="tocStargetscorecardvalue"></a>
<a id="tocstargetscorecardvalue"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
  "targetName": "string",
  "question": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "identification": "string",
    "module": "string",
    "subModule": "string",
    "questionBody": "string",
    "notes": "string",
    "toolTip": "string",
    "possibleAnswers": [
      "string"
    ]
  },
  "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
  "questionIdentification": "string",
  "questionModule": "string",
  "questionSubModule": "string",
  "answer": "string",
  "description": "string",
  "answerdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|targetScorecardId|string(uuid)|false|none|none|
|targetName|string¦null|false|none|none|

<h2 id="tocS/TargetScorecard">TargetScorecard</h2>

<a id="schematargetscorecard"></a>
<a id="schema/TargetScorecard"></a>
<a id="tocStargetscorecard"></a>
<a id="tocstargetscorecard"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "targetID": "cbb7866b-27ff-4bfe-b93a-e06c7aea73b6",
  "targetName": "string",
  "targetScoreCardValues": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "targetScorecardId": "b77ee3ac-0dd1-477f-8ec3-dc97fdae7d31",
      "targetName": "string",
      "question": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identification": "string",
        "module": "string",
        "subModule": "string",
        "questionBody": "string",
        "notes": "string",
        "toolTip": "string",
        "possibleAnswers": [
          "string"
        ]
      },
      "questionId": "ffa0420e-f70b-4e5b-99a0-434bff860467",
      "questionIdentification": "string",
      "questionModule": "string",
      "questionSubModule": "string",
      "answer": "string",
      "description": "string",
      "answerdBy": "string"
    }
  ],
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|targetID|string(uuid)|false|none|none|
|targetName|string¦null|false|none|none|
|targetScoreCardValues|[[TargetScoreCardValue](#schematargetscorecardvalue)]¦null|false|none|none|

<h2 id="tocS/TargetSummaryDTO">TargetSummaryDTO</h2>

<a id="schematargetsummarydto"></a>
<a id="schema/TargetSummaryDTO"></a>
<a id="tocStargetsummarydto"></a>
<a id="tocstargetsummarydto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "background": "string",
  "enablement": "string",
  "strategy": "string",
  "challenges": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|background|string¦null|false|none|none|
|enablement|string¦null|false|none|none|
|strategy|string¦null|false|none|none|
|challenges|string¦null|false|none|none|

<h2 id="tocS/UnlinkedProjectCreateDTO">UnlinkedProjectCreateDTO</h2>

<a id="schemaunlinkedprojectcreatedto"></a>
<a id="schema/UnlinkedProjectCreateDTO"></a>
<a id="tocSunlinkedprojectcreatedto"></a>
<a id="tocsunlinkedprojectcreatedto"></a>

```json
{
  "projectName": "string",
  "representationStructure": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "strainId": "c68d9ccb-3cae-4d38-a081-a863f8e0ff98",
    "externalCompoundIds": "string",
    "smile": "string",
    "molWeight": "string",
    "molArea": "string",
    "createdAt": "2019-08-24T14:15:22Z"
  },
  "representationStructureSMILE": "string",
  "representationStructureExternalCompoundIds": "string",
  "primaryOrg": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "supportingOrgs": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "alias": "string",
      "address": "string"
    }
  ],
  "fhaStart": "2019-08-24T14:15:22Z",
  "fhaDescription": "string",
  "molWeight": "string",
  "molArea": "string",
  "mic": 0,
  "iC50": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectName|string¦null|false|none|none|

<h2 id="tocS/UserDto">UserDto</h2>

<a id="schemauserdto"></a>
<a id="schema/UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "id": "string",
  "displayName": "string",
  "email": "string",
  "roles": [
    "string"
  ],
  "bio": "string",
  "org": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "alias": "string",
    "address": "string"
  },
  "lock": true,
  "archived": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string¦null|false|none|none|
|displayName|string¦null|false|none|none|
|email|string|true|none|none|
|roles|[string]¦null|false|none|none|
|bio|string¦null|false|none|none|

<h2 id="tocS/Vote">Vote</h2>

<a id="schemavote"></a>
<a id="schema/Vote"></a>
<a id="tocSvote"></a>
<a id="tocsvote"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "elementId": "7d5101f9-b2fe-42c1-88fa-7ad5ef49633e",
  "positive": 0,
  "neutral": 0,
  "negative": 0,
  "isVotingAllowed": true,
  "lastModified": "2019-08-24T14:15:22Z",
  "voters": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
      "voterEmail": "string",
      "votedPositive": true,
      "votedNeutral": true,
      "votedNegative": true,
      "votedOn": "2019-08-24T14:15:22Z",
      "comment": "string"
    }
  ],
  "createdAt": "2019-08-24T14:15:22Z",
  "createdBy": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|elementId|string(uuid)|false|none|none|
|positive|integer(int32)|false|none|none|
|neutral|integer(int32)|false|none|none|
|negative|integer(int32)|false|none|none|
|isVotingAllowed|boolean|false|none|none|
|lastModified|string(date-time)|false|none|none|
|voters|[[Voter](#schemavoter)]¦null|false|none|none|

<h2 id="tocS/Voter">Voter</h2>

<a id="schemavoter"></a>
<a id="schema/Voter"></a>
<a id="tocSvoter"></a>
<a id="tocsvoter"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "voteId": "fe9ca470-231f-4db6-a89a-539efac0ad92",
  "voterEmail": "string",
  "votedPositive": true,
  "votedNeutral": true,
  "votedNegative": true,
  "votedOn": "2019-08-24T14:15:22Z",
  "comment": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|voteId|string(uuid)|false|none|none|
|voterEmail|string¦null|false|none|none|
|votedPositive|boolean|false|none|none|
|votedNeutral|boolean|false|none|none|
|votedNegative|boolean|false|none|none|
|votedOn|string(date-time)|false|none|none|
|comment|string¦null|false|none|none|

