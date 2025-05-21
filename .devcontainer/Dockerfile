# https://app.heptabase.com/w/e883e484ac976a12adad70806bcebf91636571f54e5ac126d6620641a0d71709
ARG VARIANT=22
FROM harbor.ap-mic.com/coder_base/apmic-node-${VARIANT}-slim:latest

# Install tslint, typescript. eslint is installed by javascript image
ARG NODE_MODULES="tslint-to-eslint-config typescript"
RUN sudo npm install -g ${NODE_MODULES} \
    && sudo npm cache clean --force > /dev/null 2>&1
