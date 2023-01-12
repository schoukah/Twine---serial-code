# Twine scripts - repo in construction...
Une collection de scripts pour que Twine puisse parler avec d'autres appareils / applications etc.

## Twine + serial code
 Transmission en série vers Twine / Serial communication with Twine

## C'est quoi donc ? *What is this* ?

Des morceaux de code qui donnent (au moins un) exemple de communication avec un navigateur via transmission en série. Cet exemple est adapté pour le format Sugarcube de Twine. Il permet, dans ce cas-ci, d'envoyer des signaux de battements de coeur encodés à partir d'un capteur connecté à un Arduino. Ces signaux sont disponibles via le [Web Serial API](https://github.com/WICG/serial/blob/main/EXPLAINER.md) pour les navigateurs Google Chrome, Chromium, Opera et Microsoft Edge ([pour le moment](https://caniuse.com/web-serial)).

De la documentation et un tutoriel sont disponibles sur le [blog de Google](https://developer.chrome.com/en/articles/serial/).

## Matériel requis

* Un Arduino (Uno utilisé dans ce cas-ci, mais allez-y avec ce que vous avez. N'importe quel microcontrolleur ou ordinateur monocarte — tel qu'un Raspberry Pi — capable de conversion de signaux analogiques à numériques et de transmission en série fera l'affaire).
* Le [logiciel Twine](https://www.twinery.org) (application navigateur, pas testé sur l'application téléchargeable).
* Un peu de patience et de détermination.
* Un [capteur de battements de coeur](https://pulsesensor.com/) dans cette configuration:

![Source: site web de Pulse Sensor](https://cdn.shopify.com/s/files/1/0100/6632/files/PulseSensor_GettingAdvanced_bb_large.png?v=1511986194)
<figcaption>Source: site web de Pulse Sensor, tutoriel <a href="https://pulsesensor.com/pages/getting-advanced">Getting (Calculating) BPM</a>.</figcaption>

## Todo

[ ] Compléter le ReadMe
[ ] Traduction en anglais
[ ] D'autres exemples et un tutoriel plus complet

## Thanks / remerciements

A huge thank you to Sven Dahlstrand whose
[https://github.com/svendahlstrand/web-serial-api](https://) formed the
basis for this repo. I wouldn't have thought of [Window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) as a working solution to get the code working with Twine's Sugarcube story format.
