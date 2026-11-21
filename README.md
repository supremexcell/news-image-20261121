# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/supremexcell/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/supremexcell/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One-image front page summing up the world's news of Saturday 21 November 2026 — 22 stories on one page: 10 main panels plus 12 in brief, with a 14-item world-markets ticker at the bottom, led by what was actually trending, in Indonesia and worldwide, including on social media. The two biggest stories — the Wall Street correction and the missile interception over Riyadh — share the top row at equal size, and every big panel carries its own photo or illustration. A clean newspaper front page with original photo-style illustrations (drawn/generated for this entry, no photos copied from social media), so the image explains itself to a judge with no news feed.

The stories on the page (all verified from the outlets listed in NEWS.md, all events of / first reported on 21 Nov 2026):

1. **Wall Street enters correction (top row)** — S&P 500 -3.7% to 6,910, Nasdaq -5.3% and now negative for the year, worst week since 2020. Nvidia -14% on an SEC accounting-probe report; Anthropic -8.5% to $88.91 the day after its IPO; VIX 35.89, highest in 19 months.
2. **Three missiles down over Riyadh (top row)** — Saudi defences intercept 3 Houthi ballistic missiles in the early hours of Saturday, a third night of alerts; two blasts heard, no damage or casualties. Houthis threaten a power station at Shuqaiq, Red Sea ports and Riyadh's financial district.
3. **Bitcoin breaks below $60,000** — BTC ~$58,831 (-5.1%), ETH $1,621 (-7.8%), crypto market cap $2.04tn. Gold $3,515 (-3%), silver -7.4% — a sell-everything day.
4. **GTA VI's $3.79bn day one** — Take-Two: 32.5m pre-orders, biggest entertainment launch ever (announced Friday 20 Nov, labelled "ANNOUNCED FRI" on the page). Shares +0.65% Friday to $210 while the market fell. Panel illustration is the original neon Vice City art reused from the 20 Nov entry — no Rockstar artwork.
5. **Russia hits 3 Kyiv bridges** — at least 9 dead in a massive aerial offensive; Kryvyi Rih bombing kills 2, injures 42, incl. 4 children.
6. **COP31 stalls into overtime** — fossil-fuel phase-out cut from the draft; final text due Saturday morning; Panama threatens to formally object.
7. **Fire razes Badui Luar homes (Indonesia)** — 52 houses lost, 210 families in shelters as fire hit the Indigenous village in Banten on Friday, reported today; 12 water-bombing helicopters sent.
8. **EU hands Ukraine record €8bn** — largest-ever single disbursement, nearly €8bn, as the bloc's budget fight drags on.
9. **US clears 900k AI chips for China** — House committee: nearly 900,000 AI chips approved for export to China over six months.
10. **Russia plotted to kill rapper (Denmark)** — two Danes charged with being recruited by Russian intelligence to kill a Ukrainian rapper.
11. **More in brief (12 items, numbered 1–12)** — Gupta jailed 19+ years in the Pannun murder plot; Spain general strike, Amnesty cites excess force; Italy workers & students flood streets vs Meloni; Brazil: Lula shields Indigenous land, talks with Raoni; ICJ Myanmar ruling rattles Israel's Gaza defence; Trump "too busy" to see Kim Jong-un on Asia trip; Russia has lost 1.6m troops, officials say; US panel: India targeting minorities in voter rolls; Ukraine to send big food aid to nine countries; UN: Hodeidah strikes threaten Yemen aid lifeline; Palestinian children appeal on World Children's Day; Argentina bonds in distress, Brazilian real -18% in a month.
12. **Markets ticker** — S&P 500, Dow, Nasdaq, FTSE, DAX, Nikkei, Hang Seng, Kospi, Shanghai, ASX, Gold, Brent (the only riser, green), Bitcoin and VIX, with ▲ / ▼ and red for down (VIX shown red: rising VIX means rising fear). Friday 20 Nov closes, reported 21 Nov.

`main.ts` (Node 22, standard library only) simply copies the finished `entry.png` to `/output/entry.png`, so the program runs with no network and writes identical bytes on every run. The image is 1024×1024 PNG, 451,118 bytes — inside the 1 MiB / 1024×1024 gate. Determinism verified: two runs produce identical sha256 (`69b13597517c0bfe7f7bcd9c3bf93ebec283dffe7cf131a71a6f6a60e04bcaf5`).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
