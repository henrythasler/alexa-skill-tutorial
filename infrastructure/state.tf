# Optional:
# this is where we store the terraform-state.
# Change at least `bucket` to match your account's environment.
# Remove the whole terraform-entry to use a local state.

terraform {
  backend "s3" {
    bucket         = "terraform-state-0000"
    key            = "alexa/basic.tutorial/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}
