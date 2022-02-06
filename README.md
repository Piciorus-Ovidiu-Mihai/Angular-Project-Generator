# 🏗️ Angular Project Generator
Every developer have to make some repetitive work when they are creating a new application.
This application was built to optimize the process of creating a new angular project or just for updating the existing ones.
For a quick start you can generate an angular project with arhitecture and some base components. You can also to update the existing projects by adding some components
inside.

## 💎 What it does ? 
Basically, this application is divided in four projects. Each project generate some code
* 🚨 Project generator schematics

This generate an angular application with some base packages.

 ![alt text](https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/architecture-as-1.png) ![alt text](https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/architecture-as-2.png)
 
* 🚨 Update package 

This override the package.json file with the latest verions of libraries and packages that this project use. It can be override by anyone who wants to keep every application
up to date.

* 🚨 Override app root

Using this project, it override the root of one application, adding lazy-loading on routes.
 
* 🚨 Generate Shared Module

It generates a shared module with some common pipes and components.

![alt text](https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/architecture-as-3.png)<br/><br/><br/>
After running all four projects, an entire template of one client application will be generated.
 ![alt text](https://github.com/Piciorus-Ovidiu-Mihai/Photos/blob/master/angular-schematics-preview.png)<br/><br/><br/>

## 🛠️ Prerequisites
* ⚙️ Install [Node.js](https://nodejs.org/en/download/)
* ⚙️ Install Angular using `npm install -g @angular/cli`
* ⚙️ Install Angular Schematics using `npm install -g @angular-devkit/schematics-cli`

## 🚀 Getting Started
* ⭐ Clone the repository
* ⭐ Open a terminal in the project path
* ⭐ Run `npm run build`
* ⭐ Open PowerShell with Admin's Rights and write `Set-ExecutionPolicy RemoteSigned`
* ⭐ For any project you want to run for generating the code use `schematics .:{name} --debug=false`
* ⭐ After that you have to install angular material using `ng add @angular/material`
* 
## 🖥️ What I used ?
* 💽 `Angular`
* 💽 `Angular Schematics`
* 🧮 `Typescript`
* ⌨️ `HTML & CSS`
