pipeline {
    docker {
        image 'node:lts-bullseye-slim' 
        args '-p 3000:3000' 
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages{
        stage('Lint') {
            steps{
                sh 'npm run lint'
            }
        }
    }
}