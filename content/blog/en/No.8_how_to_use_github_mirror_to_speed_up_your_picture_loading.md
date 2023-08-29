If you are living in some region where the GitHub have been blocked and have already read the second article of my blog [how-to-use-github-as-a-picture-bed] and have make a picture bed following the steps of that, you may find the picture hard to load.

### How the picture is loaded?

Each time your read a markdown file, the reader or the browser load the picture from the address wrote in the $.md$ file. If the address indicate that the picture is in the computer itself, like <http://127.0.0.1> or file://C://a/b/c/d.png, it will show the picture successfully if the picture has been found, or it will show nothing or a small broken pic icon with the notes you write in the $.md$ file like ![notes](fjdf.png).

The same to the public link.

### Why the picture is hard to load?

The picture which the link indicates features being in the servers of GitHub, which is somewhat blocked, so it's not difficult to understand that why the picture hard to load.

### How to speed up the picture loading

There are lots of non-commercial GitHub proxy service provided by volunteers with the ghproxy being the most well-known. The principle of these services is that their proxy servers are not blocked, and their proxy server are in regions that could visit GitHub successfully.

![20220503201200](https://ghproxy.com/https://raw.githubusercontent.com/hanyujie2002/my_pictures/main/images/20220503201200.png)

Just add a prefix to your URL: <https://ghproxy.com>, for example: the origin URL is <https://raw.githubusercontent.com/example/a/b/c/d.png>, the URL using the proxy service is <https://ghproxy.com/https://raw.githubusercontent.com/example/a/b/c/d.png>. Really easy to use, isn't it?
