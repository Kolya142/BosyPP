cp bosypp.bpp.js bosypp.bpp.js.1
node bosypp.bpp.js bosypp.bpp
cp bosypp.bpp.js /tmp/bpp.bpp.js
node bosypp.bpp.js bosypp.bpp || cp bosypp.bpp.js.1 bosypp.bpp.js
rm bosypp.bpp.js.1
