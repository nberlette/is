ARG VARIANT=bullseye
ARG PLATFORM=linux/amd64
FROM --platform=${PLATFORM} mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# update system packages and cleanup cache
ARG DEBIAN_FRONTEND=noninteractive

ARG USER=vscode
ARG HOME=/home/${USER}

# Install cmake
RUN sudo apt-get update \
  && sudo apt-get install -y --no-install-recommends gcc \
  && sudo apt-get -y upgrade \
  && sudo rm -rf /var/lib/apt/lists/*

ARG BASH_RC=${HOME}/.bashrc

# deno runtime (https://deno.com)
ARG DENO_INSTALL=${HOME}/.deno
# bun package manager (https://bun.sh)
ARG BUN_INSTALL=${HOME}/.bun
# starship terminal prompt (https://starship.rs)
ARG STARSHIP_RC=${HOME}/.config/starship.toml
ARG STARSHIP_PRESET="pastel-powerline"

# install the latest version of deno
# https://docs.deno.com/runtime/getting_started/installation
RUN /bin/bash -c "$(curl -fsSL https://deno.land/install.sh)" \
  && chown ${USER} ${DENO_INSTALL}

RUN /bin/bash -c "$(curl -fsSL https://bun.sh/install)" \
  && chown ${USER} ${BUN_INSTALL}

# add a couple things to bashrc
RUN echo '[[ ":$PATH:" == *":$HOMEBREW_PREFIX/bin:"* ]] || export PATH="$HOMEBREW_PREFIX/bin:$PATH";' >> ${BASH_RC} \
  && echo 'eval "$(brew shellenv)";' >> ${BASH_RC} \
  && echo 'sudo chown -R '${USER}' '${HOME}';' >> ${BASH_RC} \
  && echo 'export DENO_INSTALL="'${DENO_INSTALL}'";' >> ${BASH_RC} \
  && echo '[[ ":$PATH:" == *":$DENO_INSTALL/bin:"* ]] || export PATH="$DENO_INSTALL/bin:$PATH";' >> ${BASH_RC} \
  && echo 'command -v starship &>/dev/null || ( echo "‼️ starship not found, installing starship..." && brew install starship 2>/dev/null );' >> ${BASH_RC} \
  && echo 'command -v deno &>/dev/null || ( echo "‼️ deno not found, installing deno..." && curl -fsSL https://deno.land/install.sh | bash );' >> ${BASH_RC} \
  && echo 'command -v git-extras &>/dev/null || ( echo "‼️ git-extras not found, installing git-extras..." && brew install git-extras );' >> ${BASH_RC} \
  && echo 'sudo touch /etc/bash_completion.d/deno.bash && sudo chown '${USER}' /etc/bash_completion.d/deno.bash;' >> ${BASH_RC} \
  && echo '[ -s /etc/bash_completion.d/deno.bash ] || deno completions bash > /etc/bash_completion.d/deno.bash;' >> ${BASH_RC} \
  && echo '[ -f "'${STARSHIP_RC}'" ] || starship preset "'${STARSHIP_PRESET}'" -o "'${STARSHIP_RC}'" 2>/dev/null;' >> ${BASH_RC} \
  && echo 'eval "$(starship init bash)" 2>/dev/null;' >> ${BASH_RC} \
  && echo 'alias ll="ls -AlhFo --color=auto --si --group-directories-first --time-style=long-iso --file-type";' >> ${BASH_RC}
