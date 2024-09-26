FROM oven/bun:latest AS base

WORKDIR /app

FROM base AS development

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

CMD ["bun", "run", "dev"]