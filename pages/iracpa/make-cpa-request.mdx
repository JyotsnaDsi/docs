# Make CPA Request

This API sends the CPA request, followed by the RTP data.

## Request Body (json)

Use text mode in the websocket to send this json request. Keep listening to any replies asynchronously.

| Key | Description | Example | Default |
|------|-------------|---------|---------|
| **tenant_id**<br/>**required** \| `string` | Name of the licensee | `acme` | None |
| **config_name**<br/>**required** \| `string` | Unique name for the configuration | `"my_setup"` | None |
| **sampling_rate**<br/>**optional** \| `integer` | Sampling rate of the audio | `16000` | `8000` |
| **call_uuid**<br/>**optional** \| `string` | Call_uuid to be associated with the transaction | Generated | None |
| **pod_id**<br/>**optional** \| `string` | Calling application instance | None | None |

## Sample Request (json)

```json
{
  "tenant_id": "acme",
  "config_name": "my_setup"
}
```

This API request will initialize the CPA analyser. After the request is sent, the websocket mode should be changed to binary, and RTP data should be sent in **16 bit PCM** format. Preferably send **4000 bytes every 250 milliseconds**. The results will be coming back whenever the CPA analyser makes a detection.

## Response Body (json)

| Field | Description |
|-------|-------------|
| **result**<br/>`string` | `LV` - Live voice found<br/><br/>`AM` - Answering Machine found<br/><br/>`TO` - Time out, total time exceeded<br/><br/>The result could also be a custom tone specified under **tones**.<br/><br/>`01` - Mandatory fields are not specified<br/>`03` - Specified CPA configuration not found<br/>`04` - No license available for the tenant<br/>`05` - Specified CPA analyzer not found<br/>`06` - RTP data was sent without initializing the analyser |
| **reason**<br/>`string` | Will provide the descriptive message about the result. |
| **break**<br/>`bool` | `true` / `false` - Tells the caller to stop sending RTP and disconnect the session. |
| **max_energy**<br/>`Integer` | The maximum energy found in the voice data. |
| **pattern**<br/>`string` | Energy pattern seen in the voice data. |
| **duration**<br/>`Integer` | Duration of the data analyzed. |
| **request_count**<br/>`Integer` | Count of the requests handled so far. |
| **real_time**<br/>`Integer` | It is the time taken to send the audio to IraCpa for Analysis. |