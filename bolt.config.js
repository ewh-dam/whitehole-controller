module.exports = {
  name: 'whitehole-controller',
  version: '1.0.0',
  description: 'Whitehole Controller Application',
  main: 'backend/index.js',
  scripts: {
    'start': 'node backend/index.js',
    'dev': 'concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\"',
    'test': 'echo \"Error: no test specified\" && exit 1'
  },
  dependencies: {
    'express': '^4.21.2'
  },
  devDependencies: {
    'nodemon': '^3.0.3',
    'concurrently': '^8.2.2'
  },
  bolt: {
    port: 3000,
    watch: ['backend/**/*.js', 'frontend/**/*'],
    ignore: ['node_modules', 'logs', 'dist', '.next'],
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
      NEXT_PUBLIC_API_URL: 'http://localhost:3000'
    },
    debug: {
      port: 9229,
      sourceMaps: true
    },
    terminal: {
      shell: '/bin/bash',
      cwd: 'frontend'
    },
    editor: {
      theme: 'dark',
      fontSize: 14,
      tabSize: 2,
      wordWrap: 'on'
    },
    git: {
      autoCommit: true,
      commitMessage: 'Auto-commit from Bolt.new'
    }
  }
}; 