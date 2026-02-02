### Install Python Env in ubuntu
- sudo apt update
- sudo apt install git -y  
- sudo apt install python3 -y  
- sudo apt install python3-pip -y  
- sudo apt install python3-venv -y  


### Download python project
- git clone https://github.com/java2786/ashwani_jan_26.git

### Create project environment
- cd ashwani_jan_26/projects/python-in-aws-ec2-ubuntu
- python3 -m venv my_env
- source my_env/bin/activate
- cd python_project
- python3 -m pip install django
- python3 manage.py makemigrations
- python3 manage.py migrate
- python3 manage.py runserver 0.0.0.0:8000

### Allow above app for the entire world
- Allow **http** and **8000** from the security group

### Access above app
- open your browser and enter below url
- http://**ec2-public-ip**:8000/flights/