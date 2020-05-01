#100days100projects project 1
##Random Quote Machine

Created in ReactJS

##miniblog
1 may 2020
22:41 created the app with npx create-react-app
made a new repository on github, and pushed the first commit. Started up the dev server and visual studio code. Now going to look for an Api.

22:50 found an free api to try out
https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand
its a wordpress api, starting with some basic components.

22:59 created a QuoteField component, and a QuoteButton component. Made the App a statefull component. And pushed changes to github.

23:13 ran into my first wall, the api is kinda weird, it return an object and the quote itself has <p></p> tags around it.
And I have an error TypeError: undefined has no properties at this moment. Going to start my investigation.

23:16 stupid mistake, used this.props on a stateless component. my initial quote comes in. but at this moment its not random.

