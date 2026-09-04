pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Compilando aplicação...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Executando testes...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy concluído!'
            }
        }
    }
}
