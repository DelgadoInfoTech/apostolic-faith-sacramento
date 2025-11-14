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
3. Switch to this directory. 

```bash
cd db
```

4. Run the compose stack.

```bash
$ docker-compose up -f compose.db.yml -d --build
```

1. Access PgAdmin and use the container name as the server name. 
   1. See db.env for more credentials.
   2. Open your web browser and navigate to:
      1. https://localhost:5005
   3. You should be redirected to the login page for pgAdmin.  Enter the credentials from the db.env file here.
2. Connect to the `postgres` db.
3. Execute the create_db.sql script.
4. Execute the seed.sql script.

The database should now be ready to query.  It is empty so no data is actually seeded.

# Help!

Please review PgAdmin if you are stuck:
https://www.pgadmin.org/docs/pgadmin4/9.10/index.html


# Future plans

DB Generation will be done via an ORM.  This is meant to demonstrate the power of PostgreSQL.


