#!/bin/bash

###############################################
# Utility to update AWS S3 with the latest version of this code
# - prompts user for branch to deploy (defaults to master)
# - creates a venv in /tmp to not install globally (/tmp gets cleared as well)
###############################################

TMP="/tmp"

GIT_USER="iancleary"
GIT_REPO="iancleary.me"
GIT_PATH="$GIT_USER/$GIT_REPO.git"
TMP_LOCATION="$TMP/$GIT_REPO"

PYTHON_FILE_FULLPATH="$TMP_LOCATION/update_site.py"
TMP_VENV_LOCATION="$TMP_LOCATION/venv"

VENV_BIN_ACTIVATE_SUBPATH="bin/activate"
VENV_SOURCE_PATH="$TMP_VENV_LOCATION/$VENV_BIN_ACTIVATE_SUBPATH"

# echo ${TMP:0:4}

if [[ ${TMP:0:4} == '/tmp' ]]
then
    echo "$TMP location is indeed within /tmp (safe to delete)"
    rm -rf $TMP_LOCATION
else
    echo "$TMP location is not within /tmp"
    echo "--------------------------------------------"
    echo "exiting script, not deleting outside of /tmp"
    echo "--------------------------------------------"
    exit 1
fi

echo -n "Enter the branch to use and press [ENTER]; none for master: "
read branch

if [ $branch = ""]; then
    branch="master"
fi

echo "Using branch: $branch"

echo "Cloning repo to $TMP directory."
git clone -b $branch git@github.com:$GIT_PATH $TMP_LOCATION || git clone -b $branch https://github.com/$GIT_PATH $TMP_LOCATION

echo "Creating python3 virtualenv in $TMP_VENV_LOCATION."
python3 -m venv $TMP_VENV_LOCATION

## 
echo "sourcing $VENV_SOURCE_PATH"
source $VENV_SOURCE_PATH
pip3 install -r "$TMP_LOCATION/requirements.txt"

## TODO
# - run script using boto3 and credentials in .env file to update s3
# - update CloudFront to force invalidation?
# - celebrate!
pip3 list

# echo 

python3 $PYTHON_FILE_FULLPATH

echo ""
echo "-----------------------------------"
echo "-----------------------------------"
echo "All done. Celebrate you magical wizard!"
echo "-----------------------------------"
echo "-----------------------------------"