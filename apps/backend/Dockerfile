FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json files for workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm --filter backend build

# Production image
FROM node:18-alpine AS production

WORKDIR /app

# Copy built files and dependencies
COPY --from=base /app/apps/backend/dist ./dist
COPY --from=base /app/apps/backend/package.json ./
COPY --from=base /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"] 