#!/usr/bin/env sh

info() {
    timestamp=`date '+%d/%m/%Y %H:%M:%S'`
    GREEN='\033[0;32m'

    echo "${GREEN}[$timestamp - INFO] ~ $*"
}
