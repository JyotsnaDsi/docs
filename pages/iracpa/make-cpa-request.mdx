# Make CPA Request

This API sends the CPA request, followed by the RTP data.

## Request Body (json)

Use text mode in the websocket to send this json request. Keep listening to any replies asynchronously.

| Key | Description | Example | Default |
|------|-------------|---------|---------|
| **tenant_id**<br/>**required** \| `string` | Name of the licensee | `acme` | None |
| **config_name**<br/>**required** \| `string` | Unique name for the configuration | `"my_setup"` | None |
| **sampling_rate**<br/>**optional** \| `integer` | Sampling rate of the audio | `16000` | `8000` |
| **call_uuid**<br/>**optional** \| `string` | Call_uuid to be associated with the transaction(If used with IraVoice) | Generated | None |
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
| **result**<br/>`string` | **Results for EAMD analysis**<br/><br/>`LV` - Live Voice<br/>`AM` - Answering Machine<br/>`TO` - Time out, total time exceeded<br/>`FX` - Fax<br/>`BP` - Beep<br/>`SL` - Silence<br/>`RT` - RingTone<br/>`SIT` - Special information tones<br/>`EAM` - Extended Answering Machine (Triggered when an answering machine is detected after a ringtone.)<br/>`IBP` - Immediate Beep (Triggered when a beep is detected within the first 1.75 seconds.)<br/><br/>**Results for AMD analysis**<br/><br/>`LV` - Live Voice<br/>`AM` - Answering Machine<br/>`TO` - Time out, total time exceeded<br/>`FX` - Fax<br/>`BP` - Beep<br/>`SL` - Silence<br/>`SIT` - Special information tones<br/><br/>The result could also be a custom tone specified under **tones**.<br/><br/>`01` - Mandatory fields are not specified<br/>`03` - Specified CPA configuration not found<br/>`04` - No license available for the tenant<br/>`05` - Specified CPA analyzer not found<br/>`06` - RTP data was sent without initializing the analyser |
| **reason**<br/>`string` | Will provide the descriptive message about the result. |
| **break**<br/>`bool` | `true` / `false` - Tells the caller to stop sending RTP and disconnect the session. |
| **max_energy**<br/>`Integer` | The maximum energy found in the voice data. |
| **pattern**<br/>`string` | Energy pattern seen in the voice data. |
| **duration**<br/>`Integer` | Duration of the data analyzed. |
| **request_count**<br/>`Integer` | Count of the requests handled so far. |
| **real_time**<br/>`Integer` | It is the time taken to send the audio to IraCpa for Analysis. |
| **sampling_rate**<br/>`Integer` | Specified sampling rate of the analysed audio file. |
| **voice_filename**<br/>`Integer` | Path to the raw file created |
| **freq_found**<br/>`Integer` | Detected frequency of the audio |
| **initial_silence_found**<br/>`Integer` | Duration of the silence found in ms |
| **initial_silence_ignored**<br/>`Integer` | Duration of the silence ignored in ms |
| **call_uuid**<br/>`Integer` | UUID of the call(When CPA is used alongside IraVoice) |

## Sample response

```json
***************{

   "avg_energy": 2990,
   "break": true,
   "call_uuid": "4463116f-e604-4099-9695-4b9af06cf7bd",
   "duration": "2.88",
   "freq_found": 0,
   "initial_silence_found": 1125,
   "initial_silence_ignored": 1125,
   "max_energy": 10087,
   "pattern": "11111110000000",
   "real_time": 2989,
   "request_count": 140,
   "result": "LV",
   "sampling_rate": 8000,
   "voice_filename": ""
}
```

