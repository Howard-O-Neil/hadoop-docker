# hadoop-docker
A fully distributed hadoop implmented with docker

Each worker node will be ran in seperated container

All cluster settings will be mount as volume. Edit config + autoreload container
## hadoop base version 3.0
Based on debian 64bit, openjdk8.0

Updated system + apt

Support latest fully functional
+ starship prompt
+ neovim
+ vim.plug
+ coc.nvim
+ nvm + nodejs
## further hadoop base
Tend to make the image slimmer but still functional

---

> :warning: **Make sure to build hadoop_base and push to your repository, then change other workernode dockerfile base image**
