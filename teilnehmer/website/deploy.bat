@echo off
set MYNAME=johannes
set HOST=coderdojo.rechnerzeit.net
set USER=coderdojo
set PASSWD=dojocoder
set HTMLFILES=*.html
set CSSFILES=*.css
set JSFILES=*.js
set JPGFILES=*.jpg
echo user %USER%> ftpcmd.dat
echo %PASSWD%>> ftpcmd.dat
echo prompt>> ftpcmd.dat
echo mdel *>> ftpcmd.dat
echo mput %HTMLFILES%>> ftpcmd.dat
echo mput %CSSFILES%>> ftpcmd.dat
echo mput %JSFILES%>> ftpcmd.dat
echo mput %JPGFILES%>> ftpcmd.dat
echo quit>> ftpcmd.dat
@echo on
ftp -n -s:ftpcmd.dat %HOST%
del ftpcmd.dat
