pipeline {
   agent any

   tools {nodejs "Node12"}

   environment {
       CHROME_BIN = '/bin/google-chrome'
       CYPRESS_RECORD_KEY = credentials('cypress-record-key')
      
   }

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
         Parallel{
             stage('Test 1') {
                  steps {
                sh 'npm run test:ci:record'
                  }
               }
             
             stage('Test 2') {
                  steps {
                sh 'npm run test:ci:record'
                  }
               }

       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}
