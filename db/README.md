# Setting up the database

## Prerequisites

### Windows

- Virtual Machine support
- Container support
- WSL2

### MacOS

- Virtualization should already be turned on if you have an ARM-based Mac.

## Docker/Podman required

1. Run the SSL command at the root of the repo.
2. Install **docker desktop**.
3. Run the compose stack.

```bash
$ docker-compose up -f compose.db.yml -d --build
```

4. Access PgAdmin and use the container name as the server name. 
   1. See db.env for more credentials.
5. Connect to the `postgres` db.
6. Execute the create_db.sql script.
7. Execute the seed.sql script.

The database should now be ready to query.  It is empty so no data is actually seeded.


