# Ensure your VPS safety

It's common for a programmer or a college student to own one or more VPS, while someone takes few actions for VPS safety. They are seldom focused on the safety of VPS until their VPS is pwned or even worse when they receive the warning from VPS service provider that their VPS are detected doing illegal actions.

Here are some actions you are recommended to take in order to protect your VPS safety.

## 1. Change the ssh port from 22 to another

The default ssh port is 22 as common knowledge and the hacker, of course, will use the 22nd port to try to log in your VPS, remember the new port should be an integer from 1025-65535 which is not occupied by other services. What's more, remember to expose the new ssh port in the console the VPS provider provide with you, or you can't log into your VPS.

## 2. Create a new account

Only changing the ssh port is not enough or protect your VPS as the attacker may use scanning tools such as Nmap to scan your VPS ports to get your exact ssh port, so you should create a new account with the right to use sudo command.

## 3. Disable the direct login of root

It's not safe to expose your root account whereby the attacker only have to know the key password after the ssh port is scanned. Just disable the root account and using the other account with sudo command is more safe.