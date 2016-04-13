Modules,

voor het kunnen gebruiken van 
import (modulenaam) from './adf '; 

heb je Require.js nodig (deze defineer je in de HTML)
ook moet je de config aanpassen naar AMD ipv commonjs

Zie voorbeeld *require in html en configuratie bestand* hoofdstuk 6/7 van Lars.

CommonJs:
/// <reference path="" />

AMD (Async Module Definition)
/// import (modulenaam) from './url';

(zie extra ReadMe van Lars)