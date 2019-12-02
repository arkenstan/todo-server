pipeline {
  agent {
    dockerfile {
      filename 'DockerFile'
    }

  }
  stages {
    stage('Clone and checkout') {
      agent {
        dockerfile {
          filename 'dockerfile'
        }

      }
      steps {
        git(url: 'https://github.com/arkenstan/todo-server.git', branch: 'dev')
      }
    }

    stage('Image build') {
      steps {
        sh '''docker ps -a
docker pull node'''
      }
    }

  }
}