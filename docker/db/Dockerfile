# Use an official MongoDB image as the base image
FROM mongo:4.4

# Set environment variables for MongoDB configuration (optional)
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secret

# Expose MongoDB port
EXPOSE 27017

# Run MongoDB when the container starts
CMD ["mongod"]