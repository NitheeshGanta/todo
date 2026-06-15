pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/NitheeshGanta/todo.git'
            }
        }

        stage('Deploy Firebase') {
            steps {
                bat 'firebase deploy --non-interactive'
            }
        }
    }
}
