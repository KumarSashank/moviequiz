# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build Vite project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
# Clean default html
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
