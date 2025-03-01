# ReactJs-Supper
Tác giả: Nguyễn Thanh Sang
## Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
## Download Git for macOS
brew install git
## Generating a new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"
## Copy the SSH public key to your clipboard.
pbcopy < ~/.ssh/id_ed25519.pub
## Error "Lỗi CORS (Cross-Origin)"
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security