module.exports = {
  name: 'whitehole-controller',
  version: '1.0.0',
  description: 'Whitehole Controller Application',
  main: 'backend/index.js',
  scripts: {
    'start': 'node backend/index.js',
    'dev': 'nodemon backend/index.js',
    'test': 'echo \"Error: no test specified\" && exit 1'
  },
  dependencies: {
    'express': '^4.21.2'
  },
  devDependencies: {
    'nodemon': '^3.0.3'
  },
  bolt: {
    port: 3000,
    watch: ['backend/**/*.js'],
    ignore: ['node_modules', 'logs', 'dist'],
    env: {
      NODE_ENV: 'development'
    }
  }
}; 