#!/usr/bin/env bash
for i in ts js react-ts react-js react-ts-lib;
do
   cd $i
   npx npm-check-updates -u
   npm i
   cd ..
done

