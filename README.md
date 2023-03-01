### Getting started

Run containers:

```
docker compose --project-directory . -f docker/docker-compose.dev.yml up
```

Stop containers:

```
docker compose --project-directory . -f docker/docker-compose.dev.yml stop
```

Remove containers:

```
docker compose --project-directory . -f docker/docker-compose.dev.yml down
```

### [Conventional Commits](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commithttps:/)

The commit message must start with one of the following:
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) `test: Adding missing tests or correcting existing tests
