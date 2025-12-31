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
Step 2: After login, set up the correct subscription, run below command in terminal to see all the avilable subscription
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

```
Step 4: Register resource provider if it is not registered.
- ✅ Check provider status
```bash
az account show --query "{name:name, id:id, user:user.name}"
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