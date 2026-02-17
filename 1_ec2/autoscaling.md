Overview
This guide will help you set up an AWS EC2 instance with Auto Scaling. Auto Scaling automatically adjusts the number of EC2 instances based on traffic and demand, ensuring high availability and reliability for your application.
Prerequisites:
An AWS account with necessary permissions.
Basic understanding of AWS EC2 and Auto Scaling.

Step 1: Launch an EC2 Instance

Open the EC2 Dashboard:
Go to the AWS EC2 Console.
Launch an EC2 Instance:
Click Launch Instance.
Choose an Amazon Machine Image (AMI): Select Amazon Linux 2 AMI (free)
Choose an Instance Type: Select an instance type (e.g., t2.micro for free tier).
Add Tags: Optionally add tags (e.g., Name: MyAutoScalingInstance).
Configure Security Group: Create or select a security group allowing HTTP (port 80) or HTTPS (port 443) access, and SSH (port 22) for management.
Key Pair: Select an existing key pair or create a new one for SSH access. 
Review and Launch: Review settings and click Launch. 
Note the Instance ID:
After launching, note the instance ID for use in the Auto Scaling setup.

Step 2: Create an EC2 Launch Template
Open the EC2 Dashboard:
Go to Launch Templates under Instances in the EC2 Console.
Create a Launch Template:
Click Create launch template.
Name: Enter a name (e.g., MyAutoScalingTemplate).
AMI: Choose the AMI you used to launch the instance.
Instance type: Select the same instance type you used earlier.
Key pair: Select the key pair you used to launch the instance.
Create Launch Template: Click Create launch template.

Step 3: Create an Auto Scaling Group
Open the EC2 Dashboard:
Go to Auto Scaling Groups under Auto Scaling.
Create an Auto Scaling Group:
Click Create Auto Scaling group.
Launch template: Select the launch template created earlier.
Group name: Enter a name (e.g., MyAutoScalingGroup).
VPC and subnets: Select the same VPC and subnets as before.
Group size: Set the minimum, maximum, and desired number of instances. For example:
Minimum: 1
Maximum: 3
Desired capacity: 1
Scaling Policies: Configure scaling policies if desired:
Add Policy: Click Create a policy.
Scale out policy: Add an instance when CPU utilization exceeds 70% for 5 minutes.
Scale in policy: Remove an instance when CPU utilization is below 30% for 5 minutes.
Review and Create: Review your settings and click Create Auto Scaling group.

Step 4: Monitor Auto Scaling
Open the EC2 Dashboard:
Go to Auto Scaling Groups to view the group you created.
Check Scaling Activities:
Monitor the activities and ensure instances are added or removed according to the policies you set.
Test Scaling:
You can test the scaling policies by creating load on your instances (e.g., by using a load testing tool or generating traffic).


