# Mio E-Commerce Portfolio

Questo progetto è un'applicazione e-commerce frontend sviluppata per dimostrare competenze avanzate nello sviluppo web moderno. L'applicazione è una Single Page Application (SPA) completamente reattiva, che integra chiamate API asincrone e gestione dello stato globale.

Il design è stato personalizzato con uno stile distintivo, utilizzando una tipografia curata e un layout moderno per offrire un'esperienza utente professionale.

---

<img width="1256" height="611" alt="my-ecommerce-home" src="https://github.com/user-attachments/assets/ac2d897f-26a0-4001-9795-6388a0cd4b66" />

---

<img width="1254" height="610" alt="my-ecommerce-scheda" src="https://github.com/user-attachments/assets/049cf235-e20f-4b60-8822-cbffba701f7f" />


---

## Panoramica del Progetto

L'obiettivo principale di questo progetto è mostrare la capacità di costruire un'applicazione React scalabile e manutenibile utilizzando TypeScript. Le funzionalità principali includono la navigazione tra i prodotti, la visualizzazione dei dettagli di ogni articolo, la ricerca e la gestione completa di un carrello della spesa.

## Funzionalità Principali

* **Architettura a Componenti:** Utilizzo di React per creare componenti riutilizzabili e modulari.
* **Type Safety:** Intero codice scritto in TypeScript per garantire la robustezza e prevenire errori a runtime.
* **Gestione dello Stato Globale:** Implementazione della Context API di React per gestire lo stato del carrello (aggiunta, rimozione, calcolo totali) accessibile da qualsiasi parte dell'app.
* **Routing Dinamico:** Utilizzo di React Router per la navigazione lato client senza ricaricamento della pagina (Home, Dettaglio Prodotto, Carrello, 404).
* **Integrazione API:** Recupero dati in tempo reale da FakeStoreAPI utilizzando fetch asincrone.
* **Custom Hooks:** Creazione di hook personalizzati (es. `useFetchData`) per astrarre la logica di fetching e gestire gli stati di caricamento ed errore.
* **Styling Avanzato:** Utilizzo di SCSS con approccio CSS Modules per stili locali e variabili globali.

## Stack Tecnologico

* **Frontend Framework:** React
* **Linguaggio:** TypeScript
* **Build Tool:** Vite
* **Styling:** SCSS (Sass) & CSS Modules
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Version Control:** Git & GitHub

## Struttura del Progetto

Il codice è organizzato seguendo le best practices per garantire leggibilità e scalabilità:

* `src/components`: Componenti UI riutilizzabili (Header, Footer, ProductCard).
* `src/pages`: Componenti che rappresentano le viste intere (HomePage, CartPage, ProductDetailPage).
* `src/context`: Logica per lo stato globale (CartContext).
* `src/hooks`: Logica riutilizzabile (useFetchData).
* `src/styles`: Configurazioni SCSS globali, variabili e reset.
* `src/types`: Definizioni delle interfacce TypeScript (Product, ecc.).

## Installazione e Avvio in Locale

Per eseguire questo progetto sul tuo computer locale, segui questi passaggi:

1.  **Clona la repository**
    ```bash
    git clone [https://github.com/IL_TUO_USERNAME/IL_TUO_REPO.git](https://github.com/IL_TUO_USERNAME/IL_TUO_REPO.git)
    ```

2.  **Entra nella cartella del progetto**
    ```bash
    cd IL_TUO_REPO
    ```

3.  **Installa le dipendenze**
    ```bash
    npm install
    ```

4.  **Avvia il server di sviluppo**
    ```bash
    npm run dev
    ```

L'applicazione sarà accessibile all'indirizzo `http://localhost:5173`.

## Crediti

I dati dei prodotti (immagini, descrizioni, prezzi) sono forniti gratuitamente da [FakeStoreAPI](https://fakestoreapi.com/).
