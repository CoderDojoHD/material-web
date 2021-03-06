#!/bin/sh
MYNAME='taschenrechner'
HOST='coderdojo.rechnerzeit.net'
USER='coderdojo'
PASSWD='dojocoder'
HTMLFILES='*.html'
CSSFILES='*.css'
JSFILES='*.js'
JPGFILES='*.jpg'
GIFFILES='*.gif'
PNGFILES='*.png'

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
mput $JPGFILES
mput $GIFFILES
mput $PNGFILES
quit
END_SCRIPT
exit 0
