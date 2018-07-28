#!/bin/bash

## declare an array variable
declare -a arr=("\times" "\div" "\pm" "\mp" "\cdot" "\star" "\leq" "\geq" "\neq" "\approx" "\propto" "\equiv")

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
