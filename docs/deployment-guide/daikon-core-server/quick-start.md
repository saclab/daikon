# Quick Start

Clone the **daikon-core-server** github to your local workspace

```bash
git clone https://github.com/saclab/daikon-core-server.git
```

In the project directory create a .env file
The env file should contain the following params.

```bash
AZURE_VAILD_AUDIENCE=api://<azure audience id>
AZURE_AUTHORITY=https://login.microsoftonline.com/<authority id>
PGPASSWORD=<?>
PGPGUSER=tpt_user
PGSQL_CONNECTION_STRING=Host=project_db;Port=5432;Database=tpt_db;
CORS_ORIGINS=http://localhost:3000
```

User authorization is done using an AD/SSO.  
Out of the box, the server is configured to use Microsoft Azure AD and the app needs to be registerd with the provider.

To register an application with Azure AD and create a service principal sign in to your Azure Account through the Azure portal.  
Select Azure Active Directory > Select App registrations > Select New registration.
Name the application, for example "example-app". Select a supported account type, which determines who can use the application. Under Redirect URI, select Web for the type of application you want to create. Enter the URI where the access token is sent to.  
After setting the values, select Register. More information can be found at [Azure Docs](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)

:::tip PostgresSQL Server
The docker-compose.dev script automatically creates a PostgresSQL Server container with default values and using PGPGUSER, PGPASSWORD from the .env file
:::


Add yourself as a user, default users are maintained in ***Data/Sample/appUsers.yaml***
```yaml
Name: InitialAppUsers
Type: AppUsers
Data:
  - DisplayName : John Doe
    UserName: john
    Email: john@example.com
```
Add yourself to the Administrator group, which is maintained in ***Data/Sample/appAdmins.yaml***
```yaml
Name: InitialAppAdmins
Type: string
Data:
  - john@example.com
```
:::tip Data/Sample

Files inside Data/Sample are sourced by the app to create default values on the first run.  
This is a good place to define super admins who need to access the app as soon as it is setup

:::

The container is ready to be built up.  
Start up with docker.  
```bash
docker compose -f docker-compose-dev.yml up
```

Daikon Server Core should start up in a development environment
```bash
daikon_server_core_dev  | info: Microsoft.Hosting.Lifetime[0]
daikon_server_core_dev  |       Hosting environment: Development
daikon_server_core_dev  | info: Microsoft.Hosting.Lifetime[0]
daikon_server_core_dev  |       Content root path: /daikon-server
```
:::tip API Documentation

The server generates a SWAGGER UI to expose the APIs offered at
[http://localhost:5005/swagger/index.html](http://localhost:5005/swagger/index.html)
:::

> At this point, the daikon-server-core runs with the bare minimum configurations in a development env.  
You can test the APIS using Postman or move to deploying the daikon-web-client.
