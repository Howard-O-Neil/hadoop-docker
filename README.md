# hadoop-docker
A fully distributed hadoop implmented with docker

Each worker node will be ran in seperated container

All cluster settings + data will be mount as volume. Edit config + autoreload container
## hadoop base version 3.0
Based on ubuntu binic amd64, amazon corretto 8

Updated system + apt

Support latest fully functional
+ starship prompt
+ neovim
+ vim.plug
+ coc.nvim
+ nvm + nodejs
+ python3
## further hadoop base
Tend to make the image slimmer but still functional

---

> :warning: **Make sure to build hadoop_base and push to your repository, then change other workernode dockerfile base image**

> :bulb: **Use `docker-compose run -d <service>` to keep container run in background**

<br>

## Credits
NFS Server: https://github.com/sjiveson/nfs-server-alpine
