// ths will download jenkins image into your docker
docker pull jenkins / jenkins

//create jenkins folder 
$ mkdir $HOME / jenkins_home

// run a local jenkins container
docker run -d -p 8080:8080 \
-v $PWD/jenkins_home:/var/jenkins_home \
--name jenkins - ctd jenkins / jenkins

// check the log to see whether jenkins is running
docker logs jenkins-ctd 