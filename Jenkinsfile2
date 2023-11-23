@Library("shared-library") _
pipeline {
    agent any
    tools{
        nodejs '16.19.0'
    }
    triggers {
        pollSCM '*/5 * * * *'
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
                publishHTML (target: [
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'coverage',
                  reportFiles: 'index.html',
                  reportName: "Coverage Report"
    ])

            }
        }
        stage('Conclusion') {
            steps{
               sh 'ls'
               zip(zipFile: 'buildfile.zip', dir:'build', overwrite : true)
               sh 'ls'
               dir('build')
               {
               sh 'ls'
               }
               echo "version: ${printSuccess()}"
            }
        }
    }
}