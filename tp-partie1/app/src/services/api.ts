import type { Categorie, Commande, NouvelleCommande, Plat } from '@/types/gargote';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export class ErreurApi extends Error {
  constructor(
    message: string,
    public statut: number,
    public details: Record<string, string> = {},
  ) {
    super(message);
    this.name = 'ErreurApi';
  }
}

async function requete<T>(chemin: string, options: RequestInit = {}): Promise<T> {
  const reponse = await fetch(BASE_URL + chemin, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const donnees: unknown = reponse.status === 204 ? null : await reponse.json();
  if (!reponse.ok) {
    const erreur = donnees as { message?: string; erreurs?: Record<string, string> } | null;
    throw new ErreurApi(
      erreur?.message ?? `Erreur HTTP ${reponse.status}`,
      reponse.status,
      erreur?.erreurs ?? {},
    );
  }
  return donnees as T;
}

export default {
  getCategories(): Promise<Categorie[]> {
    return requete<Categorie[]>('/categories');
  },

  getPlats(categorieId?: number | null): Promise<Plat[]> {
    return requete<Plat[]>(categorieId ? `/plats?categorie=${categorieId}` : '/plats');
  },

  getPlat(id: number): Promise<Plat> {
    return requete<Plat>(`/plats/${id}`);
  },

  getCommandes(): Promise<Commande[]> {
    return requete<Commande[]>('/commandes');
  },

  creerCommande(commande: NouvelleCommande): Promise<Commande> {
    return requete<Commande>('/commandes', { method: 'POST', body: JSON.stringify(commande) });
  },
};
