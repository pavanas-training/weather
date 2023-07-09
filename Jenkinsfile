@Library("shared-library") _
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
            }
        }
        stage('Build') {
            steps{
                sh 'npm run build'
            }
        }
        stage('Conclusion') {
            steps{
                print()
            }
        }
    }
}