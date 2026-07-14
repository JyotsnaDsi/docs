# IraCPA - Detection Edge Cases


## Overview

IraCPA determines whether an outbound call has been answered by a live person or an answering machine. It does so by analysing speech pacing and prosody and does not rely on speech transcription.

By default, IraCPA analyses the first **1.75 seconds** of speech to comply with TCPA regulations, which require connecting the customer to an agent within two seconds of the first utterance.

False classifications occur when the system misinterprets audio patterns, resulting in either abandoned calls or unnecessary agent time being spent on answering machines.

## Common False-Positive Cases (Machine Detected as Human)

A false positive occurs when an answering machine is incorrectly classified as a live person. This usually happens when voicemail greetings are human-recorded and contain a pause after the initial greeting.

For example:

> "Hi there! I am currently not available. Please leave a message after the beep."

During the first **1.75 seconds**, only **"Hi there!"** may be present, which can resemble a human greeting and lead to a false positive.

## Common False-Negative Cases (Human Detected as Machine)

A false negative occurs when a live person is incorrectly classified as an answering machine or voicemail. This typically happens when a business representative answers with a long greeting.

For example:

> "Welcome to McDonald's. How may I help you?"

The speech pattern during the first **1.75 seconds** may resemble a voicemail greeting and result in an incorrect answering machine detection. This often introduces a delay before the customer can speak to an agent or causes the call to be incorrectly routed to voicemail message drop logic.

## Common Reasons for False Positives and False Negatives

- Slow or delayed greetings.
- Long business greetings.
- Human-recorded voicemail messages.
- Pauses in voicemail greetings.
- Background noise during answer.
- Poor network quality.
- Audio clipping or packet loss.
- Low-quality audio.

## Mitigating False Detections

Understanding the impact of false positives and false negatives is important when designing an outbound dialer workflow.

In case of False Positive, the call may be bridged to a human agent or a voice bot. As long as these occurrences remain a small percentage of the total call volume, the agent or voice bot can usually determine that the call has reached voicemail and either disconnect or leave a message.

IraCPA allows developers to control when CPA analysis should stop by configuring the `break_events` parameter. Instead of stopping analysis immediately upon the first Human (LV) or Answering Machine (AM) event, we recommend allowing the analysis to continue.

If a Silence (SL) event is triggered shortly after an Answering Machine (AM) event, typically within **three to four seconds**, it often indicates that the initial AM classification was incorrect. Answering machine greetings are generally much longer and rarely pause so quickly. Therefore, an early silence is usually a live person waiting for a response after their greeting. In such scenarios, the application can safely bridge the call to a human agent or a voice bot, thereby recovering many false-negative detections and improving overall accuracy.