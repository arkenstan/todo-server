pipeline {
  agent {
    dockerfile {
      filename 'DockerFile'
    }

  }
  stages {
    stage('Image Build') {
      agent {
        dockerfile {
          filename 'dockerimage'
        }

      }
      steps {
        sh '''echo "HELLO"
docker pull node'''
      }
    }

  }
}