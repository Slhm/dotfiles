# Config files (ubuntu 17.10, i3-gaps, and polybar)


## scripts
#### bitFetcher
fetches crypto prices from coinmarketcaps api.
```
./bitFetcher iota
```
returns the current iota price.


'iota -c' returns the 24h % change as well. 'iota -c -p' returns the name, price, and % change in polybar color formatting.

check https://api.coinmarketcap.com/v1/ticker/ for IDs


### dependencies
- feh 
- rofi
- compton
- curl
- jq
