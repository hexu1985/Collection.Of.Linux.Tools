### install typora on ubuntu

# or run:
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE

wget -qO - https://typoraio.cn/linux/public-key.asc | sudo tee /etc/apt/trusted.gpg.d/typora.asc

# add Typora's repository

sudo add-apt-repository 'deb https://typoraio.cn/linux ./'

sudo apt-get update

# install typora

sudo apt-get install typora
