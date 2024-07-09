---
title: UDP network directory service in C
priority: 6
---

source code available for viewing [here](https://github.com/halvornj/IN2140/tree/main/EXAM).

### why

Well, it was a university assignment. Actually, this was a multi-week home exam for the course [IN2140](https://www.uio.no/studier/emner/matnat/ifi/IN2140/).

### what

the assignment consists of 2 parts/layers:

#### layer 1

This is responsible for creating the socket and identifying the peer, and sending and recieving arbitrary data packets of up to 1024 bytes.
While this is achieved using only the UDP protocoll, it implements the [_Stop-and-wait automatic repeat-request mechanism_](https://en.wikipedia.org/wiki/Stop-and-wait_ARQ){:target="\_blank"}.
Packets on this layer have a header containing the packet size, a checksum of the entire packet and some flags, notably the `SEQNO`-flag. This ensures every packet is recieved, and no bits are lost.

#### layer 2

Layer 2 uses the underlying layer 1 functionality, to recieve directory tree nodes.
Each node is either a sub-directory or a file. Sub-directories have a number of children, and the ids of these children. Files have no children of course, but a size instead. This layer makes a network request using layer 1, and from the buffers returned construct this dynamically allocated tree.
