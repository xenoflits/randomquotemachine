#100days100projects project 1
##Random Quote Machine

Created in ReactJS
A simple random quote machine that fetches a json from an api. Then displays it on the app. When you press the button, it will get a new
message and displays this. 

##miniblog
1 may 2020
**22:41** created the app with npx create-react-app
made a new repository on github, and pushed the first commit. Started up the dev server and visual studio code. Now going to look for an Api.

**22:50** found an free api to try out
https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand
its a wordpress api, starting with some basic components.

**22:59** created a QuoteField component, and a QuoteButton component. Made the App a statefull component. And pushed changes to github.

**23:13** ran into my first wall, the api is kinda weird, it return an object and the quote itself has <p></p> tags around it.
And I have an error TypeError: undefined has no properties at this moment. Going to start my investigation.

**23:16** stupid mistake, used this.props on a stateless component. my initial quote comes in. but at this moment its not random.

**23:29** refactored a bit, the getquote function is called when component gets mounted, and now I will bind it to the button as well.

**23:37** since the api only has 10 quotes, made sure that the same quote won't get displayed twice in a row with an while function

**00:06** got out of time, but the functionality works. It may look simple, but I got more experienced for sure.

**11:24**(2nd day) did some css adjustments for responsiveness, fixed a bug with -.

