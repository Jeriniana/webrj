export async function lire<T>(cle: string, defaut: T, valide: (x: unknown) => x is T): Promise<T>
export async function ecrire<T>(cle: string, valeur: T): Promise<void>