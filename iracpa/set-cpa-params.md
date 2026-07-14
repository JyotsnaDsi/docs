# API Interface

The API interface is over a websocket connection. The API caller just needs to know the IP address and the port number to connect to the iraCPA service. The url would be:

```text
wss://IP_ADDRESS:PORT
```

The deployment can contain multiple server instances or multiple pods on Kubernetes, using the IraCluster HA framework from Epicode.

## Set CPA Parameters

This API allows configuration of the various parameters which controls the behavior of the call progress analysis engine. Some prominent configurations that can be set are:

- Time limit for first detection, that LV or AM.
- The specific frequencies to detect other than identifying humans and answering machines.
- The detection event on which the CPA engine can stop the analysis.
- Total analysis time limit.

### Request Body (json)

Use text mode in the websocket to send this json request. Keep listening to any replies asynchronously. The json schema is as follows:

```json
{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"type": "object",
	"properties": {
  	"request_name": {"type": "string" },
  	"tenant_id": {"type": "string" },
  	"config_name": {"type": "string" },
  	"analysis": {"type": "string", "enum":["amd"]},
  	"min_ambient_energy": {"type": "integer", "minimum": 100},
  	"initial_silence_ignore": {"type": "integer", "minimum": 0, "maximum": 5000},
  	"log_rtp_history": {"type": "boolean", "enum" : [true,false] },
  	"tones": {"type": "object"},
  	"log_voice": {"type": "boolean", "enum" : [true,false] },
  	"break_events": {"type": "string"},
    "amd_time_limit": {"type": "integer", "minimum": 1000, "maximum": 3000},
  	"total_timeout": {"type": "integer", "minimum": 10000},
  	"silence_detect_limit": {"type": "integer", "minimum": 1000, "maximum": 10000},
  	"beep_to_silence_gap": {"type": "integer", "minimum": 0, "maximum": 10000},
  	"beep_is_am": {"type": "boolean", "enum" : [true,false] },
  	"detect_dtmf": {"type": "boolean", "enum" : [true,false] }
	},
	"required": [ "request_name", "config_name", "tenant_id", "analysis"]
}
```



| Key | Type | Description | Example | Default |
|------|------|-------------|---------|---------|
| **request_name** | string **(Required)** | Specify the request name | `set_cpa_params` | None |
| **tenant_id** | string **(Required)** | Name of the licensee | `acme` | None |
| **config_name** | string **(Required)** | Unique name for the configuration | `"my_setup"` | None |
| **analysis** | string **(Required)** | Name of the call progress analysis | `amd` | None |
| **min_ambient_energy** | integer | Threshold that separates perfect initial silence and ambient silence | `200` | `200` |
| **initial_silence_ignore** | integer | If the energy level is lower than minimum ambient energy, ignore the RTP packets for a duration (in milliseconds). | `5000` | `750` |
| **log_rtp_history** | bool | Log the history of RTP packets sent. Must be one of `true`, `false`. | `true` | `false` |
| **tones** | object (key, value pairs) | This is optional. Any beeps will emit `BP` by default. Tones are specified as frequency and tolerance. | `{"FX":"2100\|5","MD":"1662\|5"}` | `{}` |
| **log_voice** | bool | Tells the system whether or not to record and store the analysis stream. Must be one of `true`, `false`. | `true` | `false` |
| **break_events** | string | Comma-separated list of frequencies or events on which the CPA analysis can stop. | `"LV,FX,AM"` | None |
| **amd_time_limit** | integer | The time limit for determining the voice to be AM or LV. | `2000` | `1750` |
| **total_timeout** | integer | The time in milliseconds at which the analysis will stop. | `20000` | `15000` |
| **silence_detect_limit** | integer | Detect silence after initial AM/LV detection. Sends `SL` after the detect limit. Set `0` for no detection. Minimum value `1000` and maximum value `10000`, in milliseconds. | `3000` | `2000` |
| **beep_to_silence_gap** | integer | Detect if silence follows a beep after a certain gap, specified in milliseconds. This emits `BPSL` event upon detection. Default is `0`, then it won’t detect. | `1500` | `0` |
| **beep_is_am** | bool | Consider any beep before the AM/LV event as AM. | `false` | `true` |
| **detect_dtmf** | integer | Detect DTMF. | `true` | `false` |
| **suppress_spikes** | bool | Suppress sharp noises. | `false` | `true` |
| **minimum_frequency** | integer | Lowest frequency to be detected. | `400` | `250` |

---
### Sample Request (json)

```json
{
  "request_name": "set_cpa_params",
  "tenant_id": "acme",
  "analysis": "amd",
  "config_name": "my_setup",
  "time_limit": 1750,
  "log_voice": true,
  "tones": {
    "FX": "2100|5",
    "MD": "1662|5"
  },
  "break_events": "FX,MD,BP",
  "total_timeout": "20000"
}
```

### Response Body (json)

| Field | Description |
|-------|-------------|
| **result**<br/>`string` | `OK` - No error<br/><br/>`01` - Mandatory fields are not specified<br/>`02` - Could not save the CPA configuration |
| **reason**<br/>`string` | Will provide the descriptive message about the result. |

:::tip
If the cpa parameter is set in one instance, it will take effect in every instance in the iraCluster. You can set the cpa_parameter using one instance, and use `config_name` on the other instances.
:::