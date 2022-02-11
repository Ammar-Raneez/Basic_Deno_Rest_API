Basic Rest API built using Deno, a Node replacement that does not use node_modules

## Prerequisites
* Deno

### API List
*GET* - /todos
*POST* - /todos
*PUT* - /todos/:id
*PATCH* - /todos/:id
*DELETE* - /todos/:id

**Run**
```
deno run --allow-net --allow-read --allow-write ./index.js
```

**Notes**
* Deno does not use node_modules, rather you import the module directly from the module deployed url
* Highly secured, explicit permissions must be given on startup
