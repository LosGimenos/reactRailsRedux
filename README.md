# Teachable Growth Team Developer Test
## Larry Hernandez

Thanks for issuing this challenge! Was certainly fun to work on.

I decided to build a separate client in React to connect to Rails. 
Generally I will opt for separate clients especially relatively 
light-weight options such as React considering the amount of 
state-storing behavior occuring in this app.   

### Instructions
(Requires Rails and Node. '''$Bundle''' and '''$npm install''' as appropriate)

1. From the root directory run 
    ``` $rails server ```
    to get the rails portion started.
2. After connecting to Rails run 
    ``` $npm run dev ```
    to fire up the React portion.
3. Go crazy-go-nuts.

### Challenges

1. Although setting up a more API-like structure for Rails was relatively
problem free, I experienced an issue from the RubyGems Gem whenever 
I tried to make a call on a gem that didn't exist. It came back to 
Rails as a JSON parsing issue. Hit a blocker there so decided to go 
with the terribly inelegant solution of the client rendering the error
from any catch in the AJAX request.

2. There was definitely more state here than I initially realized. Next 
time around I would add the Redux layer if no DB was present.

3. Gems appearing in Dependencies do not possess a corresponding link.
As such they don't populate the Favorites list with a link when saved 
from Dependencies. This could possibly be solved with moving the ajax 
call for details directly into the GemName component or making separate 
calls as the list is being generated.

3. Logic behind which color star is rendering is still flawed. 

4. Not responsive. My first attempts with Flexbox here worked well with 
static elements. Things got a little jazzy when the elements began to 
fill with content. 

### Thanks again! Please let me know if you ave any questions.

[Larry Hernandez](http://larryh.win)
