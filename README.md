This is my very first deployment on my own VPS. The project was created not only to showcase my work but also as a practical base for learning the very basics of DevOps through a real and simple example.

### **Project Goal**

The main objective was to go through the "from scratch" path — from writing code to setting up a full-fledged production environment. This allowed me to practically reinforce the basic technologies of administration and automation.

### **Technical Foundation**

- **Infrastructure:** Choosing and purchasing a **domain name**, configuring **DNS** records, renting and initially setting up a **VPS**.
    
- **Security:** Setting up secure access via **SSH**, configuring the **Firewall**, and implementing **HTTPS** using automatic **Let's Encrypt** certificates.
    
- **Web Server:** Configuring **Nginx** and using it as a **Reverse Proxy**.
    
- **Containerization and CI/CD:** Packaging the website into a **Docker** container and creating a pipeline for automatic deployment via **GitHub Actions** (when code is pushed to the repository, the website updates itself on the server).
