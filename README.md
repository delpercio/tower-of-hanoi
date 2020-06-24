<!-- pages: https://drewskiiiiiiiii.gitlab.io/tower-of-hanoi -->
New Pages : https://percio.gitlab.io/the-tower-of-hanoi/

Team: Drew Sexton, Steven Delpercio

brainstorming:
1) allow user to select disc
    - create interface where user can see which disc is selected
    - if disc is not clicked, alert "Please choose disc"
    - else if disc isn't smallest in tower, alert "This disc isn't movable yet"
    - else "select" disc
    - use border color to show selection

2) allow user to place disc in another tower
    - comp checks to make sure there are no smaller discs in the section you want to place
    - user receives error if placing disc illegally

    - identify currentTarget to see what tower has been clicked
    - if currentTarget.childElementCount===0, "drop" disc
    - else if currentTarget.lastElementChild is smaller than selected disc, alert "This disc is too big for that tower"
    - else append disc

3) user wins when all 4 discs are in the 3rd tower
    - after each placement, the computer will check for a win






________________________________________________________________________________________________________________________________________________________

    Stevens Notes 6/24/2020

    Ok, so, i spent literally all night approaching this from different directions. And here is what I settled on....
        It was very difficult for me to debug your code with the features you wanted, working from the end to the start was rough from my POV.
        So I re wrote most of the JS and pulled some of what you wrote into mine.
       
        Your code logic literally helped me solve some really tough issues with this thing .

What does our code currently do?

    -you can move between each box
    -you cannot stack bigger sizes on smaller sizes or you will get an alert
    -there is a win declaration that works.

what has changed?

    -you no longer click every disk(you can, but its not necessary)
    -When you click the code utilizes the lastElementChild DOM property.
    -our click handler is focused on the tower but uses event delegation to allow you to click the discs.
    -this is good because it reduces the number of alerts the user will be forced to face.
    
What do we need?

    -we could throw a border on select where it adds a class that has some kind of style change on it(border, opacity, ect.) I would make sure to add it on the "childNode" that is      
    being selected.
    -there is 1 bug. when you select an empty tower twice it throws an error, So we need to force the user to not do that, or create a work through where stop whatever event is     
    being triggered when we do that(I haven't really looked into it, 'im very tired lol)
    ----I really want to make sure we don't break this code so we need to be careful when we debug that.
    -We are essentially now at final touches. We polish anything extra we want and turn this bad boy in, and take a nap, maybe practice for whiteboards