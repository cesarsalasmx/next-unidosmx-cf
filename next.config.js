const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env:{
    graphql: 'http://localhost:4000/graphql'
  }
}