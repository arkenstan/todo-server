pipeline {
  agent any
  stages {
    stage('Clone and checkout') {
      steps {
        git(url: 'https://github.com/arkenstan/todo-server.git', branch: 'dev')
        sh 'ls'
      }
    }

    stage('Image build') {
      steps {
        sh 'docker build --rm .'
      }
    }

  }
}