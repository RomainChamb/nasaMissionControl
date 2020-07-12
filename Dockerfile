FROM hayd/deno:alpine-1.1.3

WORKDIR /app

COPY . .

USER deno

CMD ["run ", "--alow-read", "--allow-net", "src/mod.ts"]

EXPOSE 8000