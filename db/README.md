# Setting up the database

## Prerequisites

### Windows

- Virtual Machine support
- Container support
- WSL2

### MacOS

- Virtualization should already be turned on if you have an ARM-based Mac.

## Docker/Podman required

1. Install **docker desktop**.
2. Run the compose stack.

```bash
$ docker-compose up -f compose.db.yml -d --build
```

3. Access PgAdmin and use the container name as the server name. 
   1. See db.env for more credentials.
4. Run the SSL command at the root of the repo.


