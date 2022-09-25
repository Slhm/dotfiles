# Config files (ubuntu 18.04, i3-gaps, and polybar)

![screen shot](https://raw.githubusercontent.com/Slhm/dotfiles/master/screenshot.png)

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
#### bitFetcher (currently broken by the dead api. ill fix it eventually)
fetches crypto prices from coinmarketcaps api.
```
./bitFetcher iota
```
returns the current iota price.


'./bitFetcher iota -c' returns the current price and 24h % change. 

check https://api.coinmarketcap.com/v1/ticker/ for IDs

#### should
Magic 8ball script.
```
>./should i get another coffee
i absolutly have to get another coffee, lol
```
First arg is the subject -> (I, martin, santa, etc)

Everything after is the proposal -> (get another beer, go to bed, etc)
