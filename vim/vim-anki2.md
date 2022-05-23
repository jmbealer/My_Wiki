TARGET DECK: vim-wip2

START
Vocabuary Basic (and reversed card)
0
Back: Go to the first character in the line. exclusive motion.
Type: 0
<!--ID: 1639981743544-->
END

START
Vocabuary Basic (and reversed card)
^
Back: Go to the first non-blank character in the line. exclusive motion.
Extra: Any count is ignored.
Type: ^
<!--ID: 1639981743560-->
END

START
Vocabuary Basic (and reversed card)
[n]$
Back: Go to the last character in the line. inclusive motion.
Extra: [count - 1] lines downward inclusive. N-1 lines lower
Type: $
<!--ID: 1639981743575-->
END

START
Vocabuary Basic (and reversed card)
g_
Back: Go to the last non-blank character in the line.
Extra: [count - 1] lines downward inclusive.
Type: g_
<!--ID: 1639981743579-->
END

START
Vocabuary Basic (and reversed card)
g0
Back: Go to the first character in screen line. exclusive motion.
Extra: Differs from "0" when lines wrap
Type: g0
<!--ID: 1639981743583-->
END

START
Vocabuary Basic (and reversed card)
g^
Back: Go to the first non-blank character in screen line. exclusive motion.
Extra: Differs from "^" when lines wrap
Type: g^
<!--ID: 1639981743586-->
END

START
Vocabuary Basic (and reversed card)
gm
Back: Go to the middle of the screen line.
Type: gm
<!--ID: 1639981743590-->
END

START
Vocabuary Basic (and reversed card)
[n]gM
Back: Go to the middle of the line.
Extra: With a count: to this percentage of text in the line.
Type: gM
<!--ID: 1639981743593-->
END

START
Vocabuary Basic (and reversed card)
[n]g$
Back: Go to the last character in the screen line.
Extra: Differs from "$" when lines wrap
Type: g$
<!--ID: 1639981743597-->
END

START
Vocabuary Basic (and reversed card)
[n]|
Back: Go to column [n]; default 1. exclusive motion.
Type: |
<!--ID: 1639981743600-->
END

START
Vocabuary Basic (and reversed card)
[n]f{c}
Back: Go to [N]'th occurrence of {c} to the right.
Extra: The cursor is placed on {c} inclusive. {c} can be entered as a digraph digraph-arg.
Type: f
<!--ID: 1639981743603-->
END

START
Vocabuary Basic (and reversed card)
[n]F{c}
Back: Go to the [N]'th occurrence of {c} to the left.
Extra: The cursor is placed on {char} exclusive.
Type: F
<!--ID: 1639981743607-->
END

START
Vocabuary Basic (and reversed card)
[n]j{c}
Back: Till before [N]'th occurrence of {c} to the right.
Extra: Remap j to t; The cursor is placed on the character left of {c} inclusive.
Type: j
<!--ID: 1639981743610-->
END

START
Vocabuary Basic (and reversed card)
[n]J{c}
Back: Till after [N]'th occurrence of {c} to the left.
Extra: Remap J to T; The cursor is placed on the character right of {c} exclusive.
Type: J
<!--ID: 1639981743614-->
END

START
Vocabuary Basic (and reversed card)
[n];
Back: Repeat the last f, t, F or T n times.
Type: ;
<!--ID: 1639981743617-->
END

START
Vocabuary Basic (and reversed card)
[n],
Back: Repeat the last f, t, F or T n times in opposite direction.
Type: ,
<!--ID: 1639981743620-->
END

