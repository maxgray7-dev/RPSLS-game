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
I did tests on different screens such as Galaxy Fold, iPad Pro, iPhone SE, iPadMini and Laptop Screen.
This test showed no issues and app was responsive on all screens.


## Lighthouse
![Lighthouse Test on Laptop](https://i.ibb.co/vq7XHN6/Lighthouse-test.png)

 - Performance - 99%;
 - Accessibility - 95%;
 - Best Practices - 95%;
 - SEO - 100%;

![Lighthouse Test on mobile device](https://i.ibb.co/rptYR1n/iphone12-Pro-Lighthouse.png)
 - Performance - 98%;
 - Accessibility - 95%;
 - Best Practices - 95%;
 - SEO - 100%;

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
|To be Tested       | Test Actions  | Expected Outcome                       | Tested Outcome                        | Passed    |
--------------------|---------------|----------------------------------------|---------------------------------------|-----------|
|"Rules" Button     |Button         |Opens a window with rules               | Opens window in center of the page    | Passed    |
|"Ready to start"   |Button         |Closes the opened windows               | Opened windows closed                 | Passed    |
|Choice Buttons     |Buttons        |Each button picks right option          | Buttons operated correctly            | Passed    |
|Game Arena "Hands" |Hand Icons     |Each Hand corresponds correctly         | Icons reflected Player choice right   | Passed    |
|Hands Icons        |Hand Icons     |Hand Icons must be turned correctly     | Hands Icon face the right direction   | Passed    |
|Scores             |Scores Display |Scores indicate correct game result     | Scores respond to game result         | Passed    |
|Player Wins!       |Display result |When a game finished appears result     | Player wins 5 times- "Player Wins!"   | Passed    |
|Computer Wins!     |Display result |When a game finished appears result     | Computer wins 5 times- "Player Wins!" | Passed    |
|Draw!              |Draw Result    |If both hands the same display Draw!    | When both hands the same shows "Draw" | Passed    |
|Footer             |"Link" button  |Links to github, opens in a new window  | Opens a new window with Github        | Passed    |

# Issues, Bugs, and problems during the coding process.

This is my first time to work with JS, and developing of this game became a big challenge for me.

1. The first issue I faced when started to work with JS functions was I could't match Player Hand and Computer hand. It took for me long time to check different sources and watch several videos to understand the issue. My index.html code wasover complicated with too many divs, spans, and unnesesary elements with classes and ids. I was needed to simplify my code in case to start to understand how to link functions with elements.
Also, in my first idea was that buttons should be icons, but I decided that if I replace buttons with words that would make the process easier. Therefore my idea slightly changed when I was doing my last steps.

2. JS function `comareRound()`, This function supposed to define who is winner by comparing computer's and player's hand. It all looked good, until I noticed that Player is always winner, despite any hand was picked by computer. The problem was solved when I realised that it is essential to place additional brackets in each part of conditional code, so this how it looked before:
`(playerChoice === 'rock' && computerChoice ==='scissors' || computerChoice ==='lizard') || .......`

and than I replaced with brackets  : 
`(playerChoice === 'rock' && (computerChoice ==='scissors' || computerChoice ==='lizard')) || ......`

3. Furthermore I had "reset button", it was not appearing when it supposed to, and options buttons were stayed on the screen. I tried to do some reading and found the hint on the [w3schools.com](https://www.w3schools.com/cssref/pr_class_visibility.php)  I fixed it when added in if function a condition that when player or computer gets max scores there are 2 conditions happen. :
 1 - for option buttons - 'visibility:hidden';
 2 - for reset button - 'visibility:visible';

Nevertheless, I believe this challenge showed me that I must to practice a lot. I wish I had more time for this project as I would like to add more animation elements and additional perks to this page. 

## Browsers were tested

- Google Chrome: Version 119.0.6045.200 (Official Build) (64-bit)
- Microsoft Edge; Version 119.0.2151.93 (Official build) (64-bit)
- Firefox: Version 120.0.1 (64-bit)
