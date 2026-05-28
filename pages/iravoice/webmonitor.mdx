# Web Monitor

The IraVoice web monitor provides realtime visibility into outbound campaign activity, telephony infrastructure, and call performance metrics. It supports multi-tenancy and enables monitoring of campaigns, dialers, SIP trunks, websocket performance, bot response metrics, and license utilization from a centralized dashboard.

The platform also includes a scheduler component that manages call queuing, distributes load across dialers, and supports configurations such as CPS limits and dial timeouts. Working hours can be configured globally and can also be defined during campaign creation for more granular control.

![](/epicode-docs/web-monitor.png)

## Campaigns/logical gateways

It allows multiple SIP trunks to be grouped together into logical entities and used for outbound call routing.

Logical gateways provide:

* Trunk redundancy
* Better load distribution
* Controlled trunk utilization
* Flexible outbound routing across multiple SIP trunks

### Queue

This column shows the number of contacts yet to be dialed or waiting for trunks to become available.

### Limit

Limit represents the maximum concurrent calls a campaign can handle, provided sufficient telephony trunk capacity is available.

:::caution
When multiple campaigns are running simultaneously, the total active campaign limits should not exceed the total available channels across the trunks assigned to those campaigns. 
Exceeding this may consume all available channels and affect other active campaigns.
:::
### Scheduled (SCHD)

The router schedules calls from the queue whenever trunks become available.

This column displays the count of scheduled calls.

### Used (USED)

This column displays the total number of calls currently:

* Being dialed
* Ringing
* Answered

### Answered (ANSD) / Stream (STRM)

These columns display:

* The count of ongoing answered calls
* The count of active websocket audio streams connected to the bot

:::note
The difference between Answered calls and Streams should ideally remain low. A large difference may indicate issues in the botstream service or websocket streaming pipeline.
In such cases, verify the IraVoice logs for related errors.
:::



### TRNST

TRNST represents the average transit time.

It indicates the time taken for data to move from the websocket server to the botstream service. This metric helps identify network congestion or delays in audio/data transmission.

### WRT

WRT represents the average write time.

It measures the time required to completely write data into the socket on the websocket server.

### BDL

BDL (Average Bot Delay) represents the average time taken by the bot to respond.

* In VAD mode, it measures the average response delay across all bot responses during the call within the last 30 seconds.
* In non-VAD mode, it measures the average delay for the first audio response.

All values are measured in milliseconds.

### Web Errors (WERR)

When errors occur on the websocket server, this column displays the count of calls affected by web errors during the last 30 seconds.

### Types of Web Errors

![](/epicode-docs/weberr.png)

Hover over the Web Errors column to view the error breakdown.

When errors occur on the websocket server, this column displays the count of calls affected by web errors during the last 30 seconds.


| Error Type     | Description                                                                          | Resolution                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resolve Errors | Number of calls experiencing delays while resolving the DNS of the websocket server. | Add the websocket DNS and corresponding IP address into the server host file.                                                                           |
| Connect Errors | Number of calls unable to establish a connection with the websocket server.          | Verify accessibility of the websocket DNS/server from the IraVoice server. If required, update firewall rules on both websocket and IraVoice servers. |
| SSL Errors     | Number of calls experiencing delays during SSL handshake.                            | SSL-related issues must be handled by the client infrastructure.                                                                                        |
| WSS Errors     | Number of calls experiencing delays during WebSocket handshake.                      | WSS-related issues must be handled by the client infrastructure.                                                                                        |

:::note
**Note:**
SSL and WSS related issues must be handled by the client infrastructure.
:::

## Bot Errors (BERR)

For VAD mode:

* Bot errors are marked for all bot audio responses received beyond the configured threshold during the last 30 seconds.

For non-VAD mode:

* Bot errors are marked only when the first audio response exceeds the configured threshold during the last 30 seconds.



## Dialers

The Dialers section provides an instance-level view of each IRaVoice dialer.

It enables monitoring of:

* Call usage
* Answered and dialed calls
* Streaming activity
* Web errors
* Bot errors
* Gateway utilization
* Average bot delay

This section helps identify performance issues and monitor the health and activity of individual dialer instances in realtime.

## Trunks

The Trunk section provides detailed monitoring information for all SIP trunks configured for a tenant.

This section includes:

* Channel capacity of each trunk
* Configured concurrent call limits
* CPS (Calls Per Second) limits
* Realtime trunk utilization metrics

The channel capacity determines the maximum concurrent calls that can be configured during campaign creation.

Each trunk also displays operational metrics such as:

* SCHD (Scheduled calls)
* USED (Calls currently in use)
* CALL (Active call count)
* STRM (Active audio streams)
* ERR (Errors associated with the trunk)

This helps monitor trunk usage, identify congestion, and validate telephony capacity in realtime.

The licenses section shows license consumption per tenant, for tracking usage against allocated capacity.

