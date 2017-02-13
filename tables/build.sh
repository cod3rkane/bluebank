#!/usr/bin/sh
mongoimport --db bluebank --collection contas --file contas.json
mongoimport --db bluebank --collection carteiras --file carteiras.json 
