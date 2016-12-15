
# Specialized network services demonstrators & benchmarks 

## Introduction

1 - 2 pages intro.  basically stating 

a) which problem to we want to solve (in reThink) with our specialized network services
Description of the first benchmarks -with best effort approach- proving that the congestion control of WebRTC is not enough even with the best algorithms.
b) why is this problem commercially relevant

## Architecture and Interfaces

### Overview

Picture of “big blocks” / components and interfaces between them.  Basically put the LHCB and router based architecture components in one picture

Just name the components / blocks and name the interfaces.  Refer to one of the two following subsections which should then provide details on each block and specify the interface

### Router based approach

  * Go into details / break down of architecture components and interfaces for the two pocs that have been done by Orange: Broker/TURN approach, Broswer Enterprise Policy approach.
  * Specify interface

**Note: we might want to only give a verbal / abstract specification of the interface, like saying in general which services are offered, and then refer to a section in the Annex that provides the formal specification of the interface.**
** SBE: as the interface is quite simple, it may not be usefull to put it in annex- I propose to state this during edition-**

### LHCB

  * Go into details / break down of architecture components and interfaces for LHCB
  * Specify interface

**Note: we might want to only give a verbal / abstract specification of the interface, like saying in general which services are offered, and then refer to a section in the Annex that provides the formal specification of the interface.**

## Proof-of-concept demonstrator implementation

### Implementation of Router based approach

Details on Broker/TURN service implementation
Details on Broswer Enterprise Policy approach (Chromium tuning).

### Implementation of LHCB

Details on LHCB implementation

### Docker-based test-bed set-up

**Optional if we can provide a full docker-compose based set-up of all services**

## Benchmarking of specialized services

### Introduction

short intro (1/2  page) mainly setting the tone of what exactly we want to show / evaluate.  Maybe a short intro into our methodology?

### Scenarios

description of scenarios used for benchmarking

We sort of need scenarios where we can show a “with specialized service” vs “without specialized service” result.

### Metrics

description of metrics used

### Performance Assessment

apply (selected) metrics per scenario

## Summary
