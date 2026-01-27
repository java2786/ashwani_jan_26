EC2 - Linux

	OS - amazon linux 
	instance type - min
	hdd - 8gb
	keypair -> 

	networking - security group
		RDP for win
		SSH for linux - from my ip
		http - for anyone

sudo yum update -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl stop nginx
sudo systemctl status|stop|restart nginx

nginx server folder -> usr/share/nginx/html


cd /usr/share/nginx/html
sudo rm -rf *


