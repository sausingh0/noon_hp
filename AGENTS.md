# AGENTS.md

## Project overview

`noon_hp` is currently an empty scaffold repository. The only committed file is `README.md` (title: `# noon_hp`). There is no application code, dependency manifest, Docker configuration, CI workflow, or test suite yet.

## Cursor Cloud specific instructions

### Services

There are no services to start. Once application code is added, document required services here (web server, database, etc.).

### Dependencies

No package manager or lockfile is configured. When manifests are added (for example `package.json`, `requirements.txt`, or `go.mod`), install dependencies using the matching tool before running lint, test, or dev commands.

### Lint / test / run

No lint, test, or run scripts exist yet. After the first real application commit, add the canonical commands to this section or reference them from `README.md`.

### Environment notes

- The cloud VM provides Node.js (via nvm), Python 3, git, npm, pnpm, and yarn.
- The VM update script is a no-op (`true`) until dependency manifests are added.
