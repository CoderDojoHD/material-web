#!/bin/sh
MYNAME='johannes'
HOST='coderdojo.rechnerzeit.net'
USER='coderdojo'
PASSWD='dojocoder'
HTMLFILES='*.html'
CSSFILES='*.css'
JSFILES='*.js'
JPGFILES='*.jpg'
GIFFILES='*.gif'
PNGFILES='*.png'

pushd website
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
popd
exit 0
