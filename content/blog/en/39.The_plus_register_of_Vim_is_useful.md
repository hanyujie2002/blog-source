# The '+' register of Vim is useful

## Background

Vim is a powerful editor as far as we know even as to be somewhat kind of standard for programmers. However, there is one problem usually confuses noobs: copying codes from Vim interface to another interface in the system is hard as vim have different inner clipboard being different from the system clipboard.

## Basic info of Vim register

There are lots of register of Vim which stores code copied or clipped to be pasted somewhere.
The usage of registers is easy.

* `"` Register is the default register. To use it, just add the prefix `""` or nothing. For instance, if you hope to put the code in the line where your cursor at into the "register, push `:` in normal mode or visual mode, and input `""yy`, then the code in that line is yanked in the "register.

* `+` Register is the most useful register as it corresponds to the system clipboard. The usage of it, adding the prefix `"+` before your instructions, is the same as `"` register.
For example: in order to copy the code in the line your cursor at, type `:"+yy` in normal mode.

