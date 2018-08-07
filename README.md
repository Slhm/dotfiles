# Config files (ubuntu 17.10, i3-gaps, and polybar)
#todo: music player in polybar. prob mpd.

![screen shot](https://raw.githubusercontent.com/MartinSolheim/dotfiles/master/scrnsht2018-2.png)


## scripts
#### bitFetcher
fetches crypto prices from coinmarketcaps api.
```
./bitFetcher iota
```
returns the current iota price.


'iota -c' returns the 24h % change as well. 'iota -c -p' returns the name, price, and % change in polybar color formatting.

check https://api.coinmarketcap.com/v1/ticker/ for IDs

#### should
lol
example
```
./should i get another beer
>i absolutly have to get another beer, lol
```
first arg is the first word -> the person(I, martin, satan, etc)
second arg is everything after -> the proposal(get another beer, go to bed, etc)
kind of buggy grammar for certain combinations but its supposed to be a joke anyway.

#

font: Hack Regular
zsh theme: agnoster

### dependencies
- feh 
- rofi
- compton
- jq(for json parsing in the bitFetcher script)
- light
- zsh
- elder futhark font -> https://profont.net/fonts/elder-futhark-font-download.html
- awesome font 5
