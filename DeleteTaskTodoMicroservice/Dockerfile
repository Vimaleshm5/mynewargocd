# Use the official Python image as the base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install necessary packages
RUN apt-get update && apt-get install -y curl gnupg unixodbc unixodbc-dev

# Add Microsoft key (apt-key removed)
RUN curl https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor > /usr/share/keyrings/microsoft-prod.gpg

# Download the official repo list correctly
RUN curl https://packages.microsoft.com/config/debian/12/prod.list \
    -o /etc/apt/sources.list.d/mssql-release.list

# Update package list using the repo
RUN apt-get update

# Install MS SQL ODBC Drivers + Tools
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18

# Install Python dependencies
RUN pip install -r requirements.txt

# Start the FastAPI application
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
