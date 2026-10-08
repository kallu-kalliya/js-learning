# npm i typescript --save-dev
# tsc is a typescript compier which coverts a ts fie to a js one 
# npx tsc app.ts
npx tsc app.ts --watch 
// it now contiously checks for any changes to the ts file 




##### exclude JS files in tsconfig.json
If you have a tsconfig.json, open it (or create one with npx tsc --init) and add this:
we did this cuzz when we were adding ts code and using tsc to create a js file 
it shows error in that ts file cause it was including js file also 