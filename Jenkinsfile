pipeline {

    agent any
    
        triggers {
        githubPush()
    }

    tools {
        nodejs 'NodeJS-25.2.1'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Gazelle2022/TP_jenkins.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Installation des dépendances'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Exécution des tests JavaScript'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Déploiement simulé'
                bat 'echo Déploiement simulé'
            }
        }
    }

    post {
        success {
            echo 'Pipeline exécuté avec succès'
        }
        failure {
            echo 'Pipeline échoué'
        }
    }
}
