# Single Page App for running MMT Customer Workshops

## Workflow

  1. Customer fills out form with details and registers for waitlist
  1. Form is sent to API Gateway + Lambda, where it's sent via email (SES) to mmt-workshops@amazon.com (this is an open main list)
  1. Customer PII data is not stored or retained in storage as it lands in email

## Creating your own workshop event

  1. Change the index.html to your workshop details and host it from CloudFront w/ S3 bucket.
  1. Recommend not to change backend, but ask injakwak@ if u want to know how it works

authors: babakwak
