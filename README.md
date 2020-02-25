# Config files (ubuntu 18.04, i3-gaps, and polybar)
#todo: music player in polybar. prob mpd.

![screen shot](https://github.com/MartinSolheim/dotfiles/raw/master/2018-11-01-18:47:56.png)

font: Hack Regular

zsh theme: agnoster

### dependencies
- feh 
- rofi
- compton
- jq(for json parsing in the bitFetcher script)
- light (https://github.com/haikarainen/light)
- zsh
- elder futhark font -> https://www.dafont.com/elder-futhark.font
- awesome font 5


## scripts
#### bitFetcher
fetches crypto prices from coinmarketcaps api.
```
./bitFetcher iota
```
returns the current iota price.


'./bitFetcher iota -c' returns the current price and 24h % change. 

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
