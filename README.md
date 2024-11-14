1. INICIALIZAR UN PROYECTO CON NPM
    
    - npm init -y

2. INSTALAR TYPESCRIPT

    - npm install typescript --save-dev

3. CREAR UN tsconfig.json 

    - npx tsc --init

4. CREAR UN index.ts para la logica

5. INSTALAR ts-node PARA EJECUTAR TYPESCRIPT

    -  npm install ts-node --save-dev

6. EJECUTAR ARCHIVO index.ts

    - npx ts-node index.ts

7. AGREGAR EL COMANDO AL package.json

-  
"scripts": {
    "start": "npx ts-node index.ts"
},