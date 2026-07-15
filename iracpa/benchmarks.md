# IraCPA Machine Detection and Accuracy

## Answering Machine Detection (AMD)

Answering Machine Detection (AMD) is a technology used with dialers to identify calls answered by voicemail systems instead of a live person. The objective is to quickly determine whether the call has been answered by:

- Live Human
- Answering Machine
- Voicemail
- Fax
- Modem
- IVR

This decision must typically be made within **2 seconds** to comply with **TCPA regulations** in the United States. TCPA requires the call to be transferred to a live agent within **2 seconds** after the called party completes their greeting.


## IraCPA Module

Epicode's **Call Progress Analysis (IraCPA)** module uses advanced voice analysis algorithms that evaluate:

- Speech patterns
- Tone of voice
- Speaking speed
- Post-greeting silence
- Audio characteristics

These techniques enable **industry-leading detection accuracy** with an analysis time of only **1.75 seconds**, leaving approximately **0.25 seconds** for applications to transfer or bridge the call to an agent while remaining fully TCPA compliant.



## Voicemail Beep Detection

IraCPA also supports voicemail drop workflows.

After detecting that the call has been answered by an answering machine:

1. IraCPA immediately notifies the application.
2. Audio analysis continues while listening for the voicemail beep.
3. Once the beep is detected, another notification is sent.
4. The application can then automatically play a prerecorded voicemail message.


## Handling Early Answer Events

During large-scale deployments, some telecom carriers generate the **call answered** event before the audio path is fully established. This can result in the first few seconds of the call containing complete silence.

To improve detection accuracy, IraCPA can:

- Distinguish between **absolute silence** and **ambient background noise**
- Ignore initial silence for a configurable duration (up to **5 seconds**)
- Begin analysis only after meaningful audio is detected

This significantly improves the accuracy of distinguishing between live humans and answering machines.



## Benchmarks

The following benchmarks are based on extensive internal testing along with production deployments across the **United States** and **Europe**.

| Time Since First Utterance | Sample Size | Human Accuracy | Machine Accuracy | Fax Accuracy | Overall Accuracy |
|----------------------------|------------:|---------------:|-----------------:|-------------:|-----------------:|
| 1.50 seconds | 10,000 | 86% | 90% | 100% | 86.8% |
| 1.75 seconds | 10,000 | 92% | 95% | 100% | **93.2%** |

