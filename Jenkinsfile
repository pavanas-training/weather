pipeline {
    agent any
    tools{
        nodejs '18.0.0'
    }
    triggers {
        pollSCM '* * * * *'
    }
    stages{
        stage('Lint') {
            steps{
                sh 'npm install'
                sh 'npm run lint'
            }
        }
        stage('Build') {
            steps{
                sh 'npm run build'
            }
        }
    }
}