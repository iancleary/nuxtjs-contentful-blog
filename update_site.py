# Author credit (modified for my uses)
# 
# https://gist.githubusercontent.com/SavvyGuard/6115006/
# raw/7d1770ec559d5a88fef07b74db0bffac61c233df/botos3upload.py


# do not inlcude python interpreter as this will be called
# directly with the update_site.sh bash script
# with a venv sourced already

import os
import boto3
import boto3.s3

import os.path
import sys
import glob

print("Hello from script")

APP_DIR = os.environ["PYTHON_WORKING_FOLDER"]
print(APP_DIR)


import boto3


import os.path
import sys

# Fill these in - you get them when you sign up for S3
AWS_ACCESS_KEY_ID = os.environ["IANCLEARY_ME_AWS_ACCESS_KEY_ID"]
AWS_ACCESS_KEY_SECRET = os.environ["IANCLEARY_ME_AWS_ACCESS_KEY_SECRET"]
# Fill in info on data to upload
# destination bucket name
bucket_name = os.environ["IANCLEARY_ME_BUCKET"]
# source directory
sourceDir = APP_DIR
# destination directory name (on s3)
destDir = ''

#max size in bytes before uploading in parts. between 1 and 5 GB recommended
MAX_SIZE = 20 * 1000 * 1000
#size of parts when uploading in parts
PART_SIZE = 6 * 1000 * 1000

s3 = boto3.resource('s3')
bucket = s3.Bucket('name')

print("HELLOOOO")

tmpFileNames =  glob.glob(APP_DIR+"*.js", recursive=True)
print(tmpFileNames)

file_structure = [
    ('js', 'js'),
    ('css', 'css'),
    ('.', 'js'),
    ('js', 'js'), 'css', 'html', 'png', 'svg']

uploadFileNames = []
for file_type in file_types:
    file_path = APP_DIR+"*.{file_type}".format(file_type=file_type)
    for file in glob.glob(file_path, recursive=True):
        if "venv" not in file:
            uploadFileNames.extend(file)


print(uploadFileNames)

exit()

def percent_cb(complete, total):
    sys.stdout.write('.')
    sys.stdout.flush()

for filename in uploadFileNames:
    sourcepath = os.path.join(sourceDir + filename)
    destpath = os.path.join(destDir, filename)
    print('Uploading %s to Amazon S3 bucket %s' % \
           (sourcepath, bucket_name))

    filesize = os.path.getsize(sourcepath)
    if filesize > MAX_SIZE:
        print("multipart upload")
        mp = bucket.initiate_multipart_upload(destpath)
        fp = open(sourcepath,'rb')
        fp_num = 0
        while (fp.tell() < filesize):
            fp_num += 1
            print("uploading part %i" %fp_num)
            mp.upload_part_from_file(fp, fp_num, cb=percent_cb, num_cb=10, size=PART_SIZE)

        mp.complete_upload()

    else:
        print("singlepart upload")
        k = boto3.s3.key.Key(bucket)
        k.key = destpath
        k.set_contents_from_filename(sourcepath,
                cb=percent_cb, num_cb=10)