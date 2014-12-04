#!/bin/sh
MYNAME='johannes'
HOST='coderdojo.rechnerzeit.net'
USER='coderdojo'
PASSWD='dojocoder'
HTMLFILES='*.html'
CSSFILES='*.css'
JSFILES='*.js'

ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD
mkdir $MYNAME
cd $MYNAME
prompt
mdel *
mput $HTMLFILES
mput $CSSFILES
mput $JSFILES
quit
END_SCRIPT
exit 0
