---
title: "Hello World"
draft: false
publishDate: "2025-08-27"
subject: "Java"
category: "Informatica"
tags: ["java", "programmazione", "introduzione", "facile"]
author: "Dennis Turco"
---

# 1️⃣ Introduzione

## Che cos’è Java?

**Java** è un linguaggio di programmazione ad alto livello, orientato agli oggetti, e una piattaforma di sviluppo software. È stato sviluppato da Sun Microsystems (ora parte di Oracle Corporation) e rilasciato per la prima volta nel 1995. Java è progettato per essere semplice, sicuro e portabile, consentendo agli sviluppatori di scrivere codice che può essere eseguito su qualsiasi dispositivo dotato di una Java Virtual Machine (JVM), indipendentemente dal sistema operativo.

## Caratteristiche principali di Java:

1. **Orientato agli oggetti**: Java segue il paradigma della programmazione orientata agli oggetti, che organizza il software come una collezione di oggetti che interagiscono tra loro.
2. **Portabilità**: Grazie alla JVM, un programma Java può essere eseguito su qualsiasi dispositivo che supporta la JVM, indipendentemente dall'hardware e dal sistema operativo. Questo principio è noto come "Write Once, Run Anywhere" (scrivi una volta, esegui ovunque).
3. **Sicurezza**: Java include funzionalità di sicurezza integrate, come la gestione automatica della memoria, la prevenzione dell'accesso non autorizzato alla memoria e un modello di esecuzione che limita l'accesso alle risorse di sistema.
4. **Robustezza**: Java è progettato per essere un linguaggio robusto, con un forte controllo sui tipi di dati e la gestione delle eccezioni.
5. **Gestione automatica della memoria**: Java gestisce automaticamente la memoria attraverso un sistema di garbage collection, che recupera la memoria inutilizzata e la ridistribuisce.
6. **Multithreading**: Java supporta il multithreading, permettendo di eseguire più processi contemporaneamente, migliorando così le prestazioni dei programmi.
7. **API estese**: Java include un'ampia libreria di classi (Java API) che fornisce funzionalità per sviluppo grafico, networking, accesso ai database, gestione delle I/O e molto altro.

In sostanza, Java è ampiamente utilizzato per lo sviluppo di applicazioni desktop, web, mobili (Android), e per lo sviluppo di sistemi enterprise e server-side.

# 2️⃣ Struttura di un programma Java

- Ciascuna classe deve essere inserita in un file separato con stesso nome della classe + “.java”.
- Ogni file .java ha un package, che rappresenta il percorso in cui si trova.
- L’esecuzione di un’applicazione in java parte sempre dalla classe con la funzione *main* (come in c/c++).
- In java usiamo il concetto di OOP che si basa sull'organizzare tutto in **oggetti**.

## Oggetti

- Gli oggetti hanno **attributi** (dati) e **comportamenti** (metodi/funzioni).
- *Esempio*: un oggetto "Persona" può avere attributi come nome, cognome, età e comportamenti come "parla", "cammina", ecc...
- In questo modo, possiamo creare oggetti che rappresentano entità del mondo reale e interagire con loro in modo più naturale e intuitivo.
- La classe è una specie di "definizione" di un oggetto → mi permette di creare degli oggetti. Quindi, per definire un oggetto, ci basta definire una classe.
- Per costruire un oggetto bisogna richiamare il suo **costruttore** che non ha mai un valore di ritorno e deve avere in nome uguale alla classe in cui è definito.
- Essi vengono sempre creati con `new`.

## Tipi di dato

Ci sono 2 categorie di tipi da dato:

1. **Semplici primitivi**;
    1. int;
    2. float;
    3. char;
    4. boolean;
    5. ecc…
2. **Tipi refence**.
    1. “build-in” (no classi) → array
    2. classe:
        1. ricostruiti dal linguaggio (in java .lang):
            1. String;
            2. Integer;
            3. …
        2. di libreria (in java .util):
            1. Set;
            2. List;
            3. Scanner;
            4. …
        3. definiti da utente:
            1. Esercizio;
            2. Scuola;
            3. Alunni;
            4. …

## Contronto con il c++

- Stessi insiemi di valori e operazioni del c++;
- `boolean` distinti da `int` (NO boolean → int);
- In generale no conversione da tipo più grande a tipo più piccolo (es: NO double → float);
- Dichiarazione variabili come in c++;
- Operazioni simili al c++:
    - NO: operatore `sizeof`, `*`;
    - SI: operatore `sizeof`;
- Costrutti controllo come in c++, con piccole differenze:
    - while(1) {…}
        - OK in c++
        - No in java
    - while(true) {…}
        - OK in java

*esempio di un semplice programma:*

```java
package helloworld; // nome del package in cui mi trovo

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");

        int x = 5;
        int y = 2;

        int z = x + y;
        int t = x * y;
        int h = x / y;

        System.out.println("x + y = " + z); // cout << "x + y = " << z;
        System.out.println("x * y = " + t);
        System.out.println("x / y = " + h);

        for (int i = 0; i < 10; i++) {
            System.out.print(i + " ");  // cout << i << " ";
        }
    }
}

```

# 📑 Esercizi

https://www.ilprofdinformatica.it/le-mie-lezioni/programmazione-java/primi-esercizi-in-java