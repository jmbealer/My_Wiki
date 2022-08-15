# Vim Index

[nvim](nvim)
folding
:previous, :next, :first, :last

[awesome neovim plugins](https://github.com/rockerBOO/awesome-neovim)

[Vim Help](Vim-Help.md)
[Vim User Manual](Vim-User-Manual.md)
[Vim Quick Reference Guide](Vim-Quick-Reference-Guide.md)
[Nvim Reference Manual](Nvim-Reference-Manual)
[My Vim Cheat list](My-Vim-Cheat-list.md)
[Vim2](Vim2.md)
SC-IM a vim based terminal spreadsheet editor
[Vimrc](Vimrc.md)
[tridactyl](tridactyl.md)

floatterm
text-objects
ciw

Working with files

* Opening files
.. vim {filename}
.. :e {filename}
.. current buffer
.. :read or :r
... :r file.txt insert the file file.txt below the cursor in current buffer
... :0r file.txt
... :r!sed -n 2,8p file.txt
... :r !ls
ID: 1618043085078


* Closing files
* Saving files
gf - goto file
gx - goto link browser
* undo u :u
* redo ctrl-r :redo
* :earlier :ea
* :later :lat
* g- and g+
* a buffer is the in-memory text of a file.
* a window is a viewport on a buffer.
* a tab page is a collection of windows.
* :ls to list buffer
* command that change text [operator] (operator) and a [motion] [navigation]
* d2w
* U fix a whole line.
* format for a change command is operator [number] motion
  * operator - is what to do, such a [d] (d) for delete
  * [number] - is an optional count to repeat the motion
  * motion - moves over the text to opertate on
* / search forward
* ? search backward
* n next N previous
* C-o C-i
* % to find a matching ),], or }.
* substitute command :s/old/new/
  * adding the g [flag] (:s_flags) means to substitute globally in the line,
  change all occurrences of "old" in the line.
  * to change every occurrence of a character string between two lines, type
    * :#,#s/old/new/g
      * where #,# are the line numbers of the range of lines where the
      substitution is to be done.
  * to change every occurrence in the whole file.
    * :%s/old/new/g
  * to find every occurrence in the whole file, with a prompt whether to
    substitute or not.
    * :%s/old/new/gc
To substitute new for the first old in a line type
        :s/old/new
    To substitute new for all 'old's on a line type
        :s/old/new/g
    To substitute phrases between two line #'s type
        :#,#s/old/new/g
    To substitute all occurrences in the file type
        :%s/old/new/g
    To ask for confirmation each time add 'c'
* :! external command

* :help insert-index
* :help starting.txt
* :help user-manual
* :help mapping
* :help :verbose
* :help :noremap

Spell Check
* z=
* zg
* zw
* zug
* zuw

print ()

.Table Title
|===
|Recursive |Non-recursive |Unmap |Modes
|:map|:noremap|:unmap|normal, visual, operator-pending
|:nmap|:nnoremap|:nunmap|normal
|:xmap|:xnonremap|:xunmap|visual
|:imap|:inoremap|:iunmap|insert
|:cmap|:cnoremap|:cunmap|command-line
|:omap|:onoremap|:ounmap|operator-pending
|===

vifm
https://vifm.info/cheatsheets.shtml

I’ve created the following list of features that I expect out of a modern editor. Standard editor features (like syntax highlighting) aren’t included.

    Fuzzy File Finding — If you know the file name in the project, you should be able to open it quickly (such as — two keystrokes + minimum number of characters to unique filename).
    File Switching — You should be able to see open files, and quickly switch between open files, both with fuzzy finding and manual browsing.
    Linting — Code linting should be automatic and fast, and you should be able to use a code fixer.
    Project Searching — You should be able to search for an arbitrary string, search for a symbol, find definitions, and find usages of a symbol.
    Code Intellisense — Having your IDE provide relevant, seamless suggestions and auto-completions can be a huge boost to productivity. In my opinion, the “white whale” for most Vim users.
