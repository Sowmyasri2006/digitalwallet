# Stage 1: Build the Spring Boot app with Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy Maven configuration and source code
COPY pom.xml .
COPY src ./src

# Build the app, skip tests
RUN mvn clean package -DskipTests

# Stage 2: Run the app with JDK 21 runtime
FROM eclipse-temurin:21-jdk
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your Spring Boot app uses
EXPOSE 9091

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]