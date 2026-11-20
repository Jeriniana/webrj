# Réponses — TP Gargote Mobile, partie 2 : de JavaScript à TypeScript

Nom et prénom :


Groupe :

Répondez en quelques phrases, avec vos mots. Quand une question demande ce que
vous avez observé, décrivez ce que vous avez réellement vu à l'écran ou dans la console.

## Fiche 07 — Migration

Nombre d'erreurs au premier `npm run typecheck` : 68.

| Incident | En TypeScript, détecté à l'écriture ? | Message du compilateur |
|---|---|---|
| 1. Prix additionnés | Oui | Le prix est une chaîne, mais un nombre est attendu. |
| 2. Faute de frappe | Oui | La propriété n'existe pas. |
| 3. API renommée | Oui | `Property 'nom' does not exist on type 'Plat'.` |
| 4. Mauvais argument | Oui | Le type de l'argument ne correspond pas. |
| 5. await oublié | Pas toujours | L'oubli de `await` n'est pas toujours signalé. |

- Q7.1 : Le premier diagnostic affiche 68 erreurs. Elles venaient surtout des types manquants ou incorrects.
- Q7.2 : L'erreur sur le prix aurait disparu si `formatAriary` acceptait aussi les chaînes.
- Q7.3 : Le compilateur a signalé 6 erreurs après le changement de `nom` en `libelle`. Il a trouvé les endroits où l'ancien nom était encore utilisé.
- Q7.4 : Le résumé actuel affiche 113 lignes ajoutées et 89 supprimées. La migration prend du temps, mais TypeScript aide à repérer les erreurs plus tôt. Pour ce petit projet, le bénéfice reste modeste.
