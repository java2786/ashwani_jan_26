# Running AWS EC2 with Windows Server 2025 - Complete Beginner Guide

## Introduction

Welcome to AWS EC2! In this guide, you'll learn how to launch your first Windows Server on Amazon's cloud platform. Think of EC2 (Elastic Compute Cloud) as renting a computer in Amazon's data center that you can access from anywhere.

**What You'll Learn:**
- Setting up an AWS account
- Launching a Windows Server 2025 instance
- Connecting to your remote server
- Installing Nginx web server
- Running your first HTML website

---

## Prerequisites

Before we start, make sure you have:
- A laptop/desktop with internet connection
- An email address (Gmail, Outlook, etc.)
- A valid debit/credit card (for verification only - we'll use free tier)
- Phone number for verification

---

## Part 1: Creating Your AWS Account

### Step 1: Sign Up for AWS

1. Open your browser and go to **https://aws.amazon.com**
2. Click on **"Create an AWS Account"** button
3. Fill in your details:
   - **Email address:** suresh.kumar@gmail.com (use your actual email)
   - **Account name:** SureshLearning (choose any name)
   - **Password:** Create a strong password

4. Click **"Continue"**

### Step 2: Contact Information

1. Select **Account Type:** Personal
2. Fill your details:
   - **Full Name:** Suresh Kumar
   - **Phone Number:** +91-9876543210 (your actual number)
   - **Address:** Flat 301, MG Road, Pune, Maharashtra
   - **PIN Code:** 411001

3. Read and accept the AWS Customer Agreement
4. Click **"Create Account and Continue"**

### Step 3: Payment Information

1. Enter your debit/credit card details
   - Don't worry! AWS will only charge ₹2 for verification
   - This amount will be refunded within 3-5 days

2. Complete the card verification

### Step 4: Identity Verification

1. Choose **Phone verification**
2. Enter your phone number
3. AWS will call you or send SMS with a 4-digit code
4. Enter the code to verify

### Step 5: Select Support Plan

1. Choose **"Basic Support - Free"**
2. Click **"Complete Sign Up"**

**Congratulations!** Your AWS account is ready. You'll receive a confirmation email.

---

## Part 2: Launching Windows Server 2025 EC2 Instance

### Step 1: Access EC2 Dashboard

1. Sign in to **AWS Management Console**
2. In the search bar at top, type **"EC2"**
3. Click on **"EC2"** from the results
4. You'll see the EC2 Dashboard

### Step 2: Launch Instance

1. Click the orange **"Launch Instance"** button
2. You'll see the instance configuration page

### Step 3: Name Your Instance

1. Under **"Name and tags"**, enter:
   - **Name:** MyFirstWindowsServer
   
   (This helps you identify your server later)

### Step 4: Choose Windows Server Image

1. Scroll to **"Application and OS Images"** section
2. Click on **"Quick Start"** tab (should be selected)
3. Click on **"Windows"** option
4. From the dropdown, select:
   - **"Microsoft Windows Server 2025 Base"**
5. Make sure it says **"Free tier eligible"** in green

### Step 5: Select Instance Type

1. Under **"Instance type"** section
2. Select **"t2.micro"** from the dropdown
   - This gives you: 1 vCPU and 1 GB RAM
   - It's free tier eligible for 750 hours/month

**Note:** You mentioned 2GB RAM, but t2.micro (1GB) is the only free tier option. For 2GB, you'd need t3.small which costs money.

### Step 6: Create Key Pair for Access

1. Scroll to **"Key pair (login)"** section
2. Click **"Create new key pair"**
3. Fill the details:
   - **Key pair name:** suresh-windows-key
   - **Key pair type:** RSA
   - **Private key file format:** .pem (for use with OpenSSH)

4. Click **"Create key pair"**
5. A file `suresh-windows-key.pem` will download
6. **Important:** Save this file safely - you'll need it later!

### Step 7: Configure Network Settings

1. Under **"Network settings"**, click **"Edit"**
2. Keep these settings:
   - **VPC:** Default
   - **Subnet:** No preference
   - **Auto-assign public IP:** Enable

3. Under **"Firewall (security groups)"**:
   - Select **"Create security group"**
   - **Security group name:** windows-web-server-sg
   
4. Add these rules by clicking **"Add security group rule"**:

   **Rule 1 - RDP (Remote Desktop):**
   - Type: RDP
   - Port: 3389
   - Source: My IP (for security)
   
   **Rule 2 - HTTP:**
   - Type: HTTP
   - Port: 80
   - Source: Anywhere (0.0.0.0/0)
   
   **Rule 3 - HTTPS:**
   - Type: HTTPS
   - Port: 443
   - Source: Anywhere (0.0.0.0/0)

### Step 8: Configure Storage

1. Under **"Configure storage"**:
   - Keep default: **30 GB** (free tier allows up to 30 GB)
   - Volume type: **gp2** (General Purpose SSD)

### Step 9: Launch Instance

1. Review all settings in the **"Summary"** panel on right
2. Check **"Number of instances"**: 1
3. Click the orange **"Launch instance"** button
4. You'll see a success message!

---

## Part 3: Connecting to Your Windows Server

### Step 1: Get Instance Password

1. Go back to **EC2 Dashboard**
2. Click on **"Instances"** in left menu
3. You'll see your instance **"MyFirstWindowsServer"**
4. Wait until **"Instance state"** shows **"Running"** (takes 2-3 minutes)
5. Check the **"Status check"** becomes **"2/2 checks passed"**

6. Select your instance (checkbox on left)
7. Click **"Connect"** button at top
8. Choose **"RDP client"** tab
9. Click **"Get password"**
10. Click **"Upload private key file"**
11. Select your downloaded `suresh-windows-key.pem` file
12. Click **"Decrypt Password"**
13. **Copy the password** - you'll need it!

### Step 2: Download RDP File

1. On the same screen, click **"Download remote desktop file"**
2. A `.rdp` file will download

### Step 3: Connect via Remote Desktop

**For Windows Users:**
1. Double-click the downloaded `.rdp` file
2. Click **"Connect"**
3. When asked for credentials:
   - Username: **Administrator**
   - Password: *Paste the password you copied*
4. Click **"Yes"** if you get a certificate warning

**For Mac Users:**
1. Download **Microsoft Remote Desktop** from App Store
2. Open the app
3. Click **"Add PC"**
4. Enter your instance's **Public IP** (find it in EC2 console)
5. Use username: **Administrator**
6. Use the decrypted password

**Congratulations!** You're now connected to your Windows Server in the cloud!

---

## Part 4: Installing Nginx Web Server

### Step 1: Download Nginx

1. Inside your Windows Server, open **Microsoft Edge** browser
2. Go to: **http://nginx.org/en/download.html**
3. Find **"nginx/Windows"** section
4. Click on **nginx-1.24.0** (or latest stable version) zip file
5. Save it to **Downloads** folder

### Step 2: Extract Nginx

1. Open **File Explorer** (Windows key + E)
2. Go to **Downloads** folder
3. Right-click on **nginx-1.24.0.zip**
4. Select **"Extract All"**
5. Extract to: **C:\nginx**
6. Click **"Extract"**

### Step 3: Start Nginx

1. Open **Command Prompt as Administrator**:
   - Click Start menu
   - Type **"cmd"**
   - Right-click on **"Command Prompt"**
   - Choose **"Run as administrator"**

2. Navigate to nginx folder:
   ```
   cd C:\nginx\nginx-1.24.0
   ```

3. Start nginx:
   ```
   start nginx
   ```

4. Verify it's running:
   ```
   tasklist /fi "imagename eq nginx.exe"
   ```
   
   You should see two nginx.exe processes running.

### Step 4: Test Nginx Locally

1. Open Edge browser in your Windows Server
2. Go to: **http://localhost**
3. You should see **"Welcome to nginx!"** page

Perfect! Nginx is running.

---

## Part 5: Creating and Deploying Your HTML Website

### Step 1: Create HTML File

1. Open **Notepad** in your Windows Server
2. Copy and paste this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suresh's First Cloud Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            color: white;
        }
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 50px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
        }
        .info {
            margin-top: 30px;
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Welcome to My Cloud Server! 🎉</h1>
        <p>Hello! I'm Suresh from Pune</p>
        <p>This website is running on:</p>
        <div class="info">
            <p><strong>AWS EC2 Instance</strong></p>
            <p>Windows Server 2025</p>
            <p>Powered by Nginx Web Server</p>
            <p>My First Cloud Deployment!</p>
        </div>
        <p style="margin-top: 30px; font-size: 0.9em;">
            Date: <span id="date"></span>
        </p>
    </div>
    
    <script>
        document.getElementById('date').textContent = new Date().toLocaleDateString('en-IN');
    </script>
</body>
</html>
```

3. Click **File → Save As**
4. Navigate to: **C:\nginx\nginx-1.24.0\html**
5. In **"File name"**, type: **index.html**
6. In **"Save as type"**, select: **All Files**
7. Click **"Save"**
8. When asked to replace, click **"Yes"**

### Step 2: Access Your Website from Internet

1. Go back to **AWS EC2 Console** in your laptop
2. Find your instance's **Public IPv4 address** (something like: 13.234.56.78)
3. Copy this IP address
4. Open a browser on **your laptop** (not the server)
5. Paste the IP address in the browser: **http://13.234.56.78**

**Amazing!** You should see your custom website running on your cloud server!

---

## Part 6: Managing Your Nginx Server

### Useful Nginx Commands

Open Command Prompt as Administrator and navigate to nginx folder first:
```
cd C:\nginx\nginx-1.24.0
```

**Stop Nginx:**
```
nginx -s stop
```

**Reload Configuration:**
```
nginx -s reload
```

**Restart Nginx:**
```
nginx -s quit
start nginx
```

**Check if Nginx is Running:**
```
tasklist /fi "imagename eq nginx.exe"
```

---

## Part 7: Important - Stopping Your Instance (To Avoid Charges)

When you're done practicing:

1. Go to **EC2 Console**
2. Select your instance
3. Click **Instance State → Stop**
4. **Don't terminate** unless you want to delete it permanently

**Remember:** 
- Free tier gives you 750 hours/month (about 31 days)
- Stopped instances don't consume running hours
- Always stop your instance when not in use

---

## Real-World Scenario

**Scenario:** Ramesh works at a startup in Chennai. His manager asked him to quickly deploy a landing page for a new product launch. Instead of buying a physical server (which costs ₹50,000+), Ramesh uses AWS EC2 free tier to:

1. Launch a Windows Server in 10 minutes
2. Install Nginx
3. Deploy the HTML landing page
4. Share the public IP with his team
5. Total cost: ₹0 (within free tier)
6. Time saved: 2 weeks compared to traditional server setup

This is the power of cloud computing!

**Happy Learning!**
