# WhatsApp Business Calling API Integration

## Introduction

The WhatsApp Business Calling API enables businesses to initiate and receive voice calls with WhatsApp users using Voice over VoIP. 
Unlike traditional Cloud API messaging workflows that rely on Graph API endpoints and webhooks, 
WhatsApp Calling supports SIP (Session Initiation Protocol) as the signaling protocol for voice communication.

---

## Setup

### Prerequisites and Account Setup

Before configuring WhatsApp Calling, ensure the following prerequisites are met:

### Account Requirements

<Stepper>
    1. **Create a verified WhatsApp Business Account (WABA) in Meta Business Manager.**
    2. **Register a phone number for calling.**
        
        The business number must be connected to the WhatsApp Cloud API (not the WhatsApp Business App).

        :::note
        **Reference:**
        https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers
        :::

    3. **Obtain a Permanent Access Token or System User Access Token for API authentication.**

        :::note
        **Reference:**
        https://developers.facebook.com/docs/whatsapp/business-management-api/get-started/#system-user-access-tokens
        :::

    4. **Enable Calling on the business phone number.**

        :::note
        **Reference:**
        https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings
        :::

</Stepper>

### Application Requirements

Before configuring SIP signaling:

* Ensure all WhatsApp Calling prerequisites are satisfied.
* Verify that the application has messaging permissions for the target business phone number.
* Validate messaging functionality by sending and receiving messages through the Graph API.
* Use the same application for SIP configuration.
* Verify the phone number status using the Health Status API.
* Ensure the application mode is set to **Live** (not Development).

---

## User-Initiated Calls

User-initiated calls are calls placed by a WhatsApp user to your business.

### Configuration Steps


Enable and configure SIP on the business phone number.

:::note
**Reference:**
https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip#configure-update-sip-settings-on-business-phone-number
:::


### Example API Request

```bash
curl 'https://graph.facebook.com/v23.0/<Unique-ID-of-the-Registered-Number>/settings' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H "Content-Type: application/json" \
-d '{
  "messaging_product":"whatsapp",
  "calling":{
    "status":"ENABLED",
    "call_icon_visibility":"DEFAULT",
    "callback_permission_status":"ENABLED",
    "srtp_key_exchange_protocol":"SDES",
    "sip":{
      "status":"ENABLED",
      "servers":[
        {
          "hostname":"<iravoice-server-host>",
          "port":<some-port>
        }
      ]
    }
  }
}'
```

### Reconfiguration

To route incoming calls to a different Botstream/FreeSWITCH server:

1. Update the `hostname`.
2. Update the `port` if required.
3. Re-run the API request.

---

## Business-Initiated Calls

Business-initiated calls are calls placed by your business to a WhatsApp user.

### Requirements

* Ensure that the user has granted calling permission to the business.
* The account owner must retrieve the Meta-generated SIP password.

To enable Outbound WhatsApp Calls via IraVoice, Epicode team will configure the SIP password on the SIP server to respond to Meta's digest authentication challenges.

---

:::note

## References

- WhatsApp Cloud Calling API

https://developers.facebook.com/docs/whatsapp/cloud-api/calling/

- Calling Settings

https://developers.facebook.com/docs/whatsapp/cloud-api/calling/call-settings

- SIP Configuration

https://developers.facebook.com/docs/whatsapp/cloud-api/calling/sip
:::