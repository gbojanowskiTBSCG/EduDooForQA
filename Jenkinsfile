@Library("jenkins-dsl@master") _

pipeline {
    agent any
     environment {
        APP_NAME = 'kags-tests'
    }
/*
    post {
        failure {
            //updateGitlabCommitStatus name: 'build', state: 'failed'
        }
        success {
            //updateGitlabCommitStatus name: 'build', state: 'success'
        }
    }
*/
    options {
        buildDiscarder(logRotator(numToKeepStr: '10', daysToKeepStr: '5', artifactDaysToKeepStr: '5', artifactNumToKeepStr: '10'))
    }
/*
    triggers {
        //gitlab(triggerOnPush: true, triggerOnMergeRequest: true, branchFilterType: 'All')
    }
*/
    stages {
         stage('Checkout') {
            steps {
                initialize('db-dxp-kags-tests')
                checkout scm
            }
        }

        stage('Build docker containers') {
            steps {
             dockerize('dxp/webtesting')
            }
        }
    }
}
