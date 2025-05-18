# 1. Build stage (optional if you want multistage)
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY gradlew ./
COPY gradle/ gradle/
COPY build.gradle settings.gradle ./
RUN ./gradlew dependencies

COPY src/ src/
RUN ./gradlew bootJar --no-daemon

# 2. Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
ENV SPRING_PROFILES_ACTIVE=dev
ENTRYPOINT ["java","-jar","/app/app.jar"]
EXPOSE 8080
