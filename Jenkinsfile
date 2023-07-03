pipeline {
    agent: any
    triggers {
        pollSCM '* * * * *'
    }
    stages{
        stage('Lint') {
            sh 'npm run lint'
        }
    }
}