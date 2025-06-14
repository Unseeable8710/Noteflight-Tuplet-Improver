# About

Noteflight only gives you the option to make tuplets with up to 7 notes, but if you take a look at its code, you'll notice that you can actually make tuplets of any size! I made this userscript because I didn't want to have to keep pasting code into the console every time I opened a score.

# How to use

1. Install the userscript by choosing a version from the releases page of this repo.
2. Select the note or rest you want to turn into a tuplet.
3. In the Rhythm palette, click the septuplet button.
4. Enter the number of notes you want in the dialog that will open.
5. Press enter or click OK.

# Credits

* Original code:

  * Author: [Regan K. Zieber](https://www.noteflight.com/profile/c084acc39b9c0b288998471c7d69db95605d4134)
  * Source: [INTERSTELLAR (Virtuoso Piano Arrangement)](https://www.noteflight.com/music/titles/2bd57ed5-2258-4cee-92a6-3c79be21f320/interstellar-virtuoso-piano-arrangement) (the code is in one of Regan's comments)

* Variable/constant finder:

  * GitHub Gist: https://gist.github.com/chrisjhoughton/7890239
  * The code I used: https://gist.github.com/chrisjhoughton/7890239?permalink\_comment\_id=3299151#gistcomment-3299151

# Extra stuff

If anyone wants the original code but doesn't want to go to the comment section of the score to find the code, here it is:

`nfeditor.palette().currentPalette().applyTuplet=(e) => {if (e=="septuplet") {l=prompt("Enter number of notes in tuplet: ");nfeditor.documentController.controller.createTuplet(parseInt(l));} else {nfeditor.palette().currentPalette().applyAction("tuplet",{duplet:2,triplet:3,quadruplet:4,quintuplet:5,sextuplet:6}[e])}}`

But there's really no point in not going to the score because it's an amazing piece of music.

## Notes

In a later version, I might add an item to either the userscript context menu, the site context menu, or both, I'm not sure yet. I might also add a new button to the palette (obviously with [GM\_addElement](https://www.tampermonkey.net/documentation#api:GM_addElement)) for larger tuplets.

## Changelog

* v1.0.0 — Initial release
