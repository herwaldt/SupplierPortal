# Supplier Portal

# See the deployed site here!
 
## https://supplier-portal-scorecard.herokuapp.com/scorecard
 
The Supplier Portal is meant to show overall suppliers performance. (Data is loaded through 2022)
 
 ![alt text](https://github.com/herwaldt/SupplierPortal/tree/make_dynamic/assets/supplierOverview.png?raw=true)
  ![alt text](https://github.com/herwaldt/SupplierPortal/tree/make_dynamic/assets/supplierDetails.png?raw=true)
---
 
## Code Style
 
Express/Node Backend, MongoDb, with a React Frontend. Deployed on Heroku
 
---
 
## File structure
 
The app is split out into two sections:
- `client`: Front-end of the app
- `server`: Back-end of the app
 
The `client` side is nested within the `server` end.
 
---
 
## Installation
 
### Node Modules (also for client side)
 
```bash
cd npm i
```
and
```bash
cd client
npm i
```
 
### API Keys
 
Within the server/config create a 'dev.js' file with the information below. (You wil need access to the MongoDb)
 
```javascript
module.exports = {
    mongoURI: 'INSERT YOUR MONGODB LOGIN KEY',
  };
```
 
---
 
## Run
 
To run the server and client at the same time use (from the server directory):
 
```bash
npm run dev
```
 