# My answer to the Inshur coding challenge

### Setup
1.  Clone the repo
1. `cd inshur-interview`
1. `yarn install`
1. `yarn start`

### Running tests
1. `yarn test`

### Startup issues
I encountered an issue when where my prisma client wasn't generated with the required models on a fresh install when testing. If encountered, `yarn prisma` from the workspace root directory should regenerate them. 
