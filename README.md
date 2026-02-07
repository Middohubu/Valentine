# Valentine's Puzzle

A interactive sliding puzzle website to ask someone to be your Valentine!

## Features

- Animated envelope that opens on click
- 3x3 sliding puzzle with your custom image
- Beautiful animations and effects
- Confetti celebration on "Yes"
- Mobile responsive

## Setup

1. **Add your image tiles:**
   - Cut your image into 3 x 3 squares (I used Figma, but you can probably do this programatically)
   - Place your 9 PNG tiles in the `images/` folder
   - Also replace your full image with `images/full-image.png`
   - Name them `tile-1.png` through `tile-9.png`
   - Tiles should be numbered left-to-right, top-to-bottom:
     ```
     tile-1.png   tile-2.png   tile-3.png
     tile-4.png   tile-5.png   tile-6.png
     tile-7.png   tile-8.png   tile-9.png
     ```
   - `tile-3.png` will be the empty space (top-right) but appear once the puzzle is completed

2. **Change relevant strings**
   - 
   - 

4. **Deploy to GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: main (or master)
   - Click Save

5. **Share the link!**
   - Your site will be at: `https://YOUR-USERNAME.github.io/valentine-puzzle/`

## How It Works

0. **Stage 0:** Letter appears on screen (click to open)
1. **Stage 1:** She solves the 3x3 sliding puzzle to reveal your photo
2. **Stage 2:** The full image appears with "...you complete me." and "Will you be my Valentine?" and a Yes button
3. **Stage 3:** When she clicks "Yes", it's celebration time!

## Customization

You can customize the messages in `index.html` (e.g. the greeting, completion text, and success stage).

---

Made with ❤️ for Valentine's Day
