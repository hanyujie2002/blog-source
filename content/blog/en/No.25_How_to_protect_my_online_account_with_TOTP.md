# How to protect my online account with TOTP?

Today lots of people have more than one online accounts while these accounts only protected by the same password, which is easy to be pwned. If you are cared about your account safety, you should try TOTP.

## What is TOTP?

TOTP is the abbr of "Time-based One Time Password", which is easy to use and strong enough to protect your account most of the time.

There are two main parameters of TOTP: private key and time. The algorithm flow is shown below.

1. The server side (usually the website such as Google and GitHub) generate with a random private key which is usually long and hard to remember, and you can't leak it to the third party in order to protect your account.

2. Open your TOTP app such as one password, KeePass, scan the QR code or input the private code the server side provide you. Then, only the server side and the client side know the private key.

3. Every short period of time, the TOTP password with change according to the algorithm key = TOTP(Time, private key). As The private key is not known by the third party and the time is known by every one, you don't have to link your TOTP app to the Internet, so it's very safe and convenient. Even though the attacker have got your password, they can't log into your account lacking of your TOTP private key.