## Preparation

### Set up azure cli and terraform in Github Codespaces
Step 1: Create .devcontainer/devcontainer.json
Step 2: add the below content in the json file
```bash
{
  "name": "Azure Codespace",
  "features": {
    "ghcr.io/devcontainers/features/azure-cli:1": {},
    "ghcr.io/devcontainers/features/terraform:1": {},
    "ghcr.io/devcontainers/features/aws-cli:1": {}
  }
}
```
Step 3: After editing devcontainer.json
- Push changes to GitHub
- In Codespace click Ctrl + Shift + P and type Codespaces: Rebuild Container and press enter

### Set up azure login in Github Codespaces
Step 1: Run the below command in the Codespace terminal
```bash
az login --use-device-code
```
Step 2: After login, set up the correct subscription, run below command in terminal to see all the available subscription
```bash
az account list --output table
```
Step 3: Set the correct subscription explicitly
```bash
az account set --subscription <subscriptionid>
```
- Verify the subscription has been set up correctly
```bash
az account show --query "{name:name, id:id, user:user.name}"

or 
echo "SUBSCRIPTION_ID=$SUBSCRIPTION_ID"
```
Step 4: Register resource provider if it is not registered.
- ✅ Check provider status
```bash
az provider show \
  --namespace Microsoft.Storage \
  --query "registrationState"

```
- ❌ If it says: NotRegistered
-🔧 Fix (this is safe)
```bash
az provider show --namespace Microsoft.Storage --query "registrationState"

```
- Wait 1–2 minutes, then confirm
```bash
az provider show --namespace Microsoft.Storage --query "registrationState"
```
- It must say: Registered

### Enable App Service for azure subscription

Step 1: Register Microsoft.Web
- Run this once per subscription:
```bash
az provider register --namespace Microsoft.Web
```
Step 2: Wait for registration to complete
- Check status:

```bash
az provider show \
  --namespace Microsoft.Web \
  --query "registrationState" \
  --output tsv
```
- You should see: Registered

### Codespaces: Rebuild Container
```bash
az login
az account list -o table
az account set --subscription <SUB_ID> 
```

### Generate unique suffix for resource naming
```bash
RANDOM_SUFFIX=$(openssl rand -hex 3)
```
### Set environment variables for Azure resources
```bash
export SUBSCRIPTION_ID=$(az account show --query id --output tsv)
export RESOURCE_GROUP="rg-storage-demo-$(openssl rand -hex 3)"
export LOCATION="eastus"
```

### Create storage account if necessary for the project
```bash
export STORAGE_ACCOUNT="sa$(openssl rand -hex 6)" 
```

### Create resource group for storage resources
```bash
az group create \
    --name ${RESOURCE_GROUP} \
    --location ${LOCATION} \
    --tags purpose=demo environment=learning

echo "✅ Resource group created: ${RESOURCE_GROUP}"
echo "✅ Storage account name: ${STORAGE_ACCOUNT}"
```


### Project studied but yet to run

#### Container
- simple-web-container-aci-registry
- simple-container-deployment-container-apps
- secure-serverless-microservices
- serverless-containers-event-grid-aci --check event grid knowledge


#### Event-Grid
- simple-event-notifications-event-grid-functions
