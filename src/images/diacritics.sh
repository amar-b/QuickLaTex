#!/bin/bash

## declare an array variable
declare -a arr=("\dot{\\color{Grey}a}" "\ddot{\\color{Grey}a}" "\acute{\\color{Grey}a}" "\grave{\\color{Grey}a}" "\check{\\color{Grey}a}" "\breve{\\color{Grey}a}" "\tilde{\\color{Grey}a}" "\bar{\\color{Grey}a}" "\hat{\\color{Grey}a}" "\widehat{\\color{Grey}a}" "\vec{\\color{Grey}a}")

## now loop through the above array
cnt=0
for i in " "${arr[@]}" "
do
   base=$(echo $i | cut -d'{' -f 1)
   base=$(echo $base | cut -d'\' -f 2)
   echo $base
   cnt=$(($cnt+1))
   tex2svg --font 'STIX-Web' "$i" > "$base".svg
done
