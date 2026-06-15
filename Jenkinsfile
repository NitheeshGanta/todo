pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building...'
            }
        }

        stage('Deploy Firebase') {
            steps {
                bat 'firebase deploy --non-interactive'
            }
        }
    }
}
