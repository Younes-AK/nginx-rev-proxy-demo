# nginx-rev-proxy-demo
set up nginx as a load balancer

# 🔁 Docker Reverse Proxy with NGINX & Node.js Apps

This project demonstrates how to use **NGINX as a reverse proxy** to route traffic to multiple **Node.js backend services** using **Docker Compose**.

---
## 📦 Project Structure

reverse-proxy-demo/ ├── docker-compose.yml # Orchestrates NGINX and backend services ├── nginx/ │ └── nginx.conf # Custom reverse proxy config for NGINX ├── app1/ │ ├── Dockerfile │ └── server.js # Simple Node.js service (App 1) ├── app2/ │ ├── Dockerfile │ └── server.js #

---

## 🎯 Purpose

- Show how to use **NGINX as a reverse proxy** to forward incoming HTTP requests to backend services.
- Enable **round-robin load balancing** between multiple services (App1, App2).
- Demonstrate **multi-container orchestration** using Docker Compose.
- Serve as a boilerplate for building microservices behind a proxy.

---

## 🚀 How to Run

### 1. Clone the Repository

  git clone https://github.com/Younes-AK/nginx-rev-proxy-demo.git
  cd reverse-proxy-demo
  
### 1. Build and Start the Services
  docker-compose up --build

  
## This will:
  Build app1 and app2
  Start an NGINX container as a reverse proxy
  Expose NGINX on localhost:80

### 3. Test the Setup
  Open your browser or use curl:
    You should see alternating responses from App1 and App2 like:
      Response from App1 on port 3000
      Response from App2 on port 3001
