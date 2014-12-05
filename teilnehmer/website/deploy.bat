@echo off
set MYNAME=johannes
set HOST=coderdojo.rechnerzeit.net
set USER=coderdojo
set PASSWD=dojocoder
set HTMLFILES=*.html
set CSSFILES=*.css
set JSFILES=*.js
set JPGFILES=*.jpg
set GIFFILES=*.gif
set PNGFILES=*.png
echo user %USER%> ftpcmd.dat
echo %PASSWD%>> ftpcmd.dat
echo mkdir %MYNAME%>> ftpcmd.dat
echo cd %MYNAME%>> ftpcmd.dat
echo prompt>> ftpcmd.dat
echo mdel *>> ftpcmd.dat
echo mput %HTMLFILES%>> ftpcmd.dat
echo mput %CSSFILES%>> ftpcmd.dat
echo mput %JSFILES%>> ftpcmd.dat
echo mput %JPGFILES%>> ftpcmd.dat
echo mput %GIFFILES%>> ftpcmd.dat
echo mput %PNGFILES%>> ftpcmd.dat
echo quit>> ftpcmd.dat
@echo on
ftp -n -s:ftpcmd.dat %HOST%
@echo off
del ftpcmd.dat
