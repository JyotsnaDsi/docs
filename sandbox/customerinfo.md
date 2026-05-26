# Customer Information & Required Details

To proceed with onboarding and ensure a smooth setup, please provide the following details: 

## Authorized Signatory Details 

Please provide the following details for the authorized signatory. This information is required for the consent form and to proceed with documentation.   

1\. Company Legal Name

2\. Authorized Representative

3\. Designation

4\. Contact Email

5\. Contact Number

6\. Company Address 

**_Fill the following form_** **_to proceed :_** [**==Authorized Signatory Details==**](https://docs.google.com/forms/d/e/1FAIpQLSeul8ozeo9CY4-RyVbGa9ESfBQgrxS0gwmXOUSS1dwAuM4IKg/viewform?usp=sharing&ouid=117817350829885918313)

Signing the consent form is mandatory to proceed with the setup, as it helps ensure customer integrity.Please find the sample consent form details at the link below. 

[**Consent Form**](https://docs.google.com/document/d/1GF5vob2VHyo8xoExFnWe3Trbpwuc5kFP1zHMwxV4gso/edit?usp=sharing)

## Recording Upload Details 

To enable call recording storage, please provide details for your preferred storage platform: 

### Option 1: Amazon S3 (AWS)

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- S3U_BUCKET_NAME
- S3U_BUCKET_FOLDER_NAME
- S3U_AWS_REGION

### Option 2: Google Cloud Storage (GCP) 

- Service account json file

### Option 3: Azure Blob Storage (Microsoft Azure) 

- Container name
- Storage account name
- Storage account Key 

### Option 4: Custom / Other Storage Endpoint

If you intend to use a custom storage endpoint please adhere to the following request/ response format:

```
HTTP Method  

Post

HTTP Request Headers 

File-Name: contains the name of the file. For call recordings, the name will be of the format "<call_uuid>.<wav|mp3>"
Content-Type: application/octet-stream 

Request Body

The file contents will be sent as binary data in the request body.  
We can also enable brotli compression for file contents.  

Expected Response

Response Status Code: 200
Response Body: ok
Response Content Type: text/plain
```
## Business Use Case Details 

- Use Case:
- Expected Call Volume (Daily/Monthly):
- Type of Campaign (Inbound / Outbound / Both):

## Go-Live Requirements

- Expected go-live date : 

#### **Compliance & Consent**

- Confirmation that all end-users have provided explicit opt-in consent (Yes/No):
- Consent Collection Method (e.g., Web Form, CRM, offline forms ):
