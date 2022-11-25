const express = require('express')
const locationController = require('./locations/locations.controller')
const app = express()
const port = 3000
const bodyParser=require('body-parser')
'use strict'
// pour utiliser les body (npm install body-parser):
app.use(bodyParser.json())
// lien interessant : https://www.youtube.com/watch?v=WDrU305J1yw&ab_channel=Academind
app.use(locationController)

app.listen(port, () => {
	console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
})

require("dotenv").config();// IL MANQUAIT JUSTE CA EN FAIT????????????GRRRRRRRR, en fait nn marche toujours pas...




/* apres tp3, on fait partie utilisateur. en effet, la c'est pas securisé
on stocke jamais les mdp en clair, on stock des hash
les hash sont des fonctions injectives, mais surjective dans la realité
attaque rainbow avec rainbow table ou brutforce tous les mdp dedans

pour eviter ca, on rajoute un salt (mdp + qqch_aleatoire en fait)
dou quand l'utilisateur met son mdp nul, on lui attribu un salt,
et du coup quand veux se connecter, on prend le mdp rentré, on prend le salt, et la on regarde si le hash correspond a ce qu'il faut

en fait on empeche la facilité des rainbow table, mais en pratique, avec suffisamenet de temps ou de puissance, impossible d'empecher de bruteforce
apres pour burtforcer un mdp+salt (bruteforce md5), il faut (si mdp suffisamment robuste avec 12 char) faut 2000 ans (allsafeit.com bruteforce qqch)
si on utilise pas de salt on lui laisse l'oportunité de faire trouver le mdp easy peasy lemon squeezy
(bon apres passwsord123 c vrmt pas securisé)

du coup les hash seront pas dans la bdd des hackers


on va utilisé un lib qui donne moyen de sotcker le hash et le salt, et de comparer avec ce qui est proposé aussi



quand connexion, faut s'assurer que utilisateur unique (par ex, un attribut est unique)
on ne sauvegarde jamais mdp en clair, on sauvegarde le hash

plus tard on fera passeport startegies, pour securiser connexion a l'utilisateur




un token dans une api permet de voir ce qu'il y a dans le compte mais pas de le modifier, cf jwt.io
le serveur peut signer des cles, qui les garanti en fait


regarder : impots.roch-moreau.fr




on va aller sur svelte pour stocker donner, faire des truc joli, comment on les manipule, comment on fait de la secu un peu (ca c'est au second semestre)
on va aussi faire de la cybersecu !!!!!!!!
ARP Spoofing
MITM Attack (man in the middle)
DNS Poisoning
Ops -> Déploiement, administration linux pour heroku c'est tres imple mais c'est payant
on a des acces azure avec l'esilv
on peut aussi une utiliser une rasberry pi, notion de selfhosting en fait, : lunarok-domotique.com
le prof a pleins de nuc (bébé ordi) qui taffent ensemble, avec processeur intel, ca fait un cluster et il peut faire un server pour faire ce qu'il veut
apres il deocnsielle le nuc pour les selfhosting, plus les lenovo thinkcenter m73
plus lenovo thinkcenter micro, pas tres cher car le ventilo facilement remplassable (et ca se change bcp en fait, le ventilo pete)
alors que les rasp bosse h24, mais le pb c'est que les rasp c'est des arm

exemple, proxmox on peut pas le faire tourner sur rasp

iny mini micro serverhehome qui ont fait comparatifs !!!!
ici le salt on le genere avec bcrypt
https://www.npmjs.com/package/bcrypt, mieux avc des promise,
wait
gensalt
hash




*/