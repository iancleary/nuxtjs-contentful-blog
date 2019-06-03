#!/bin/bash

###############################################
# Utility to update AWS S3 with the latest version of this code
###############################################

TMP_LOCATION="/tmp/iancleary.me"
TMP_VENV_LOCATION="$TMP_LOCATION/venv"
VENV_BIN_ACTIVATE_SUBPATH="bin/activate"
VENV_SOURCE_PATH="$TMP_VENV_LOCATION/$VENV_BIN_ACTIVATE_SUBPATH"

CWD="$(pwd)"

echo $CWD

## Check if the tmp location exists
if [ -d $TMP_LOCATION ] 
then
    echo "Directory $TMP_LOCATION exists."
else
    echo "Directory $TMP_LOCATION does not exists."
    echo "Creating $TMP_LOCATION directory."
    mkdir $TMP_LOCATION 
fi

## Check if the tmp location of the venv exists
if [ -d $TMP_VENV_LOCATION ] 
then
    echo "Using existing python3 virtualenv in $TMP_VENV_LOCATION."
else
    echo "Directory $TMP_VENV_LOCATION does not exists."
    echo "Creating python3 virtualenv in $TMP_LOCATION."
    python3 -m venv $TMP_VENV_LOCATION
fi

## Source python3 venv
echo "sourcing $VENV_SOURCE_PATH"
source $VENV_SOURCE_PATH

## TODO
# - git clone directory from cwd or from git
# - pip3 install requirements.txt
# - run script using boto3 and credentials in .env file to update s3
# - update CloudFront to force invalidation?
# - celebrate!
