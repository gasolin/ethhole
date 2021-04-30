// Refer https://zhuanlan.zhihu.com/p/102642360
const fs = require('fs-extra')
const path = require('path')

const routes = [
  'project'
];

// copy index.html to 404.html
fs.copySync(path.join('build', 'index.html'), path.join('build', '404.html'))
// ​add a folder per route and copy index.html
routes.forEach((route) => {
  fs.copySync(path.join('build', 'index.html'), path.join('build', route, 'index.html'))
})
