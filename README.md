# alexa-skill-tutorial
A self-hosted demo skill for amazon alexa based on terraform and typescript.

## Prerequisites

To set up the whole environment you will need:

- Account with [Amazon Web Services (AWS) - Cloud Computing Services](https://aws.amazon.com). Make sure you set up [Multi-Factor Authentication](https://aws.amazon.com/iam/details/mfa/) to ensure account security!
- [Node.js® JavaScript runtime](https://nodejs.org/en/) installed on your local machine.
- [AWS Command Line Interface](https://aws.amazon.com/cli/) installed on your local machine.
- [Terraform](https://learn.hashicorp.com/terraform/getting-started/install.html) installed on your local machine.

This tutorial assumes that you have all this set up and ready.
## Initial Setup

### AWS Credentials for terraform

- In AWS Console: go to IAM, create a new user and create an access key for that user
- Make sure this terraform user has the required permissions to execute the instructions during `terraform apply`.
- On your local machine: run `aws configure` and enter the access keys incl. secret key as prompted.

### Terraform Initialization

- in `infrastructure/state.tf`: change the values according to your setup to use [another (remote) backend](https://www.terraform.io/docs/backends/index.html) or remove this file if you want to keep the terraform state locally.
- in `./infrastructure`: run `terraform init`
