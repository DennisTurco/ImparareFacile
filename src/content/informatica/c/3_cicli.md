---
title: "Cicli"
draft: false
publishDate: "2025-08-27"
subject: "C"
category: "Informatica"
tags: ["c", "programmazione", "cicli", "difficile"]
author: "Dennis Turco"
---


## 1️⃣ Ciclo For

Quando parliamo di ciclo for parliamo di iterazione definita ovvero di quando abbiamo delle **istruzioni da ripetere** e **conosciamo quante volte** vogliamo **ripeterle**.

### Sintassi

Il seguente ciclo scrive per 10 volte sullo schermo la parola “ciao”.

```c
for(int i=0; i<10; i++) {
   printf("ciao\n");
}
```

L’istruzione per richiamare il ciclo **for** si caratterizza è da 4 parti:

- **dichiarazione** (non sempre!) **e assegnazione di una variabile contatore**,
- **condizione del ciclo**,
- **aggiornamento della variabile contatore**,
- **corpo del ciclo**.

nell’esempio precedente:

1. `int i=0`  →  Dichiarazione e assegnazione di una variabile contatore;
2. `i < 10`    →  Condizione del ciclo for;
3. `i++`         →   Aggiornamento della variabile contatore;

### Esempi

***esempio 1***:

```c
#include <stdio.h>

int main() {

    // il primo ciclo viene ripetuto 5 volte
    // il secondo ciclo viene ripetuto 5 volte

    int val2 = 0;

    for (int i=0; i<5; i++) {
        val2++;
    }

    for (int a=0; a<5; a++) {
        val2++;
    }

    printf("Valore = %d\n", val2);

}
```

***esempio 2***:

```c
#include <stdio.h>

int main() {

    // il primo ciclo viene ripetuto 5 volte
    // il secondo ciclo viene ripetuto 5 volte * 5 volte

    int val = 1;

    for (int i=0; i<5; i++) {
        for (int a=0; a<5; a++) {
            printf("i = %d\n", i);
            printf("a = %d\n", a);
            printf("Valore = %d\n", val);
            val++; //  => val = val + 1;
        }
    }

}
```

***esempio 3***:

```c
#include <stdio.h>

int main() {

    // il primo ciclo viene ripetuto 5 volte
    // il secondo ciclo viene ripetuto 5*5 volte
    // il terzo ciclo viene ripetuto 5*5*3 volte

    int val3 = 1;

    for (int i=0; i<5; i++) {
        for (int a=0; a<5; a++) {
            for (int x=0; x<3; x++) {
                printf("i = %d\n", i);
                printf("a = %d\n", a);
                printf("x = %d\n", x);
                printf("Valore = %d\n", val3);
                val3++; //  => val = val + 1;
            }
        }
    }
}
```

## 2️⃣ Ciclo While

L’istruzione **while** prevede che prima venga valutata la *condizione* e poi, se è vera, verranno eseguite le *operazioni* all’interno del ciclo. Ecco perchè si definisce **pre-condizionale**.

Quando la condizione diventa falsa il ciclo si interrompe e si passa all’istruzione successiva.

Il ciclo potrebbe **non essere mai eseguito** se la condizione non fosse vera in partenza.

Il ciclo potrebbe essere **infinito** se la condizione risultasse sempre vera. In questo caso si genera un **loop**.

### Sintassi

L'utilizzo tipico del while prevede quasi sempre l'esecuzione di un blocco di istruzioni, quindi quasi sempre troviamo il costrutto espresso nella forma:

```c
while(condizione) {
    // Istruzioni da eseguire
}
```

### Esempi

***esempio***:
Generiamo i numeri da 0 a 10, a step di 2, utilizzando il ciclo while in C++

```c
#include <stdio.h>

int main() {
    int count = 0;
    while(count <= 10) {
        printf("%d\n", count);
        count = count + 2;
    }

    return 0;
}
```

## 3️⃣ Ciclo Do-While

L’idea alla base del ciclo **do-while** sta nel fatto che prima si entra nel ciclo (viene eseguito il corpo del ciclo), poi si controllo.

In altre parole il corpo del ciclo do-while viene eseguito almeno una volta. 

La semantica del costrutto **do-while** è dunque la seguente:

1. Si esegue l’istruzione (o più di una);
2. Si valuta la condizione, la quale può essere vera o falsa.
3. Se la condizione è vera si ritorna al punto 1; altrimenti si passa all’istruzione successiva.

### Sintassi

troviamo il costrutto espresso nella forma:

```c
do {
    // istruzioni;
} while (condizione);
```

### Esempi

***esempio***:

inserire un valore finchè non viene letto un valore negativo.

```c
#include <stdio.h>

int main() {
    int valore;

    do {
        printf("Inserire valore negativo: ");
        scanf("%d", &valore);
    } while (valore >= 0);
    // il ciclo continua fintanto che non si inserisce un valore negativo
}
```

## 📑 Esercizi

[MIX esercizi if/for/while in C++](https://ticoprof.wordpress.com/mix-esercizi-if-for-while-cpp/)
