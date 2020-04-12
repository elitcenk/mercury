# Counter
Counter is a simple visitor counter microservice in Angular

Trello Link Features : https://trello.com/c/t2XAY2Pf/5-implement-mock-visitor-counter-angular-bit

# Traning Video
Google Drive Features :  https://drive.google.com/open?id=13fJNewVdJ-1mp5JTr_Kerse3m8fuItUv

# Notes
1- Bu örnek için gerekli programlar (Hepsi installer ile default ayarlarda kurulabilir.)
- Intellij IDEA (https://www.jetbrains.com/idea/)
- Node.js (npm) (https://nodejs.org/en/)
- Git (https://git-scm.com/downloads)
- Yarn (https://classic.yarnpkg.com/en/)
- Bit.dev hesabı  (https://bit.dev/)

BIT.DEV Angular versiyonunu 8 istiyor bizde 9 vardı aşağıdaki komut ile 8 yükledik;
npm install -g @angular/cli@8

2- Angular Projesi oluşturma
 ng new Visitor
Angular Versiyon 8.x.x olmalı
3- Bit kurulumu
 npm install bit-bin -g
 bit init
4- Angular uygulaması hakkında bilgiler
Module nedir ?
Yeni module yaratma;
Ng g module counter

Component nedir ?
Yeni component yaratma;
Ng g component counter

5- Bit Kullanımı
bit doctor
bit import bit.envs/compilers/angular@0.2.0 --compiler
bit add src/app/counter --main src/app/halo/counter.module.ts
bit build
bit tag --all 1.0.0
bit status
bit export halo.angular-tutorial
bit list
bit remove halo.tutorial/counter –remote
bit remove halo.tutorial/counter --force
 

