# AWS S3 - Complete Beginner's Guide  
### Understanding Buckets, ACL, Versioning, and Bucket Policies  
  
---  
  
## Who Is This Guide For?  
  
This guide is for students and freshers who are just starting their journey with cloud technologies. If you have never used AWS S3 before, this guide will walk you through everything from creating your first bucket to making files publicly accessible using two different approaches.  
  
No prior AWS experience is required. Just follow each step carefully, and by the end, you will understand how S3 storage works in the real world.  
  
---  
  
## What Is AWS S3?  
  
AWS S3 stands for **Amazon Simple Storage Service**. It is a cloud-based storage service where you can store files (called **objects**) inside containers (called **buckets**).  
  
Think of it like this:  
  
- **S3** is like a huge digital warehouse owned by Amazon.  
- **Bucket** is like a shelf inside that warehouse with a unique name.  
- **Object** is the actual file you place on that shelf — a photo, a PDF, a video, a document, etc.  
  
**Real-world example:**  
Suresh works at a company in Pune that builds a portal for LIC (Life Insurance Corporation of India). They need to store customer policy documents and profile photos somewhere safe and accessible. They use AWS S3 to store all these files in the cloud so that anyone with the right permission can access them from anywhere in India.  
  
---  
  
## Two Big Concepts You Will Learn Today  
  
This guide covers two approaches to making your files publicly accessible in S3:  
  
1. **Using ACL (Access Control List) — the traditional way**  
2. **Using Bucket Policy — the modern, recommended way**  
  
Let us go through both, step by step.  
  
---  
  
---  
  
# PART 1 — Creating a Bucket with ACL Enabled  
  
---  
  
## Step 1 — Log In to AWS Console  
  
