# What is SQL injection

SQL(Structured Query Language) is the most used database programming language. However, there are some vulnerabilities of this language leveraged by cyberattackers. One of those are SQL injections.

## How does that work?

For instance, as someone queries the URL "https://example.com/?name=123&pass=123", then the server side queries the SQL sentence `"select * from users where name='123';"` However, the attacker may use the name `"123'; update users set pass='modified pass' where name='123'"`, then the password of user "123" is changed. It's the means by which hackers attack SQL databases.
