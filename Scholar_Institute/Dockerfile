# -----------------------------
# Build Stage
# -----------------------------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# Copy project file and restore dependencies
COPY ["Scholar_Institute.csproj", "./"]
RUN dotnet restore "Scholar_Institute.csproj"

# Copy the remaining source code
COPY . .

# Publish the application
RUN dotnet publish "Scholar_Institute.csproj" -c Release -o /app/publish /p:UseAppHost=false

# -----------------------------
# Runtime Stage
# -----------------------------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

# Render provides the PORT environment variable
ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "Scholar_Institute.dll"]