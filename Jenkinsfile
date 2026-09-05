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
                // dá permissão de execução ao binário do Jest
                sh 'chmod +x ./node_modules/.bin/jest'
                // roda os testes
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
