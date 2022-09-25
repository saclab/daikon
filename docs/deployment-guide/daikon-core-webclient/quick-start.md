# Quick Start

Clone the **daikon-web-client-core** github to your local workspace

```bash
git clone https://github.com/saclab/daikon-core-webapp.git
```

The webclient needs to be configured with the following minimum details  
- Microsoft AD paramaters
- Address of daikon server core web api

| Paramater   | Description |
| ----------- | ----------- |
|  REACT_APP_MSAL_CLIENT_ID | Azure AD App client id |
|  REACT_APP_MSAL_CLIENT_SCOPE | Azure AD App client scope |
|  REACT_APP_MSAL_TENANT_AUTHORITY_URI | Azure AD App client tenant authority uri |
|  REACT_APP_MSAL_CACHE_LOCATION | Cookie or Session |
|  REACT_APP_MSAL_LOGIN_REDIRECT_URI | Root of domain where web-client is hosted |
|  REACT_APP_WEB_API_BASE_URI | Address of daikon server /api |

The configuration must be places in ***src/config.js***  
Example Configuration:

```javascript
export const appConfig = {
  REACT_APP_MSAL_CLIENT_ID: "",
  REACT_APP_MSAL_CLIENT_SCOPE: "",
  REACT_APP_MSAL_TENANT_AUTHORITY_URI: "",
  REACT_APP_MSAL_CACHE_LOCATION: "",
  REACT_APP_MSAL_AUTH_STATE_IN_COOKIE: "",
  REACT_APP_MSAL_LOGIN_REDIRECT_URI: "",
  REACT_APP_WEB_API_BASE_URI: "",
};
```

The container is ready to be built up.  
Start up with docker.  
```bash
docker compose -f docker-compose-dev.yml up
```


> At this point, the daikon-core-webapp runs with the bare minimum configurations in a development env.  
Note that an instance of daikon-core-server must be running to make API calls.
