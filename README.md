# X-Rite Supplier Portal
 
The X-Rite Supplier Portal is meant to show suppliers how they are preforming according to X-Rite's standards. A supplier can log in and see their grade for On-Time Delivery, Defective Parts-Per-Million, and Cost.
 
A supplier creates their own account, and then can only see their companies results (once approved by an X-Rite Admin). 
 
The data is formed from Oracle outputs and X-Rite's internal RDM (Report of Discrepant Material) process. A supplier can also export data relating to their company for their own internal records.
 
---
 
## Code Style
 
Express/Node.js Backend with a React Frontend
 
---
 
## File structure
 
The app is split out into two sections:
- `client`: Front-end of the app
- `server`: Back-end of the app
 
---
 
## Installation
 
### Node Modules
 
```bash
cd server && npm i
```
and
```bash
cd client && npm i
```
 
### API Keys
 
Insert a folder 'config.js' in the server directory.
 
Then create a 'keys.js' file with the information below.
 
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
 
---
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
 
 
