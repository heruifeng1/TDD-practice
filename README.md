# 练功房脚手架

如果你恰好也用 JavaScript 做练功房的练习，可以从这个脚手架开始入手。

准备步骤：

* `git clone https://github.com/heruifeng1/TDD-practice.git`
* `cd TDD-practice`
* `yarn install`

用 WebStorm 或者你习惯的任何 IDE（但是我强烈建议不要使用 WebStorm 之外的其他 IDE）导入工程，运行全部测试，你应该看到绿条。

```bash
$ yarn start #查看题目
$ yarn test #运行测试

------

 PASS  src/App.test.js
 PASS  src/dojo/fizzBuzz.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.681s
Ran all test suites.

Watch Usage: Press w to show more.
```

从这里开始你的 Dojo 练习。

## 题目
1.经典的 fizzbuzz
阶段一：
将其中 3 的倍数替换成“Fizz”，5 的倍数替换成“Buzz”。既能被 3 整除、又能被 5 整除的数则替换成“FizzBuzz”。

阶段二：
如果一个数能被 3 整除，或者包含数字 3，那么这个数就是“Fizz”
如果一个数能被 5 整除，或者包含数字 5，那么这个数就是“Buzz”

------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
