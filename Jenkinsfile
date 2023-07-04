pipeline {
    agent any
    tools{
        nodejs '16.19.0'
    }
    triggers {
        pollSCM '*/15 * * * *'
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