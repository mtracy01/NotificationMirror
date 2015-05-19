#!/bin/bash

#Remove old server files
rm -R /var/www/*

#Add in our server files
cp index.php	/var/www/index.php
cp calendar.php	/var/www/calendar.php
cp githash.php	/var/www/githash.php
cp -R js 	/var/www/js
cp -R css	/var/www/css
cp -R font	/var/www/font

#Tell apache2 to restart
/etc/init.d/apache2 restart	
