# do not inlcude python interpreter as this will be called
# directly with the update_site.sh bash script
# with a venv sourced already

import os
import boto3

print("Hello from script")

print(os.environ["PYTHON_WORKING_FOLDER"])
