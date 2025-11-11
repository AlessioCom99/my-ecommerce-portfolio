// src/hooks/useFetchData.ts
import { useState, useEffect } from "react";

// 1. Definiamo l'interfaccia per lo stato che il nostro hook restituirà
interface FetchState<T> {
  data: T | null; // I dati (di tipo generico T) o null se non ancora caricati
  loading: boolean; // True se stiamo caricando
  error: string | null; // Un messaggio di errore o null se non c'è errore
}

// 2. Definiamo il Custom Hook.
//    Usiamo un "Tipo Generico" <T> per renderlo riutilizzabile.
//    Potrà fetchare Prodotti, Utenti, o qualsiasi cosa.
function useFetchData<T>(url: string): FetchState<T> {
  // 3. Definiamo i tre stati
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 4. Usiamo useEffect per eseguire la chiamata API quando
  //    il componente (che userà questo hook) viene montato
  //    o quando l'URL cambia.
  useEffect(() => {
    // Creiamo una funzione asincrona interna per gestire la chiamata
    const fetchData = async () => {
      setLoading(true); // Inizia il caricamento
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          // Se la risposta del server non è OK (es. 404, 500)
          throw new Error(`Errore: ${response.status}`);
        }

        const jsonData = (await response.json()) as T; // Diciamo a TS che il JSON è di tipo T
        setData(jsonData);
      } catch (e) {
        // Se c'è un errore di rete o nel parsing
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Errore sconosciuto durante il fetch");
        }
      } finally {
        // 5. In ogni caso (successo o errore),
        //    il caricamento è terminato
        setLoading(false);
      }
    };

    fetchData(); // Eseguiamo la funzione
  }, [url]); // L'array di dipendenze: riesegue l'effetto se l'URL cambia

  // 6. Restituiamo l'oggetto con i tre stati
  return { data, loading, error };
}

export default useFetchData;
