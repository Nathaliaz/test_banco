# Instalación y pasos a seguir


- Instalar npm: `brew install node`

- Verificar que se haya hecho la instalación: `node -v` o `npm -v`

## Instalar WebdriverIO (Info obtenida desde https://webdriver.io/)

```
npm install --save-dev @wdio/cli
npx wdio config --yes (se creo carpeta test y odio.conf.js)
npx wdio run
```

### Configuracion de Webdriver

- Instalar webdriverIO test runner sobre Node.js:
`npm install @wdio/cli`

- Set up para ejecutar las pruebas:
`npx wdio config`


- Comando para correr los test:
`npx wdio run ./wdio.conf.js`


- Comando para correr un test especifico: 
`npx wdio run ./wdio.conf.js --spec nombre_test.js`
