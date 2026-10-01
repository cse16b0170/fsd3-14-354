# Frontend - Backend
1. create project folder (lab7)
2. create two folder fontend and backend
3. open terminal and split it into two
4. open frontend into left side terminal
5. open backend into right side terminal
6. in backend
   a. intialize backend by `npm intit -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
   d. create app.js
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. select variant as javascript from arrow key
   f. selct install and start the frontend
## components
1. simple js functions return html directory
2. it must starts with capital letter
3. it should be treated as html tag
4. it must be closed

## object distructure
const {rating , bname , price , quantity , picUrl} = props.book;
Does not depend on order , if property is not availabe then it initializes with null.
const{price, picUrl} = props.book;
const {price , ..rest} = props.book;
return rest;
Any components include slides:
1.External css = create class in Index.css and use in component.
2. Internal css = create property as object like:
'''

'''

then apply with style attribute and then pass the object

3. Inline CSS : In this method we use two curly brackets withs style attribute, all the CSS property must be single word for example: text-align becomes textAlign(Camel Case).