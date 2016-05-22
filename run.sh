grunt --force
docker build -t angularjs-website .
docker stop website
docker run -d -p 9001:80 --name website angularjs-website /usr/sbin/apache2ctl -D FOREGROUND