FROM nginx:1.27-alpine

RUN addgroup -S staticgroup && adduser -S staticuser -G staticgroup

RUN touch /var/run/nginx.pid && \
    chown -R staticuser:staticgroup /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY --chown=staticuser:staticgroup . .

USER staticuser

EXPOSE 8080