1. Open your browser and go to [https://aws.amazon.com](https://aws.amazon.com)  
2. Click on **Sign In to the Console**  
3. Enter your AWS account credentials  
4. Once inside, use the search bar at the top and type **S3**  
5. Click on **S3** from the search results  
  
You are now on the S3 dashboard.  
  
---  
  
## Step 2 — Create a New Bucket (ACL Enabled)  
  
1. Click the orange **Create bucket** button on the top right  
2. You will see a form with several settings. Fill them in as described below.  
  
### Bucket Name  
- Enter a globally unique name. Bucket names must be unique across all AWS accounts worldwide.  
- Example: `suresh-lic-docs-012026`  
- Use lowercase letters, numbers, and hyphens only. No spaces.  
  
### AWS Region  
- Select a region close to your users.  
- For India-based projects, choose **Asia Pacific (Mumbai) — ap-south-1**  
  
### Object Ownership  
This is the important setting for Part 1.  
  
- You will see two options:  
  - **ACLs disabled (recommended)** — bucket owner controls everything  
  - **ACLs enabled** — you can grant permissions to individual objects  
- For Part 1, select **ACLs enabled**  
- A sub-option will appear. Choose **Bucket owner preferred**  
  
### Block Public Access Settings  
- Uncheck **Block all public access**  
- AWS will show a warning. Check the confirmation checkbox that says you understand the risk.  
  
### Versioning  
- Scroll down to **Bucket Versioning**  
- Click **Enable**  
- This keeps multiple versions of the same file. If Suresh accidentally overwrites a policy document, he can restore the previous version.  
  
### All Other Settings  
- Leave them at default for now  
  
3. Scroll to the bottom and click **Create bucket**  
  
Your bucket is now created with ACL enabled.  
  
---  
  
## Step 3 — Upload a File (Object)  
  
1. Click on your newly created bucket name to open it  
2. Click the **Upload** button  
3. Click **Add files** and select any file from your computer  
   - For practice, you can create a simple text file called `welcome.txt` and write `Hello from Suresh in Pune!` inside it  
4. Leave all other settings as default  
5. Click **Upload**  
  
Your file is now uploaded inside the bucket.  
  
---  
  
## Step 4 — Try to Access the Object URL (It Will Be Denied)  
  
1. Click on the uploaded file name to open its details  
2. You will see a field called **Object URL**  
   - It looks something like this:  
   - `https://suresh-lic-docs-012026.s3.ap-south-1.amazonaws.com/welcome.txt`  
3. Copy this URL and open it in a new browser tab  
4. You will see an **Access Denied** error  
  
**Why is it denied?**  
Even though you uploaded the file successfully, S3 does not make files public by default. You have to explicitly allow public access.  
  
---  
  
## Step 5 — Make the Object Public Using Actions (ACL Method)  
  
1. Go back to your bucket and click on the file `welcome.txt`  
2. Click the **Actions** dropdown button (visible when you check the checkbox next to the file)  
3. From the dropdown, select **Make public using ACL**  
4. A confirmation screen will appear. Click **Make public**  
  
Now go back and open the Object URL in your browser again.  
  
This time the file content will be visible. You will see:  
  
```  
Hello from Suresh in Pune!  
```  
  
**What just happened?**  
By using ACL (Access Control List), you granted public read access to that specific object. This is the traditional way of making individual files public in S3.  
  
---  
  
## Step 6 — Understanding Versioning in Action  
  
1. Create a new version of `welcome.txt` on your computer. Change the content to:  
   `Hello from Suresh! This is Version 2.`  
2. Go to your bucket and upload the same file again (same name: `welcome.txt`)  
3. Click **Upload**  
  
Now click on the file name. You will see a **Versions** tab. Click it.  
  
You will see two versions:  
- Version 1 — the original file  
- Version 2 — the newly uploaded file (marked as latest)  
  
You can download or restore any version. This is incredibly useful in production systems where you must never lose older data.  
  
---  
  
---  
  
# PART 2 — Creating a Bucket with ACL Disabled (Using Bucket Policy)  
  
---  
  
## Why Do We Need This?  
  
In Part 1, we used ACL to make objects public one by one. This approach is fine for small cases, but imagine Ramesh is managing a Flipkart-like portal where thousands of product images are uploaded every day. It is not practical to manually make each image public using ACL.  
  
The better, modern approach is to use a **Bucket Policy** — a JSON-based rule that says "allow everyone to read all files inside this bucket" in one single step.  
  
Also, AWS now recommends disabling ACL and using Bucket Policies for better control and security.  
  
---  
  
## Step 1 — Create a New Bucket (ACL Disabled)  
  
1. Go to S3 and click **Create bucket**  
2. Fill in the details:  
   - **Bucket Name:** `demo-bm-022026` (use this exact name for the policy example later)  
   - **Region:** Asia Pacific (Mumbai) — ap-south-1  
  
### Object Ownership  
- Select **ACLs disabled (recommended)**  
- This means ACL options will not be available for individual objects  
  
### Block Public Access Settings  
- Uncheck **Block all public access**  
- Check the confirmation checkbox  
  
### Versioning  
- Click **Enable** under Bucket Versioning  
  
3. Click **Create bucket**  
  
---  
  
## Step 2 — Upload a File  
  
1. Open your new bucket `demo-bm-022026`  
2. Click **Upload** and add a file  
   - Example: `products.txt` with content `LIC Policy No: 123456 - Ramesh Kumar`  
3. Click **Upload**  
  
---  
  
## Step 3 — Try to Access the Object URL (It Will Be Denied)  
  
1. Click on `products.txt` and copy the **Object URL**  
2. Open it in a new browser tab  
3. You will see **Access Denied**  
  
Same as before — files are private by default.  
  
---  
  
## Step 4 — Try "Make Public Using ACL" (It Is Not Available)  
  
1. Check the checkbox next to `products.txt`  
2. Click the **Actions** dropdown  
3. Notice that **"Make public using ACL"** option is **not available** this time  
  
**Why?**  
Because you selected **ACLs disabled** when creating this bucket. ACL controls are completely turned off. You cannot grant permissions at the object level using ACL anymore.  
  
So how do we make files public? We use a **Bucket Policy**.  
  
---  
  
## Step 5 — Add a Bucket Policy  
  
A Bucket Policy is a JSON document that defines rules for who can access what inside your bucket.  
  
Follow these steps:  
  
1. Click on your bucket name `demo-bm-022026`  
2. Click the **Permissions** tab  
3. Scroll down to the **Bucket policy** section  
4. Click the **Edit** button  
  
You will see an empty text editor. Paste the following JSON policy into it:  
  
```json  
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Sid": "Statement1",  
      "Principal": "*",  
      "Effect": "Allow",  
      "Action": [  
        "s3:GetObject"  
      ],  
      "Resource": [  
        "arn:aws:s3:::demo-bm-022026/*"  
      ]  
    }  
  ]  
}  
```  
  
5. Click **Save changes**  
  
---  
  
## Step 6 — Understanding the Policy (What and Whom)  
  
Let us break down each part of this JSON policy so you understand it fully.  
  
```  
"Version": "2012-10-17"  
```  
This is not today's date. It is the version of the AWS policy language being used. Always use this value as-is.  
  
---  
  
```  
"Statement": [ ... ]  
```  
A policy can have multiple rules. Each rule goes inside this array. We have one rule here.  
  
---  
  
```  
"Sid": "Statement1"  
```  
This is just a label or ID for this rule. You can name it anything meaningful like `"AllowPublicRead"`. It is optional but helpful for identification.  
  
---  
  
```  
"Principal": "*"  
```  
**WHOM does this rule apply to?**  
  
The `*` means **everyone** — any person, any system, any browser anywhere in the world. It is completely public.  
  
If you wanted to restrict access to only one specific AWS user, you would write something like:  
`"Principal": { "AWS": "arn:aws:iam::123456789012:user/Ramesh" }`  
  
But for our case, we want the files to be publicly readable, so `*` is correct.  
  
---  
  
```  
"Effect": "Allow"  
```  
This says the rule is **granting** permission. The other option is `"Deny"`, which would block access.  
  
---  
  
```  
"Action": [ "s3:GetObject" ]  
```  
**WHAT is allowed?**  
  
`s3:GetObject` means the person is allowed to **read/download** objects from S3. They cannot upload, delete, or modify anything. This is a read-only permission.  
  
Other possible actions include:  
- `s3:PutObject` — upload files  
- `s3:DeleteObject` — delete files  
- `s3:ListBucket` — list all files in a bucket  
  
---  
  
```  
"Resource": [ "arn:aws:s3:::demo-bm-022026/*" ]  
```  
**WHAT does this rule apply to?**  
  
`arn:aws:s3:::demo-bm-022026/*` means all objects (`/*`) inside the bucket named `demo-bm-022026`.  
  
The `/*` at the end is very important. Without it, the policy would apply to the bucket itself, not the files inside it.  
  
If you only wanted to allow access to files inside a specific folder (called a prefix in S3), you could write:  
`"arn:aws:s3:::demo-bm-022026/products/*"`  
  
---  
  
## Step 7 — Access the Object URL Again  
  
1. Go back to your bucket and click on `products.txt`  
2. Copy the **Object URL**  
3. Open it in a new browser tab  
  
This time you will see the file contents:  
  
```  
LIC Policy No: 123456 - Ramesh Kumar  
```  
  
The Bucket Policy worked. Now every file uploaded to this bucket will automatically be publicly readable — no need to manually set permissions on each file individually.  
  
---  
  
---  
  
# PART 1 vs PART 2 — Side-by-Side Comparison  
  
| Feature | ACL Enabled (Part 1) | ACL Disabled + Policy (Part 2) |  
|---|---|---|  
| Control Level | Per object (file by file) | Entire bucket at once |  
| Public Access Setup | Actions > Make public using ACL | Permissions > Bucket Policy (JSON) |  
| Recommended by AWS | No (legacy) | Yes (modern approach) |  
| Versioning Works | Yes | Yes |  
| Good For | Small, manual use cases | Production apps, large scale |  
| Who Can Access | Controlled per object | Controlled by JSON rules |  
  
---  
  
---  
  
# Key Concepts Recap  
  
**Bucket** — A container in S3 where you store files. Must have a globally unique name.  
  
**Object** — Any file stored inside a bucket (image, PDF, text, video, etc.)  
  
**Object URL** — The public web address of your file. Not accessible unless you explicitly allow it.  
  
**ACL (Access Control List)** — A legacy method to set permissions on individual objects. Available only when ACL is enabled during bucket creation.  
  
**Bucket Policy** — A JSON document that sets access rules for the entire bucket. This is the modern, recommended approach.  
  
**Versioning** — Keeps multiple versions of the same file. Protects against accidental overwrites or deletions.  
  
**Principal** — WHO the policy applies to. `*` means everyone.  
  
**Action** — WHAT the policy allows or denies. `s3:GetObject` means read access.  
  
**Resource** — WHICH objects the policy covers. `arn:aws:s3:::bucket-name/*` means all files in the bucket.  
  
**Effect** — Whether to Allow or Deny the action.  
  
---  

  
## Assignment — Flipkart Product Images Bucket (ACL Enabled)  
  
**Story:**  
Dinesh is building a product listing portal for a small Flipkart-like e-commerce startup in Chennai. He wants to store product images on S3 and make them accessible to website visitors.  
  
**Your Task:**  
  
1. Create an S3 bucket named `dinesh-products-chennai-<your-initials>` with ACL enabled and public access unblocked.  
2. Enable versioning on the bucket.  
3. Upload an image file of any product (or a text file named `product1.txt` with some product description).  
4. Try to access the Object URL — confirm you get Access Denied.  
5. Use Actions > Make public using ACL to make the file public.  
6. Access the Object URL again — confirm the file is now visible.  
7. Upload a second version of the same file with updated content.  
8. Check the Versions tab and confirm both versions are listed.  
  
**Submit/Document:**  
Write down the Object URL of your file and confirm it is publicly accessible.  
  
---  
  
*Guide prepared for beginner-level students exploring AWS Cloud Storage. Practice each step hands-on in your own AWS Free Tier account for the best learning outcome.*