
### start ec2 => 
```bash
sudo yum update -y
sudo yum install nginx -y
sudo systemctl enable nginx
sudo systemctl stop nginx

delete all file from - /usr/share/nginx/html/
sudo rm -rf /usr/share/nginx/html/*

sudo git clone https://github.com/arun2786/demo-web-app-ashwini-del.git

sudo cp -r demo-web-app-ashwini-del/* /usr/share/nginx/html/
sudo systemctl start nginx
```