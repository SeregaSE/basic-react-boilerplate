### Simple and minimalistic boilerplate for React
Made with:
<p align="center">
  <a href="https://github.com/facebook/react">
    <img alt="react logo" src="https://github.com/SeregaSE/basic-react-boilerplate/blob/master/docs/img/react.svg" width="144">
  </a>
  <a href="https://github.com/reactjs/redux">
      <img alt="redux logo" src="https://github.com/SeregaSE/basic-react-boilerplate/blob/master/docs/img/redux.svg" width="144">
   </a>
</p>

Boilerplate helps you start writing react-redux apps fast and easy.

#### Quick start
```sh
git clone https://github.com/SeregaSE/basic-react-boilerplate.git my-app
cd my-app
npm install
npm run dev
```
By default go to [http://localhost:8080/](http://localhost:8080/) at your browser for example.
![alt text](https://github.com/SeregaSE/basic-react-boilerplate/blob/master/docs/img/example.png "Example app screenshot")
When you are ready to deploy to production, create a bundle with `npm run build`.

**Branches:**
* master - includes only react and redux
* feature/react-redux-router - includes react, redux, react-router integrated with redux

**TODO list:**
- [ ] add es-lint
- [ ] add webpack.config.[prod/dev].js
- [ ] add css-modules
- [ ] add tests
- [ ] add branch with react + mobX