# Performance benchmarks

## IraVoice: High-Capacity Enterprise Telephony Performance

### Solution Overview

IraVoice is a high-capacity telephony solution engineered to facilitate large-scale enterprise campaigns. Developed to manage massive volumes of simultaneous calls using standard server hardware, it provides a robust, resilient foundation for high-intensity outbound communication. The architecture is designed to maintain performance integrity without the requirement for bespoke, proprietary infrastructure.

### Technical Benchmark Matrix (IraVoice)

The following benchmarks represent performance metrics derived from standard hardware configurations.

| Item | 8-Core Configuration | 16-Core Configuration (Streaming) | 16-Core Configuration (Non-streaming) |
|--------|--------|--------|--------|
| Simultaneous Calls | 1000 | 2500 | 3100 |
| Hardware Specs | 8-core / 8GB RAM | 16-core / 16GB RAM | 16-core / 16GB RAM |
| Connect Ratio | (33% / 1:3) | (33% / 1:3) | (33% / 1:3) |
| Call Duration | 1 minute | 1 minute | 1 minute |
| Recording | Enabled | Enabled | Enabled |
| VAD | Enabled | Enabled | Enabled |
| CPS | 60 | 60 | 60 |

### Capacity Scaling

All capacity figures represent performance **PER INDIVIDUAL DIALER**. The system architecture supports linear scaling through multi-dialer clusters. For enterprise requirements exceeding these figures, horizontal scaling is seamlessly supported; for example, a cluster of two 16-core/16GB dialers is capable of handling campaigns exceeding 5,000 simultaneous calls.

### Efficiency Takeaways

- **High-Intensity Reliability:** The platform maintains consistent stability during peak outbound campaigns, as verified by testing at a 33% connect rate.
- **Voice Activity Detection (VAD) Benefits:** All benchmarks were conducted with VAD enabled. This feature identifies human speech to reduce unnecessary data processing, ensuring system resources are dedicated exclusively to active, productive interactions.
- **Linear Hardware Scaling:** IraVoice is engineered to scale predictably. Performance increases linearly as core counts rise—moving from 1,000 to 3,100 calls—allowing for clear infrastructure roadmap planning.

---

## Botcompose: Voice AI Interaction Efficiency

### Solution Overview

Botcompose is a sophisticated Voice AI communication tool designed for maximum interaction efficiency. It is engineered to manage complex Speech-to-Text (STT) and Text-to-Speech (TTS) workflows while maintaining a significantly light hardware footprint. This enables high-density Voice AI processing even on cost-effective, entry-level server configurations.

### Processing Benchmarks

The following benchmarks demonstrate system performance for botcompose.

| Item | 4-Core Configuration |
|--------|--------|
| Simultaneous Calls | 1000 |
| Hardware Specs | 4-core / 8GB RAM |
| Memory Usage | ~1.1G |
| Peak Per Core | 55% |
| Connect Rate | 100% |
| VAD | Enabled |
| Call Duration | 1 minute |

> **Note:** The 1,000-call capacities detailed above are measured **PER INDIVIDUAL DIALER**.

### Efficiency Analysis

- **Consistent Scalability:** Botcompose reliably maintains a 1,000-call capacity across all resampling scenarios.
- **Exceptional CPU Overhead:** Stability is a hallmark of the Botcompose architecture, with Load Averages remaining consistently below 1.0. This indicates that even at full 1,000-call capacity, the CPU retains significant overhead to manage sudden traffic spikes or increased processing complexity.
- **Optimised Memory Consumption:** The system demonstrates remarkably low memory requirements, typically remaining between 1.1GB and 2GB during full-load operations.

---

## Infrastructure Strategy and Hardware Synthesis

### Comparative Resource Summary

The table below synthesises the resource profiles of both solutions to assist in strategic infrastructure planning.

| Feature/Metric | IraVoice (Volume-Focused) | Botcompose (Intelligence-Focused) |
|--------|--------|--------|
| Capacity Range | 1000 or ( 3100+ calls with 2 dialers) | 1000+ call capacity |
| Hardware Optimisation | 4-core to 16-core environments | 4-core to 8-core with 8GB RAM |
| Primary Use Case | Massive outbound telephony volume | Sophisticated Voice AI interactions (STT/TTS) |


### Recommendation

We designate the 8-core server with 8GB RAM configuration as the enterprise standard for organisations seeking to implement a unified infrastructure across both product lines. This configuration represents the "Golden Mean"—the optimal intersection of cost-efficiency and performance reliability. Botcompose operates with significant processing overhead to spare, ensuring total stability for Voice AI interactions. Simultaneously, IraVoice achieves a high-performance throughput of 1000 simultaneous calls, providing a versatile and cost-effective standard for enterprise deployment.

This configuration is designated as the strategic standard for the following reasons:

- **High-Performance Throughput:** The 8-core 8GB specification ensures IraVoice achieves a robust throughput of 1,000 simultaneous calls, meeting the requirements of the vast majority of enterprise-scale campaigns.
- **Operational Standardisation:** Utilising this hardware specification across the environment simplifies procurement, streamlines maintenance, and provides a versatile foundation that can be reassigned between volume-focused and intelligence-focused tasks as business needs evolve.

