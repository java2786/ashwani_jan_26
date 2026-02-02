### Install git and java in amazon linux
- sudo yum install git
- sudo yum install jdk-23-headful

### Download springboot project
- git clone https://java_kumar_arun@bitbucket.org/brain-mentor/java-springboot-rest-app-in-aws-ec2-linux.git

### Create project environment
- cd java-springboot-rest-app-in-aws-ec2-linux
- java -jar springboot-rest-app.jar

### Allow above app for the entire world
- Allow http and 8080 from the security group

### Access above app
- open your browser and enter below url
- http://**ec2-public-ip**:8080/api/movies