---
title: "Automating GitHub Environment Replication with gh CLI"
date: "2026-01-02"
author: "Mahesh Vaidya"
description: "Streamline GitHub Actions environment setup by automating variable replication from a reference environment using gh CLI, reducing manual errors and saving time."
category: "DevOps"
tags: ["GitHub Actions", "Automation", "gh CLI", "CI/CD"]
---

## The Problem with Managing Multiple Environments

GitHub Actions provides a powerful construct called **Environments** that allows you to scope variables to specific deployment contexts. This is invaluable when you need different configuration values across environments.

For example, `AWS_ACCOUNT_ID` might differ between your `DEV` and `PROD` environments. Instead of defining separate variables like `DEV_AWS_ACCOUNT_ID` and `PROD_AWS_ACCOUNT_ID`, you can define a single `AWS_ACCOUNT_ID` variable scoped to each environment. This keeps your Actions code clean and maintainable.

However, when you need to create a new environment with the same variables as an existing one, the manual process becomes tedious and error-prone:

- Copy variables one by one
- Risk missing critical variables
- Manually update values for the new environment
- Repeat for every new environment

## The Solution: Automated Environment Replication

I've developed a streamlined approach using the **GitHub CLI (`gh`)** to automatically replicate environments. Here's how it works:

### Step 1: Extract Variables from a Reference Environment

First, assume you have a `REFERENCE` environment that contains all the variables you want to replicate. Extract the variable names and values using:

```bash
gh variable list --env REFERENCE --repo forvaidya/personal-try \
  --json name,value | jq -r '.[] | "\(.name)=\(.value)"'
```

Expected output:
```
AWS_ACCOUNT_ID=FOO-BAR
ECR_REPOSITORY=SOME-VALUE
```

To save these to a file for later use:

```bash
gh variable list --env REFERENCE --repo forvaidya/personal-try \
  --json name,value | jq -r '.[] | "\(.name)=\(.value)"' > key-value.txt
```

This creates a `key-value.txt` file with all environment variables.

### Step 2: Create the New Environment

Create your new environment (e.g., `staging`) using the GitHub API:

```bash
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/forvaidya/personal-try/environments/staging
```

This endpoint creates a new environment in your repository.

### Step 3: Populate Variables in the New Environment

Now upload all the variables from your `key-value.txt` file to the new environment:

```bash
cat key-value.txt | gh variable set --env staging --repo forvaidya/personal-try -f -
```

The `-f -` flag tells `gh variable set` to read from standard input, allowing you to pipe the file contents directly.

**Optional:** Before executing this command, you can edit `key-value.txt` to customize values specific to the new environment.

## Why This Approach Works

- **No Missing Variables:** By extracting from a reference environment, you ensure nothing is overlooked.
- **Reduced Manual Effort:** Three simple commands replace the tedious manual process.
- **Error Prevention:** Automation eliminates copy-paste mistakes.
- **Consistency:** New environments maintain the same structure as the reference.
- **Flexibility:** You can edit the file before uploading to customize values per environment.

## Practical Example

Let's say you're setting up a new `staging` environment based on your `prod` environment:

```bash
# Step 1: Extract variables from prod
gh variable list --env prod --repo myorg/myrepo \
  --json name,value | jq -r '.[] | "\(.name)=\(.value)"' > staging-vars.txt

# Step 2: Create the staging environment
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/myorg/myrepo/environments/staging

# Step 3: Edit values if needed (optional)
# nano staging-vars.txt

# Step 4: Upload to staging
cat staging-vars.txt | gh variable set --env staging --repo myorg/myrepo -f -
```

Done! Your `staging` environment now has all the same variables as `prod`, with values you can customize.

## Prerequisites

- **GitHub CLI (`gh`)** installed and authenticated
- **jq** for JSON parsing (optional but recommended)
- Repository push access to create environments

## Conclusion

By automating environment replication with `gh CLI`, you eliminate manual configuration errors and significantly reduce setup time for new environments. This approach scales beautifully as your number of environments grows, making it especially valuable in complex CI/CD pipelines.

---

**Originally published on Medium:** [Automating GitHub Environment Replication](https://medium.com/@forvaidya/automating-github-environment-replication-c47ae959c2fc)
