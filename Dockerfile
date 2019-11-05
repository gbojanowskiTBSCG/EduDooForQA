FROM 129363003223.dkr.ecr.us-east-1.amazonaws.com/dxp/webtesting-base:20191021.20.818
ARG VERSION
COPY cypress_tbscg_doosan_poc /opt/cypress/tests
COPY postman /opt/postman/tests
COPY robot-framework_tbscg_doosan_poc /opt/robotframework/tests
COPY test-cafe_tbscg_doosan_poc /opt/testcafe/tests

RUN cd /opt/cypress/tests \
  && npm install -g

ENV VERSION=${VERSION}
