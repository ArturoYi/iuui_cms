#!/bin/bash
if [ $# -eq 0 ]
then 
    pushmessage=`date +%Y-%m-%d fix 正常更新`
else
    pushmessage="$*"
fi

#pushmessage=`date +%Y-%m-%d`

# echo ${pushmessage}

# githubUrl=git@github.com:540765/CYR.git

#git status;
# sudo chmod 777 push.sh
# git init 
# git config --global user.name "陈柒"
# git config --global user.email "3062995371@qq.com"
git add .; #添加所有的更新，.只能添加最新的更新
git commit -m "2022-0-31";
# git remote add origin git@gitee.com:chen_qi/iuui-cms.git
git push -u origin master;
