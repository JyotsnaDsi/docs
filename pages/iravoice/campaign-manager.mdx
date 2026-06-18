# Campaign Manager

The IraVoice Campaign Manager enables developers and administrators to create, configure, and manage outbound calling campaigns based on the available SIP trunk and dialer capacity.

Campaigns can be configured for different dialing strategies and activated to handle large-scale outbound calling operations efficiently.

![](/docs/campaign-mgr.png)

## Campaign Configuration Parameters

![](/docs/create-cmpn.png)

When creating a campaign, the following parameters must be configured:

### Campaign Name

A unique name used to identify the campaign.

### Tenant ID

The unique tenant identifier assigned by the Epicode team during onboarding.

### Campaign Type

| Campaign Type   | Description                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Voicebot**    | Used for AI voicebot-driven outbound campaigns.                                                                                                  |
| **Preview**     | Used for agent-assisted calling where agents review customer information before initiating a one-to-one call.                                    |
| **Progressive** | Used for continuous agent-based dialing where calls are initiated based on agent availability, enabling minimum idle time.                             |
| **Predictive**  | Used for high-volume agent campaigns where the system predicts the number of calls to dial based on agent availability and answer rate patterns. |

### Working Hours

Defines the start and stop time during which the campaign is allowed to run.

:::caution
**Important:** Outbound campaigns using 140-series numbers in India must comply with TRAI-approved calling hours and telecom regulations. 
Calls placed outside the permitted time window may be rejected by telecom providers.
To learn more, [click here](/sandbox/compliance#TRAI-Regulations-for-140-Series-Numbers).
:::

### Cluster ID

Each campaign must be associated with one or more IraVoice Dialer clusters.

A cluster can hold one or more dialer components responsible for processing outbound calls.

### Maximum Concurrent Call Limit

Defines the maximum number of concurrent outbound calls allowed for a cluster.

This limit is generally configured based on the allocated SIP trunk channel capacity.

### Cluster Weightage

Determines the priority of a cluster within a campaign.

Clusters with higher weightage receive higher call allocation priority compared to other clusters in the same campaign.

### Gateway

Specifies the gateway connected to the SIP trunk through which IraVoice initiates outbound calls.

### DID Range

Defines the DID number range allocated to the associated SIP trunk for outbound calling.

:::tip
Click on **Sync** to synchronize the campaign configuration across all associated campaigns.

The sync operation loads newly created campaigns and applies any configuration updates made to existing campaigns at any point in time.
:::

## Cluster and Gateway Architecture

A single campaign can contain multiple dialer clusters.

Each  cluster can further contain multiple gateways connected to different SIP trunks or telecom providers.

This architecture provides:

* Load distribution across dialers
* High availability and failover handling
* Flexible SIP trunk utilization
* Scalability for high-volume outbound campaigns

The Campaign Manager dynamically distributes outbound traffic across configured clusters and gateways based on campaign settings, weightage, and available capacity.
