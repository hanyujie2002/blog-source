# The introduction to the Internet

Nowadays, most of the people have got involved into the Internet where they share their lives or work while they don't understand the underlying theory of Internet.

If you are one of those who don't know too much about Internet, this tutorial is for you.

## History

The Internet made its debut during the Cold War when the world is under the cloud of nuclear weapon. The US hope to have an innovative system for responding the nuclear strike which should be decentralized as that most of the nodes in the system were still able to work as some point was destroyed to get enough deterrent against Soviet Union.

## The structure of Internet

To understand the Internet, protocols are the essential notion you should grasp. The Internet work on the base of protocols, such as TCP protocol and UDP protocol. Those protocol works on the basic principle of "point to point" which means that one side sends its information as if this side directly send information to the other though they achieve it by the API provided by underlying protocols.

The Internet protocols are divided into seven parts in the ISO standard while five parts in the TCP/IP protocol stack with the latter making more sense, I think.

**The five layers of Internet will be explained clearly below from below to above.**

### Fist layer: Physical layer

This layer is the basic layer aimed at transporting elemental information like 0 or 1, the protocols at this layer defines how to express one and zero by physical methods, like that high level of electric correspond to one while low one correspond to zero.

### Second layer: Link layer

This layer provides the ability to send information to other nodes between the LAN(Local Area Network) using MAC(Media Access Control) address depicting each point.

### Third layer: Internet layer

Not confused with the Internet which contains the protocol of this layer. The well_known IP protocol is at this layer as well. Protocols of this layer(especially the IP protocol) provides the ability to negotiate with other nodes not in the same network by using the IP address consists of the network number describing the network the node locate and the address describing where the node locate in the network.

### Fourth layer: Transport layer

Transport layer is a layer providing the ability to choice which method to use in order to transport information as the programmer want. Two famous protocols there are TCP(Transmission Control Protocol) and UDP(User Datagram Protocol). The TCP are used most of the time while the UDP are used for some special scenes needing high transmission speed and low accuracy. The fourth layer is the lowest layer application programmers could touch.

### Fifth layer: Application layer

The application layer is just those web apps we use daily, such as the E-mail, HTTPS, HTTP.
