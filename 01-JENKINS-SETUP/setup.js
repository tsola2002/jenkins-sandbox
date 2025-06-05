// ths will download jenkins image into your docker
docker pull jenkins/jenkins

//create jenkins folder 
mkdir $HOME/jenkins_home

// run a local jenkins container
docker run -d -p 8080:8080 \
-v $HOME/jenkins_home:/var/jenkins_home \
--name jenkins - ctd jenkins / jenkins

// check the log to see whether jenkins is running
docker logs jenkins-ctd 


// log into jenkins container 
docker exec - it old - jenkins bash
docker exec -it jenkins bash


// this will copy a bash script from your local filesystem into a docker container
docker cp script.sh old - jenkins: /tmp/script.sh
docker cp script.sh jenkins:/tmp/script.sh 