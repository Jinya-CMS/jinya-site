// Uses Declarative syntax to run commands inside a container.
pipeline {
    triggers {
        pollSCM("*/5 * * * *")
    }
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  imagePullSecrets:
    - name: dev-imanuel-jenkins-regcred
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
  containers:
  - name: docker
    image: registry.imanuel.dev/library/docker:stable
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
'''
            defaultContainer 'node'
        }
    }
    stages {
        stage('Push') {
            when {
                buildingTag()
            }
            steps {
                container('docker') {
                    sh "docker build -t registry-hosted.imanuel.dev/sites/imanuel.ulbricht.codes:$TAG_NAME ."
                    withDockerRegistry(credentialsId: 'nexus.imanuel.dev', url: 'https://registry-hosted.imanuel.dev') {
                        sh "docker push registry-hosted.imanuel.dev/sites/imanuel.ulbricht.codes:$TAG_NAME"
                    }
                }
            }
        }
    }
}
