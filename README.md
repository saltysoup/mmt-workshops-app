# Single Page App for running MMT Customer Workshops

## Workflow

  1. Customer fills out form with details and registers for waitlist
  1. Form is sent to API Gateway + Lambda, where it's sent via email (SES) to mmt-workshops@amazon.com (this is an open main list)
  1. Copy of registration details is posted in the mmt-workshops chime group via webhook
  1. Customer PII data is not stored or retained in persistent storage as it lands in email/chime

## Creating your own workshop event

  1. Create a new branch or fork with appropriate name
  1. Change the index.html to your workshop details and host it from CloudFront w/ S3 bucket
    1. If you'd like a vanity URL such as yourEvent.awsevents.io, see the following:
      1. After npm run build, copy the contents of dist dir to your s3 bucket
      1. Ping injakwak@ with the name (and prefix if existing) of your S3 bucket and what subdomain you'd like
      1. injakwak@ to create new CloudFront, configure CNAME and ACM cert and respond with origin access identity (for your bucket policy)
      1. Test new vanity URL
  1. Recommend not to change backend, but ask injakwak@ if u want to know how it works

authors: babakwak
