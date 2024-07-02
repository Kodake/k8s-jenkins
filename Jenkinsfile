pipeline {
    agent any

    stages {
        stage('docker compose down') {
            steps {
                script {
                    bat "docker-compose down"
                }
            }
        }
        stage('docker compose build') {
            steps {
                script {
                    bat "docker-compose up --build -d"
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    bat "docker login"
                    bat "docker tag k8s-frontend:latest kodake/k8s-frontend:latest"
                    bat "docker push kodake/k8s-frontend:latest"
                    bat "docker tag k8s-backend:latest kodake/k8s-backend:latest"
                    bat "docker push kodake/k8s-backend:latest"
                }
            }
        }
        stage('minikube start') {
            steps {
                script {
                    bat "minikube start"
                }
            }
        }
        stage('kubectl deployment') {
            steps {
                script {
                    bat "kubectl apply -f .\\deployment.yml"
                }
            }
        }
        stage('kubectl service') {
            steps {
                script {
                    bat "kubectl apply -f .\\service.yml"
                }
            }
        }
        stage('minikube tunnel') {
            steps {
                script {
                    bat "minikube tunnel"
                }
            }
        }
    }
}
