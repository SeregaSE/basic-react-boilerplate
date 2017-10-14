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

#### Description
Boilerplate helps you start writing react-redux apps fast and easy. I am trying to make simple tool without lots of libs and dependencies. I hope it will helps students or people who studying frontend development not to dive in deep of javascript mobules and libs.
Build your app with react, redux and webpack. Link your project, build for production, use development tools like HMR, redux-logger.

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
* [master](https://github.com/SeregaSE/basic-react-boilerplate) - includes only react and redux
* [react-redux-router](https://github.com/SeregaSE/basic-react-boilerplate/tree/feature/react-router-redux) - includes react, redux, react-router integrated with redux

**TODO list:**
- [x] add es-lint
- [x] add webpack.config.[production/development].js
- [ ] good example app for demonstration
- [ ] add tests
- [ ] add branch with react + mobX
- [ ] add css-modules