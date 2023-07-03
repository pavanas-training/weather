pipeline {
    agent any
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