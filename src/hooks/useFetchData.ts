import { useState, useEffect } from "react";

// Interfaccia per descrivere lo stato del nostro hook
interface FetchState<T> {
  data: T | null; // I dati (di tipo generico T)
  loading: boolean; // True se sta caricando
  error: string | null; // Messaggio di errore
}

// Un hook "generico" <T> che accetta un URL
function useFetchData<T>(url: string): FetchState<T> {
  // Stati per gestire i dati, il caricamento e gli errori
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Esegue la chiamata API quando l'URL cambia
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inizia il caricamento
      setError(null);

      try {
        const response = await fetch(url);

        // Se la risposta non è "OK" (es. 404), lancia un errore
        if (!response.ok) {
          throw new Error(`Errore: ${response.status}`);
        }

        const jsonData = (await response.json()) as T;
        setData(jsonData); // Salva i dati nello stato
      } catch (e) {
        // Salva il messaggio di errore
        if (e instanceof Error) setError(e.message);
      } finally {
        // In ogni caso, il caricamento è finito
        setLoading(false);
      }
    };

    fetchData(); // Esegui la funzione
  }, [url]); // L'array di dipendenze: riesegue questo effetto se l'URL cambia

  // Restituisce l'oggetto con i tre stati
  return { data, loading, error };
}

export default useFetchData;
