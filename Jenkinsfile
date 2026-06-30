pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building To-Do Application...'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                bat '''
                firebase deploy ^
                --project todo-app-53239 ^
                --token %FIREBASE_TOKEN%
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment to Firebase completed successfully!'
        }
        failure {
            echo 'Deployment failed. Check the console output.'
        }
    }
}
