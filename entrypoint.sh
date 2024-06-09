#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $ROOT_DIR/js/*.*.js*;
do
  echo "Processing $file ...";

  sed -i 's|TEST_VUE_APP_API_URL|'${VUE_APP_API_URL}'|g' $file 

done

echo "Starting Nginx"
nginx -g 'daemon off;'