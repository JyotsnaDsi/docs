# Regulatory Compliance Requirement (TRAI Guidelines)

All commercial communications in India are governed by the Telecom Regulatory Authority of India.

## Key Concepts

###  DND

- **DND (Do Not Disturb)** = Customers who have opted out of promotional communication

### Types of Communication

|     |     |     |     |
| --- | --- | --- | --- |
| **Type** | **Purpose** | **Target Audience** | **Compliance Requirement** |
| **Promotional / Telemarketing** | To promote products, services, offers, or brand awareness | Customers who have not blocked promotional calls in DND registry | Consent mandatory; |
| **Service** | To provide information related to an existing service | All existing customers | **Inferred:** (e.g., post product/service purchase info) – No consent required  **Explicit:** (e.g., ongoing purchase, drop-off etc.) – Consent mandatory  Content must be strictly service-related |
| **Transactional** | To send critical, real-time information within 30 minutes of the transaction | All customers, including DND-registered | High-priority; must not contain promotional material |

## Use of Designated Number Series

As per applicable regulations issued by the Telecom Regulatory Authority of India (TRAI), all businesses engaging in outbound calling must adhere to the following guidelines to ensure compliance:

- **140-series numbers** must be used for all **telemarketing** or **promotional calls**.
- **160-series numbers** are designated for **transactional** or **service-related communications**. 

The use of regular phone numbers for such activities is not permitted and may result in regulatory non-compliance.

Please ensure that the appropriate number series is used based on the nature of the call  to remain compliant with regulations.

## Usage in Demo vs Production Environments

### POC / Sandbox Usage

- The platform is strictly for internal testing purposes.
- No calls should be made to real customers or end users.
- The platform must not be used for production, promotional, marketing, or support activities.
- **Please ensure that the numbers being dialed are known/test numbers where the recipients are aware and won’t raise any complaints**.

### Production Usage

- Once moving to production, IraVoice will handle live calls and real users as per your requirements.
- Approved configurations and integrations may be enabled.
- You are responsible for ensuring that **all** **call recipients have provided the necessary consent.**
- If you are using the production setup for running live campaigns, please share the CRM or any relevant screenshots before initiating the calls. 

## Pre-Go-Live Validation

Before initiating production campaigns, customers are required to share:

- Sample consent proofs from the CRM system demonstrating that end users have explicitly opted in to receive outbound calls.

Our team needs to verify that these samples contain the required customer information (like **name, phone number, date**, etc), which we must be able to share with the SIP trunk provider whenever we receive a complaint.

This is necessary to validate readiness and ensure compliance alignment.

## Audit and Complaint Handling 

In the event of a complaint, consent records may need to be shared with the SIP trunk provider or relevant authorities.

:::info
### Key Information

- **Response Time**: 2 working days from receiving the audit notice
- **Required Action**: Provide proof of recipient consent (opt-in)
- **Consequence of Non-Response**: Number disconnection, temporary or permanent account suspension depending on severity
:::

### Steps to Take If You Receive an Audit Notice

When Epicode notifies you of a call audit, follow these steps:

1. Verify the audit details: 
   Epicode will provide:
  - Your Epicode number (caller)
  - Recipient’s phone number (callee)
  - Call Date & Time
  - Complaint Date & Time
2. Collect consent evidence: Provide documentation showing the recipient explicitly agreed to receive calls from your organization.
3. Submit the proof within 2 working  days: Ensure all required information is included (see “Consent Evidence Requirements” below).
4. Remove the recipient from your calling list: Prevent repeat complaints by ensuring the number is not called again.

**Important: Using a different Epicode number to contact the same recipient may be treated as a compliance violation and could disrupt your service.**

### Consent Evidence Requirements

Your documentation must clearly demonstrate the recipient agreed to receive calls. Acceptable evidence includes:

- Required Elements:
  - Company name or logo
  - Recipient name
  - Recipient phone number
  - Date consent was provided
  - Purpose of consent (marketing/promotional communication)
  - Mode of consent capture (web form / app / SMS / written form)  
    
- Accepted Formats:
  - CRM screenshots displaying the above details
  - Signed consent forms
  - Digital opt-in records
  -        

:::warning
Note: 
- Screenshot must be unedited and authentic.
- Submit clear, high-quality images with all elements clearly visible.
- Excel sheets, PDFs, Word documents, or manually prepared files **will not** be accepted
:::

### Audit Process

1. A recipient files a complaint with their telecom provider.
2. The telecom provider identifies Epicode as the originating service.
3. Epicode’s compliance team identifies the customer responsible.
4. The customer submits consent evidence within 2 working days.
5. Epicode reviews the evidence and forwards it to the telecom provider.
6. The customer is notified once the audit is closed.

## Compliance Responsibility

**TRAI regulations are strictly enforced**. Non-compliance may result in actions including, but not limited to:

- Service restrictions
- Suspension or termination of SIP trunks

Customers are strongly advised to ensure full adherence to all regulatory requirements at all times.

### Consequences

- If valid evidence is submitted on time:
  - Epicode reviews the submission and may request additional details if needed.
  - Once approved, the telecom provider closes the audit, and the customer is notified.
- If evidence is insufficient:
  - Epicode will request corrected or additional documentation.
  - Failure to respond within 2 days can lead to temporary suspension, permanent account blocking, or escalation to TRAI.
- Multiple complaints:
  - Repeated violations may result in blacklisting.
  - For resellers, incorrect compliance mapping may result in action on the entire account.

:::info
Note: Epicode reserves the right to block traffic, disable numbers, or suspend services in accordance with its Acceptable Use Policy.
:::

:::tip
### Best Practices to Avoid Audits

- Call only users who have explicitly opted in.
- Respect rejections: do not call repeatedly if a recipient declines.
- Refresh consent every 6 months in compliance with TRAI guidelines.
:::