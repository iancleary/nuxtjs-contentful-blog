# Author credit (modified for my uses)
# 
# https://gist.githubusercontent.com/SavvyGuard/6115006/
# raw/7d1770ec559d5a88fef07b74db0bffac61c233df/botos3upload.py


# do not inlcude python interpreter as this will be called
# directly with the update_site.sh bash script
# with a venv sourced already

import os
import boto3

print("Hello from script")

APP_DIR = os.environ["PYTHON_WORKING_FOLDER"]
print(APP_DIR)

# Set these to change what to upload
DIR_UPLOAD_LIST = ["css", "ico", "img", "js"]
FILE_LIST = ["index.html", "error.html", "LICENSE"]


# Fill these in - you get them when you sign up for S3
AWS_ACCESS_KEY_ID = os.environ["IANCLEARY_ME_AWS_ACCESS_KEY_ID"]
AWS_ACCESS_KEY_SECRET = os.environ["IANCLEARY_ME_AWS_ACCESS_KEY_SECRET"]
# Fill in info on data to upload
# destination bucket name
bucket_name = os.environ["IANCLEARY_ME_BUCKET"]

# yaniv-g (https://github.com/boto/boto3/issues/358#issuecomment-346093506)

s3_resource = boto3.resource('s3',
                    aws_access_key_id=AWS_ACCESS_KEY_ID,
                    aws_secret_access_key=AWS_ACCESS_KEY_SECRET)

def upload_directory(src_dir:str, bucket_name:str, dst_dir:str="", logging=True):
    """
    src_dir: no trailing slash
    bucket_name:
    dest_dir: "" is root folder
    """
    if not os.path.isdir(src_dir):
        raise ValueError('src_dir %r not found.' % src_dir)
    all_files = []

    for root, dirs, files in os.walk(src_dir):
        all_files += [os.path.join(root, f) for f in files]

    if logging:
        print("-------Uploading {num_files} files-------".format(num_files=len(all_files)))

    for filename in all_files:
        if logging:
            print(filename)
        s3_resource.Object(bucket_name, os.path.join(dst_dir, os.path.relpath(filename, src_dir)))\
            .put(Body=open(filename, 'rb'))


src_dir = os.path.join(APP_DIR)
# print(src_dir)


for directory in DIR_UPLOAD_LIST:
    src_dir = os.path.join(APP_DIR, directory)
    upload_directory(src_dir=src_dir, bucket_name=bucket_name, dst_dir=directory)

for filename in FILE_LIST:
    print(filename)
    print(os.path.join(APP_DIR, filename))
    # APP_DIR is local directory
    s3_resource.Object(bucket_name, filename)\
        .put(Body=open(os.path.join(APP_DIR, filename), 'rb'))

