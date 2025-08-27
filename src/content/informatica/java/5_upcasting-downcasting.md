---
title: "Upcasting / Downcasting"
draft: false
publishDate: "2025-08-27"
subject: "Java"
category: "Informatica"
tags: ["java", "programmazione", "upcasting", "downcasting", "difficile"]
author: "Dennis Turco"
---

[Upcasting and Downcasting in Java - Full Tutorial](https://www.youtube.com/watch?v=HpuH7n9VOYk&ab_channel=CodingwithJohn)

## ✅ **UPCASTING**

### Cos'è:

L'**upcasting** è quando si assegna un oggetto di una **classe derivata (sottoclasse)** a una **variabile di tipo della superclasse**.

### Perché è utile:

Permette di trattare gli oggetti figli (come `Studente`) come se fossero della classe padre (`Persona`). Questo è utile quando vuoi scrivere codice generico che può funzionare su diversi tipi di oggetti.

### ✅ Esempi nel tuo codice:

```java
Persona persona1 = new Studente("Gigi", "Sali", "DSKNGHSJDJH2323DSH", "23723");
```

Qui stai **creando un oggetto `Studente`**, ma lo stai assegnando a una variabile di tipo `Persona`.

Questa è una forma di **upcasting implicito**, **non serve il cast** esplicito. È perfettamente legale perché `Studente` **è** una `Persona`.

---

```java
PersonaGenericaCheSaluta(studente);
```

Anche questo è **upcasting**: stai passando un oggetto `Studente` al metodo che accetta una `Persona`.

---

## ❌ **DOWNCASTING**

### Cos'è:

Il **downcasting** è l'operazione opposta: convertire un riferimento della superclasse (es. `Persona`) in un riferimento della sottoclasse (es. `Studente`).

### Attenzione!

Non è sempre sicuro! Se l’oggetto **non è effettivamente** un `Studente`, si avrà un **errore a runtime (`ClassCastException`)**.

---

### ✅ Esempi corretti nel tuo codice:

```java
Studente studente1 = (Studente) persona1;
```

Questo funziona perché `persona1` **è** un `Studente` (vedi sopra, era stato creato con `new Studente(...)`). Anche se è dichiarato come `Persona`, è lecito fare il cast.

---

### ❌ Esempio sbagliato (errore a runtime):

```java
Studente studente2 = (Studente) persona;
```

Qui invece `persona` **non è un `Studente`**. È stato creato con:

```java
Persona persona = new Persona("Carlo", "Magno", ...);
```

Quindi, anche se il compilatore accetta il cast, **a runtime si genera un’eccezione**, perché `persona` **non può diventare un `Studente`**.

---

### ✅ Come evitarlo: uso di `instanceof`

```java
if (persona instanceof Studente) {
    Studente studente2 = (Studente) persona;
    // ok!
} else {
    System.out.println("persona NON è un'istanza di Studente");
}
```

Questo è il modo sicuro per fare **downcasting condizionato**. Controlli prima se l’oggetto è davvero della sottoclasse.

---

## 🧠 Riepilogo:

| Operazione | Sicurezza | Quando usarla | Cast richiesto |
| --- | --- | --- | --- |
| **Upcasting** | Sicura | Quando tratti un oggetto figlio come oggetto generico | ❌ No |
| **Downcasting** | Rischiosa | Quando vuoi usare metodi della sottoclasse | ✅ Sì (e `instanceof` è consigliato) |

## ESEMPIO COMPLETO:

```java
public class Program {
    public static void main(String[] args) throws Exception {
        Persona persona = new Persona("Carlo", "Magno", "SDGSHJGFDui23yDSDGH");
        Studente studente = new Studente("Maria", "Billi", "ashjdashjvd123123", "237651273");

        System.out.println("\n--- UPCASTING ---");
        // upcasting implicito (Studente -> Persona)
        Persona persona1 = new Studente("Gigi", "Sali", "DSKNGHSJDJH2323DSH", "23723");
        System.out.println("Upcasting: Studente -> Persona (persona1)");
        System.out.println(persona1.toString());

        System.out.println("\n--- CHIAMATA METODI CON UPCASTING ---");
        PersonaGenericaCheSaluta(persona); // NO upcasting
        PersonaGenericaCheSaluta(studente); // upcasting implicito

        System.out.println("\n----------------------------------------------");

        System.out.println("\n--- DOWNCASTING CORRETTO ---");
        // downcasting (Persona -> Studente) con oggetto effettivamente Studente
        Studente studente1 = (Studente) persona1;
        System.out.println("Downcasting: Persona -> Studente (studente1)");
        System.out.println(studente1.toString());
        StudenteCheSaluta(studente1);

        System.out.println("\n--- USO DEL METODO StampaInfoStudente CON instanceof ---");
        StampaInfoStudente(studente); // oggetto Studente -> va bene
        StampaInfoStudente(persona); // oggetto Persona -> no cast
        StampaInfoStudente(persona1); // oggetto Studente castato a Persona -> va bene

        System.out.println("\n--- DOWNCASTING NON SICURO (CON CONTROLLO instanceof) ---");
        if (persona instanceof Studente) {
            Studente studente2 = (Studente) persona;
            System.out.println("Downcasting riuscito: Persona -> Studente (studente2)");
            System.out.println(studente2.toString());
            StudenteCheSaluta(studente2);
        } else {
            System.out.println("Downcasting FALLITO: persona NON è un'istanza di Studente");
        }
    }

    private static void StudenteCheSaluta(Studente studente) {
        System.out.println("Studente che saluta:");
        studente.saluta();
    }

    private static void PersonaGenericaCheSaluta(Persona persona) {
        System.out.println("Persona che saluta:");
        persona.saluta();
    }

    private static void StampaInfoStudente(Persona persona) {
        if (persona instanceof Studente) {
            System.out.println("L'oggetto è un Studente:");
            System.out.println(persona.toString());
        } else {
            System.out.println("L'oggetto passato NON è un'istanza di Studente");
        }
    }
}
```