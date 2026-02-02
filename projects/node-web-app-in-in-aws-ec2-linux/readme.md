### Install git and nodejs in amazon linux
- sudo yum install git
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
- nvm install 20

### Download node-express project
- git clone https://java_kumar_arun@bitbucket.org/brain-mentor/node-web-app-in-in-aws-ec2-linux.git

### Create project environment
- cd node-web-app-in-in-aws-ec2-linux
- npm i
- npm run start

### Allow above app for the entire world
- Allow http and 5000 from the security group

### Access above app
- open your browser and enter below url
- http://**ec2-public-ip**:5000/home.html