#!/usr/bin/env bash
for i in ts js react-ts react-js react-ts-lib;
do
   cd $i
   npm run format
   cd ..
done

