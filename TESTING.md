# Project: Rock Scissors Paper Lizard Spock Game

### Developer: Maksim Popov

Test details:
[main README.md file](/README.md)
[GitHub web-address:] (https://maxgray7-dev.github.io/RPSLS-game)

# Project functionality testing

To ensure site functions correctly I checked HTML, CSS, and Javascipt.code.

## Usability
- JS functions respond to user actions accordingly.
- "Rules button" open windows with rules, and closes the page after pressing the button.
- Buttons that responsible for chosing game hands respond correctly, and follow the rules.
- Scores displayed correctly, and reset button appears after the game has been completed.

# Media Queries
Visual tests showed that web page looked as it supposed to mobile devices, tablets and laptops.

## Lighthouse
![Lighthouse](https://i.ibb.co/vq7XHN6/Lighthouse-test.png)

# Testing HTML by Validator:

### HTML Validator showed the next errors:

![My HTML Errors](https://i.ibb.co/MggJg0s/HTML-errors.png)

To fix these errors:

- line 18: deleted closing tag in brackets `</br>`
- line20: Deleted `</i>` that I have left after cleaning my HTML code from overloaded infotmation.
- line21: required to add heading, but I decided to keep this section empty as It used only for organising my HTML structure.
- line22: `<main-div>` had a missing closing tag. It was added to the Index.html
- line23: fixed with the line 22.
- line24: removed `</i>` in the end of the footer.
- line26: "Error: Stray start tag footer." - moved footer inside `<body>` element.

![HTML Errors Fixed](https://i.ibb.co/ZfMkJ3K/HTML-fixed.png)
There are only 2 warnings that suggest to create heading for sections.

### CSS Validator showed the next issues:
CSS Validator didn't show any mistakes.
![CSS Validator](https://i.ibb.co/y05hMXz/CSS-Validator-Screenshot.png)


## Manual Testing
|To be Tested       | Test Actions  | Expected Outcome                       | Tested Outcome                     | Passed    |
--------------------|---------------|----------------------------------------|------------------------------------|-----------|
|"Rules" Button     |Button         |Opens a window with rules               | Opens window in center of the page | Passed    |
|"Ready to start"   |Button         |Closes the opened windows               | Opened windows closed              | Passed    |
|Choice Buttons     |Buttons        |Each button picks right option          | Buttons operated correctly         | Passed    |
|Game Arena "Hands" |Hand Icons     |Each Hand corresponds correctly         | Icons reflected Player choice right| Passed    |
|Scores             |Scores Display |Scores indicate correct game result     | Scores respond to game result      | Passed    |
|GitHub Icon        |"Link" button  |Links to github, opens in a new window  | Opens a new window with Github     | Passed    |



## Browsers were tested

- Google Chrome: Version 119.0.6045.200 (Official Build) (64-bit)
- Microsoft Edge; Version 119.0.2151.93 (Official build) (64-bit)
- Firefox: Version 120.0.1 (64-bit)
