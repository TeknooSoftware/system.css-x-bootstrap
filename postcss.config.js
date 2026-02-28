module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['advanced', {
        // Optimisations qui suppriment les redondances SANS minifier
        discardComments: false,  // Garder les commentaires
        discardDuplicates: true, // Supprimer les règles dupliquées
        discardOverridden: true, // Supprimer les propriétés redéfinies inutilement
        mergeRules: true,        // Fusionner les règles identiques
        normalizeWhitespace: false, // NE PAS minifier les espaces

        // Options avancées
        mergeLonghand: false,    // Ne pas convertir en shorthand
        colormin: false,         // Ne pas optimiser les couleurs
        minifyFontValues: false, // Ne pas optimiser les fonts
        minifySelectors: false,  // Ne pas minifier les sélecteurs

        // Garder le formatage lisible
        autoprefixer: false,     // Pas de prefixes auto
        cssDeclarationSorter: false, // Ne pas trier les déclarations
      }]
    })
  ]
};
