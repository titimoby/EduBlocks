echo -e "Welcome to the EduBlocks Raspberry Pi Edition installer!"
echo -e "This script will install all the necessary things to setup EduBlocks.\n"

echo -e "Always be careful when running scripts and commands copied
from the internet. Ensure they are from a trusted source. Although, this is an offical script and is safe to run\n"

echo -e "Let's get started!\n"

if [ $(whoami) == 'root' ]; then
  echo -e "Please do not run me as root"
  exit 1
fi

# ARCH=$(uname -m)
ARCH="armv6l"

cd ~

if [ -f edublocks-$ARCH.tar.xz ]; then
  echo ''
  echo -e "Removing old download...\n"
  rm -f edublocks-$ARCH.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo -e "Removing old extract...\n"
  rm -rf edublocks
fi

echo ''
echo -e "Downloading package...\n"
wget http://edublocks.org/downloads/edublocks-$ARCH.tar.xz

echo ''
echo -e "Extracting package...\n"
tar -xf edublocks-$ARCH.tar.xz

echo ''
echo -e "Running install dependencies script...\n"
~/edublocks/install-deps-connect.sh

echo ''
echo -e "Running install script..."
~/edublocks/install-connect.sh

if [ -f edublocks-$ARCH.tar.xz ]; then
  echo ''
  echo -e "Removing temp download...\n"
  rm -f edublocks-$ARCH.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo -e "Removing temp extract...\n"
  rm -rf edublocks
  echo -e "EduBlocks has installed Successfully. To open EduBlocks, go to Menu > Programming > EduBlocks or type edublocks into the terminal"
fi