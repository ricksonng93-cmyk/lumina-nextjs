# Socle formulaires — LUMINA Creative Group

Ce document recense tous les formulaires du site, leur endpoint, leurs champs et leurs règles de validation.

## Prestataire de traitement

Tous les formulaires sont traités par **Formspree Inc.** (États-Unis) via l'endpoint unique :

```
https://formspree.io/f/mgoljvnw
```

Formspree est désigné sous-traitant de traitement au sens du RGPD dans la politique de confidentialité (`/mentions-legales`).

---

## 1. Formulaire de contact — `/contact`

**Méthode :** `POST` · `Content-Type: application/json`

| Champ       | `name`      | Type       | Requis | Notes                                       |
|-------------|-------------|------------|--------|---------------------------------------------|
| Nom complet | `name`      | `text`     | oui    | min. 2 caractères                           |
| Email       | `email`     | `email`    | oui    | format RFC 5322                             |
| Téléphone   | `phone`     | `tel`      | non    |                                             |
| Entreprise  | `company`   | `text`     | non    |                                             |
| Sujet       | `subject`   | `select`   | oui    | Audit · Site web · SaaS · Autre             |
| Message     | `message`   | `textarea` | oui    | min. 20 caractères                          |
| Honeypot    | `_gotcha`   | `text`     | —      | doit rester vide ; caché via `className="hidden"` |

### Comportement UX

- Soumission bloquée côté client si `_gotcha` est rempli.
- Feedback inline (pas de redirection) : message de succès sous le bouton.
- En cas d'erreur réseau : message d'erreur explicite positionné à côté du bouton d'envoi.
- Les champs en erreur de validation sont signalés individuellement (pas de bloc global).
- À implémenter à l'étape D.

---

## 2. Newsletter — Footer

**Méthode :** `POST` · `Content-Type: application/json`

| Champ    | `name`    | Type    | Requis | Notes                           |
|----------|-----------|---------|--------|---------------------------------|
| Email    | `email`   | `email` | oui    |                                 |
| Type     | `type`    | —       | —      | Valeur fixe : `"Newsletter"`    |
| Honeypot | `_gotcha` | `text`  | —      | caché via `className="hidden"`  |

### Comportement UX

- Confirmation inline : icône ✓ + "Inscription confirmée." (disparaît après 4 s via `setTimeout`).
- En cas d'erreur serveur : "Une erreur s'est produite. Réessayez." en `text-red-400`.
- Implémenté dans `app/components/layout/Footer.tsx`.

---

## 3. Formulaire LUMINA Education — `/lumina-education`

À implémenter à l'étape D.

Champs prévus :

| Champ              | Type       | Notes                         |
|--------------------|------------|-------------------------------|
| Établissement      | `text`     |                               |
| Ville / pays       | `text`     |                               |
| Nombre d'élèves    | `select`   | < 100 · 100–300 · 300–600 · > 600 |
| Email du directeur | `email`    |                               |
| Message            | `textarea` | optionnel                     |
| Honeypot           | `text`     |                               |

---

## Notes générales

- Aucune donnée de formulaire n'est persistée côté client (pas de `localStorage`).
- Tous les champs requis portent l'attribut HTML `required` ET une validation Formspree côté serveur.
- La politique de confidentialité précise les finalités de traitement de chaque champ.
- L'adresse email de contact : `contact@lumina-cg.com`.
