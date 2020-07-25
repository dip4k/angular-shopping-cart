# Introduction

angular shopping cart application

## project steps

- for styling using angular material
  ```bash
    ng add @angular/material
  ```
- create cart item component
  ```bash
    ng generate component cartItem
  ```
- create cart item model
  create folder model and add a file cart-item.model.ts
- create cart list component
  ```bash
    ng g c cart-list
  ```
- create header component
  ```bash
    ng g c header
  ```
- add service to share data between components
  ```bash
    ng g s service/cart-list
  ```

## Run Application

- git clone this repo
- open folder in vscode
- open terminal
- run pm install
  ```sh
    npm install
  ```
- run angular application
  ```sh
    ng serve -o
  ```
