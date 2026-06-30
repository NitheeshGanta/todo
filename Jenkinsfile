pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
    stage('Check Firebase') {
            steps {
                bat 'firebase projects:list'
            }
    }
        stage('Deploy Firebase') {
            steps {
                bat '''
                firebase deploy ^
                --project todo-app-53239 ^
                --token %FIREBASE_TOKEN%
                '''
            }
        }
    }
}
