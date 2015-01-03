#!/bin/sh

kramdown --template index.html.erb --parse-block-html -i kramdown -o html portuguese-slides.md > index.html

