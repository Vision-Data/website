import '../styles/tailwind.css'
import '../styles/style.styl'

route();

window.addEventListener('hashchange', () => {
  route();
});

function route() {
  if (window.location.hash) {
    const hash = window.location.hash;
    switch (hash.replace('#', '')) {
      case 'aboutus':
        document.querySelector('#app').innerHTML = `
            <div class="title-container">
              <b>Open-Source</b>
              <h1 class="mb-5 text-5xl font-bold">
                Qui sommes-nous ?
              </h1>
              <p>Vision est une application web permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas</p>
            </div>
      
            <div class="text-container">
                <h2>1. Notre projet</h2>
                <p>These User Terms of Service ("Terms") are between you ("you") and Postman, Inc. ("Postman" or "we") and govern your use of all versions of the Postman software and services, including the Postman API and Beta Previews (collectively, the "Services"), and the Postman websites, including but not limited to www.postman.com, blog.postman.com, learning.postman.com, community.postman.com, and store.postman.com (the "Websites").</p>
                
                <h2>2. Nos Objectifs</h2>
                <p>By downloading, installing, or using the Services on any computer system, or by accepting these Terms (either by clicking a box indicating that you accept these Terms, or by executing an ordering document ("Order") referencing these Terms), you acknowledge and agree that you have read, understand, and agree to be bound by these Terms and our Privacy Policy.</p>
      
                
                <p>You may not use the Services in violation of export control or sanctions laws of the United States or any other applicable jurisdiction. You may not use the Services if you are or are working on behalf of a Specially Designated National (SDN) or a person subject to similar blocking or denied party prohibitions administered by a U.S. government agency.</p>
                
                <h2>3. L'équipe Vision</h2>
                <p>6 étudiants qui se sont réunis pour créer un projet qui les motive et faire avancer le monde</p>
                <ul>
                <li>Chargée de communication: Ludivine Vinet</li>
                <li>Développeur Back & Chef Technique: Arthur Geay</li>
                <li>Chef de projet & designer:Jérémie Delécrin</li>

                <h2>4. Nos valeurs</h2>
                <ul>
                  <li>Entraide</li>
                  <li>Vulgarisation</li>
                  <li>Accessibilité</li>
                </ul>
            </div>
            `;
        break;
      case 'lexique':
        document.querySelector('#app').innerHTML = `
            <div class="title-container">
              <b>Open-Source</b>
              <h1 class="mb-5 text-5xl font-bold">
                Lexique
              </h1>
              <p>Vous ne comprenez pas un terme que vous avez rencontrée dans l'application, nous vous éclairerons ici !</p>
            </div>
      
            <div class="text-container">
                <h2>API</h2>
                <p>Une API aussi appelée interface de programmation d’application est un service de communication qui permet d’échanger des données. Plus précisément, on va utiliser les fonctions d’un logiciel sur un autre programme pour développer des fonctionnalités et importer des données.</p>

                <h2>Open Source</h2>
                <p>L’open source est une méthode de codage publique, l’auteur accorde tous les droits sur son logiciel aux autres utilisateurs. Celui-ci peut être modifié, étudié ou encore ré-utilisé par une autre personne.</p>

                <h2>Schéma</h2>
                <p>Un schéma est une représentation des données visuelle qui est intuitive et simple.</p>

                <h2>Donnée</h2>
                <p>Une donnée est un élément d’information qui va servir à apporter une réponse à une question. Elle peut aussi être étudiée dans le cadre de recherches.</p>

                <h2>Github</h2>
                <p>Guithub est une plateforme qui permet aux développeurs de stocker et de partager leurs codes. Ils peuvent les rendre publique ou les garder privé. </p>
                
                <h2>Requête HTTP</h2>
                <p>Une requête http est utilisée par le navigateur web pour consulter un site internet. En fonction de la requête demandée le navigateur web va renvoyer directement sur la page web demandée.</p>
                
                <h2>Header</h2>
                <p>Le header correspond à l’en-tête d’un site web, c’est dans cette partie que l’on retrouve le menu de navigation et le logo de la marque</p>
                
                <h2>Protocole HTTPS</h2>
                <p>Le protocole https prouve que le site est sécurisé ce qui garantit la confidentialité des échanges entre l'ordinateur de l'utilisateur et le service.</p>

                <h2>Body (Corps d'une requête)</h2>
                <p>C'est un ensemble de lignes non-obligatoire permettant de fournir des informations lors de l'envoi de données à un service.</p>
                
                
                <h2>GET, POST, PUT et DELETE</h2>
                <p>
                  <ul>
                    <li>GET (RECEVOIR) est une requête http qui permet d’obtenir une ressource</li>
                    <li>POST (ENVOYER) est une requête http qui permet d’avoir accès à un formulaire en ligne</li>
                    <li>PUT (MODIFIER) est une requête qui permet de mettre à jour ou d’insérer une ressource</li>
                    <li>DELETE (SUPPIMER) est une requête qui permet d’effacer des informations</li>
                  </ul>
                </p>

                <h2>Token (Jeton)</h2>
                <p>Un token est un élément qui permet de certifier l’authentification d’une personne sur un site web.</p>
                
                <h2>Tableau, Objet et valeurs (Array, Object, Value)</h2>
                <p>
                <ul>
                  <li>Un tableau est un groupement de valeurs</li>
                  <li>Un objet est un structuration de données permettant de regrouper des valeurs autour d'un même thème</li>
                  <li>Une valeur est une information ou une donnée</li>
                </ul>
                </p>

                <h2>JSON</h2>
                <p>JSON (JavaScript Objet Notation) est un format de données caractérisé par l'utilisation d'accolades "{}" et sa représentation en arborescence. Il est facilement lisible par les ordinateurs et les humains.</p>

            </div>
            `;
        break;
      case 'agreement':
        document.querySelector('#app').innerHTML = `
            <div class="title-container">
            <b>Open-Source</b>
            <h1 class="mb-5 text-5xl font-bold">
              Conditions d'utilisations
            </h1>
            <p>Vision est une application web permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas</p>
          </div>
    
          <div class="text-container">
              
              
          <h2>Définitions</h2>
          <p><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.<br>
          <b>Prestations et Services :</b> <a href="https://vision-data.io/">https://vision-data.io/</a> met à disposition des Clients :</p>

          <p><b>Contenu :</b> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>

          <p><b>Informations clients :</b> Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <a href="https://vision-data.io/">https://vision-data.io/</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>


          <p><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnommé.</p>
          <p><b>Informations personnelles :</b> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
          <p>Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

          <h2>1. Présentation du site internet.</h2>
          <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://vision-data.io/">https://vision-data.io/</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
          </p><p><strong>Propriétaire</strong> :   Vision Data team   – 20 boulevard General de Gaulle 44000 Nantes<br>
                        
          <strong>Responsable publication</strong> : A.Geay – vision<br>
          Le responsable publication est une personne physique ou une personne morale.<br>
          <strong>Webmaster</strong> : A.Geay – vision<br>
          <strong>Hébergeur</strong> : ovh – 2 rue Kellermann 59100 Roubaix 1007<br>
          <strong>Délégué à la protection des données</strong> : A.Geat – vision@mail.com<br>
          </p>

          <div ng-bind-html="linkHTML"><p>Ce modèle de mentions légales est proposé par le <a href="https://fr.orson.io/1371/generateur-mentions-legales" title="générateur de mentions légales RGPD d">générateur de mentions légales RGPD d'Orson.io</a></p></div>



          <h2>2. Conditions générales d’utilisation du site et des services proposés.</h2>

          <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. 
          Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>

          <p>L’utilisation du site <a href="https://vision-data.io/">https://vision-data.io/</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://vision-data.io/">https://vision-data.io/</a> sont donc invités à les consulter de manière régulière.</p>

          <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <a href="https://vision-data.io/">https://vision-data.io/</a>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
          Le site web <a href="https://vision-data.io/">https://vision-data.io/</a> est mis à jour régulièrement par <a href="https://vision-data.io/">https://vision-data.io/</a> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

          <h2>3. Description des services fournis.</h2>

          <p>Le site internet <a href="https://vision-data.io/">https://vision-data.io/</a> a pour objet de fournir une information concernant l’ensemble des activités de la société.
          <a href="https://vision-data.io/">https://vision-data.io/</a> s’efforce de fournir sur le site <a href="https://vision-data.io/">https://vision-data.io/</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

          <p>Toutes les informations indiquées sur le site <a href="https://vision-data.io/">https://vision-data.io/</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="https://vision-data.io/">https://vision-data.io/</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

          <h2>4. Limitations contractuelles sur les données techniques.</h2>

          <p>Le site utilise la technologie JavaScript.

          Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
          Le site <a href="https://vision-data.io/">https://vision-data.io/</a> est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

          <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>

          <h2>5. Propriété intellectuelle et contrefaçons.</h2>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <a href="https://vision-data.io/">https://vision-data.io/</a>.</p>

          <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

          <h2>6. Limitations de responsabilité.</h2>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> agit en tant qu’éditeur du site. <a href="https://vision-data.io/">https://vision-data.io/</a>  est responsable de la qualité et de la véracité du Contenu qu’il publie. </p>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://vision-data.io/">https://vision-data.io/</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="https://vision-data.io/">https://vision-data.io/</a>.
          Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. <a href="https://vision-data.io/">https://vision-data.io/</a> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, <a href="https://vision-data.io/">https://vision-data.io/</a> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>

          <h2>7. Gestion des données personnelles.</h2>

          <p>Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). </p>

          <h3>7.1 Responsables de la collecte des données personnelles</h3>

          <p>Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Vision Data team. <a href="https://vision-data.io/">https://vision-data.io/</a>est représenté par vision, son représentant légal</p>

          <p>En tant que responsable du traitement des données qu’il collecte, <a href="https://vision-data.io/">https://vision-data.io/</a> s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.
          Chaque fois que <a href="https://vision-data.io/">https://vision-data.io/</a> traite des Données Personnelles, <a href="https://vision-data.io/">https://vision-data.io/</a> prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles <a href="https://vision-data.io/">https://vision-data.io/</a> les traite.</p>
           
          <h3>7.2 Finalité des données collectées</h3>
           
          <p><a href="https://vision-data.io/">https://vision-data.io/</a> est susceptible de traiter tout ou partie des données : </p>

          <ul>
            
          <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc. </li>
           
          <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé) </li>
           
          <li>pour améliorer la navigation sur le Site : données de connexion et d’utilisation </li>
           
          <li>pour mener des enquêtes de satisfaction facultatives sur <a href="https://vision-data.io/">https://vision-data.io/</a> : adresse email </li>
          <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</li>


          </ul>

          <p><a href="https://vision-data.io/">https://vision-data.io/</a> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.</p>
           
          <h3>7.3 Droit d’accès, de rectification et d’opposition</h3>
           
          <p>
          Conformément à la réglementation européenne en vigueur, les Utilisateurs de <a href="https://vision-data.io/">https://vision-data.io/</a> disposent des droits suivants : </p>
           <ul>

          <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite </li>
           
          <li>droit de retirer à tout moment un consentement (article 13-2c RGPD) </li>
           
          <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD) </li>
           
          <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) </li>
           
          <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) </li>
           
          <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <a href="https://vision-data.io/">https://vision-data.io/</a> devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné</li>
           </ul>

          <p>Dès que <a href="https://vision-data.io/">https://vision-data.io/</a> a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, <a href="https://vision-data.io/">https://vision-data.io/</a> s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>
           
          <p>Si l’Utilisateur souhaite savoir comment <a href="https://vision-data.io/">https://vision-data.io/</a> utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter <a href="https://vision-data.io/">https://vision-data.io/</a> par écrit à l’adresse suivante : </p>
           
          Vision Data team – DPO, A.Geat <br>
          20 boulevard General de Gaulle 44000 Nantes.
           
          <p>Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que <a href="https://vision-data.io/">https://vision-data.io/</a> corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport). </p>

          <p>
          Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <a href="https://vision-data.io/">https://vision-data.io/</a> par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de <a href="https://vision-data.io/">https://vision-data.io/</a> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>
           
          <h3>7.4 Non-communication des données personnelles</h3>

          <p>
          <a href="https://vision-data.io/">https://vision-data.io/</a> s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, <a href="https://vision-data.io/">https://vision-data.io/</a> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

          <p>
          <a href="https://vision-data.io/">https://vision-data.io/</a> s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de <a href="https://vision-data.io/">https://vision-data.io/</a>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs <a href="https://vision-data.io/">https://vision-data.io/</a> ne collecte aucune « données sensibles ».</p>

          <p>
          Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de <a href="https://vision-data.io/">https://vision-data.io/</a> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
          <p>
          Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de <a href="https://vision-data.io/">https://vision-data.io/</a> sont principalement les agents de notre service client.</p>
          
          <div ng-bind-html="rgpdHTML"></div>


          <h2>8. Notification d’incident</h2>
          <p>
          Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. 
          Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
          <p>
          Aucune information personnelle de l'utilisateur du site <a href="https://vision-data.io/">https://vision-data.io/</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <a href="https://vision-data.io/">https://vision-data.io/</a> et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="https://vision-data.io/">https://vision-data.io/</a>.</p>

          <h3>Sécurité</h3>

          <p>
          Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <a href="https://vision-data.io/">https://vision-data.io/</a> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe. </p>
           
          <p>
          Lors du traitement des Données Personnelles, <a href="https://vision-data.io/">https://vision-data.io/</a>prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>
           
          <h2>9. Liens hypertextes « cookies » et balises (“tags”) internet</h2>
          <p>
          Le site <a href="https://vision-data.io/">https://vision-data.io/</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <a href="https://vision-data.io/">https://vision-data.io/</a>. Cependant, <a href="https://vision-data.io/">https://vision-data.io/</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
          Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.
          <p></p>

          <h3>9.1. « COOKIES »</h3>
           <p>
          Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</p>
           <p>
          <a href="https://vision-data.io/">https://vision-data.io/</a> est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à <a href="https://vision-data.io/">https://vision-data.io/</a> d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</p>
           <p>
          Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. <a href="https://vision-data.io/">https://vision-data.io/</a> informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
           <p>
          Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque <a href="https://vision-data.io/">https://vision-data.io/</a> ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
           <p>
          Le cas échéant, <a href="https://vision-data.io/">https://vision-data.io/</a> décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par <a href="https://vision-data.io/">https://vision-data.io/</a>, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour <a href="https://vision-data.io/">https://vision-data.io/</a> d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
           <p>
          À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. <a href="https://vision-data.io/">https://vision-data.io/</a> pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</p>
           <p>
          Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de <a href="https://vision-data.io/">https://vision-data.io/</a> ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de <a href="https://vision-data.io/">https://vision-data.io/</a>, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
           <p>
          Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de <a href="https://vision-data.io/">https://vision-data.io/</a>. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que <a href="https://vision-data.io/">https://vision-data.io/</a> dépose ce type de cookies.</p>
           
          <h3>Article 9.2. BALISES (“TAGS”) INTERNET</h3>
           

          <p>

          <a href="https://vision-data.io/">https://vision-data.io/</a> peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.</p>
           
          <p>
          Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci. 
           </p>
          <p>
          Cette technologie permet à <a href="https://vision-data.io/">https://vision-data.io/</a> d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur. </p>
           <p>
          Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de <a href="https://vision-data.io/">https://vision-data.io/</a>, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</p>
           <p>
          </p><h2>10. Droit applicable et attribution de juridiction.</h2>  
           <p>
          Tout litige en relation avec l’utilisation du site <a href="https://vision-data.io/">https://vision-data.io/</a> est soumis au droit français. 
          En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes</p>



      
          </div>
            `;
        break;
      case 'policy':
        document.querySelector('#app').innerHTML = `
            <div class="title-container">
              <b>Open-Source</b>
              <h1 class="mb-5 text-5xl font-bold">
                Politique de confidentialité
              </h1>
              <p>Vision est une application web permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas</p>
            </div>
      
            <div class="text-container">
            <h2>Définitions</h2>
            <p>
              <strong>L'Éditeur :</strong> La personne, physique ou morale, qui édite les services de communication au public en
              Iigne.
            </p>
            <p><strong>Le Site :</strong> L'ensemble des sites, pages Internet et services en Iigne proposés par l'Éditeur. </p>
            <p><strong>L'Utilisateur :</strong> La personne utilisant le Site et les services.</p>
            
            <h2>1- Nature des données collectées</h2>
            <p>
              <strong>
                Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de collecter les catégories de
                données suivantes concernant ses Utilisateurs :
              </strong>
            </p>
            <p>Données de connexion (adresses IP, journaux d'événements...)</p>
            
            
            <h2>2- Communication des données personnelles à des
            tiers</h2>
            <p><strong>Pas de communication à des tiers</strong></p>
            <p>
              Vos données ne font l'objet d'aucune communication à des tiers. Vous êtes toutefois informés
              qu'elles pourront être divulguées en application d'une Ioi, d'un règlement ou en vertu d'une
              décision d'une autorité réglementaire ou judiciaire compétente.
            </p>
            
            
            
            
            
            
            
            <h2>3- Information préalable pour la communication des données personnelles à des tiers en cas de 
            fusion / absorption</h2>
            <p>
              <strong>Information préalable et possibilité d'opt-out avant et après la fusion / acquisition</strong><br/> Dans le cas
              où nous prendrions part à une opération de fusion, d'acquisition ou à toute autre forme de cession
              d'actifs, nous nous engageons à garantir la confidentialité de vos données personnelles et à vous
              informer avant que celles-ci ne soient transférées ou soumises à de nouvelles règles de
              confidentialité.
            </p>
            
            
            <h2>4- Agrégation des données</h2>
            <p><strong>Agrégation avec des données non personnelles</strong></p>
            <p>
              Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à
              tous nos Utilisateurs ou à des groupes ou catégories spécifiques d'Utilisateurs que nous combinons
              de manière à ce qu'un Utilisateur individuel ne puisse plus être identifié ou mentionné) et les
              informations non personnelles à des fins d'analyse du secteur et du marché, de profilage
              démographique, à des fins promotionnelles et publicitaires et à d'autres fins commerciales.
            </p>
            <p><strong>Agrégation avec des données personnelles disponibles sur les comptes sociaux de
            l'Utilisateur</strong></p>
            <p>
              Si vous connectez votre compte à un compte d'un autre service afin de faire des envois croisés,
              ledit service pourra nous communiquer vos informations de profil, de connexion, ainsi que toute
              autre information dont vous avez autorisé la divulgation. Nous pouvons agréger les informations
              relatives à tous nos autres Utilisateurs, groupes, comptes, aux données personnelles disponibles
              sur l'Utilisateur.
            </p>
            
            <h2>5- Collecte des données d'identité</h2>
            
            <p><strong>Utilisation d'un pseudonyme</strong></p>
            <p>
              L'utilisation du Site nécessite une inscription sans identification préalable. Elle peut
              s'effectuer sans que vous ne communiquiez de données nominatives vous concernant (nom, prénom,
              adresse, etc). Vous pouvez utiliser le pseudonyme de votre choix.
            </p>
            
            
            <h2>6- Collecte des données d'identification</h2>
            
            <p>
              <strong>Utilisation de l'identifiant de l'utilisateur uniquement pour l'accès aux services</strong>
              Nous utilisons vos identifiants électroniques seulement pour et pendant l'exécution du contrat.
            </p>
            
                
            
            <h2>7- Collecte des données du terminal</h2>
            <p><strong>Aucune collecte des données techniques</strong></p>
            <p>
              Nous ne collectons et ne conservons aucune donnée technique de votre appareil (adresse IP,
              fournisseur d'accès à Internet...).
            </p>
            
            <h2>8- Cookies</h2>
            <p><strong>Durée de conservation des cookies</strong></p>
            <p>
              Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de
              13 mois au maximum après Ieur premier dépôt dans le terminal de l'Utilisateur, tout comme la durée
              de la validité du consentement de l'Utilisateur à l'utilisation de ces cookies. La durée de vie des
              cookies n'est pas prolongée à chaque visite. Le consentement de l'Utilisateur devra donc être
              renouvelé à l'issue de ce délai.
            </p>
            <p><strong>Finalité cookies</strong></p>
            <p>
              Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services
              rendus à l'Utilisateur, à partir du traitement des informations concernant la fréquence d'accès, la
              personnalisation des pages ainsi que les opérations réalisées et les informations consultées.
              Vous êtes informé que l'Éditeur est susceptible de déposer des cookies sur votre terminal. Le
              cookie enregistre des informations relatives à la navigation sur le service (les pages que vous
              avez consultées, la date et l'heure de la consultation...) que nous pourrons lire Iors de vos
              visites ultérieures.
            </p>
            <p><strong>Opt-in pour le dépôt de cookies</strong></p>
            <p>
              Nous n'utilisons pas de cookies. Si nous devions en utiliser à l'avenir, vous en seriez informé
              préalablement et auriez la possibilité de désactiver ces cookies.
            </p>
            
            <h2>9 - Conservation des données techniques</h2>
            <p>Durée de conservation des données techniques</p>
            <p>
              Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation des
              finalités visées ci-avant.
            </p>
            
            
            <h2>10- Délai de conservation des données personnelles et d'anonymisation</h2>
            <p><strong>Pas de conservation des données</strong></p>
            <p>
              Nous ne conservons aucune donnée personnelle au delà de votre durée de connexion au service pour
              les finalités décrites dans les présentes Politique de confidentialité.
            </p>
            <p><strong>Suppression des données après suppression du compte</strong></p>
            <p>
              Des moyens de purge de données sont mis en place afin d'en prévoir la suppression effective dès
              Iors que la durée de conservation ou d'archivage nécessaire à l'accomplissement des
              
              finalités déterminées ou imposées est atteinte. Conformément à la Ioi n°78-17 du 6 janvier 1978
              relative à l'informatique, aux fichiers et aux libertés, vous disposez par ailleurs d'un droit de
              suppression sur vos données que vous pouvez exercer à tout moment en prenant contact avec
              l'Éditeur.
            </p>
            <p><strong>Suppression des données après 3 ans d'inactivité</strong></p>
            <p>
              Pour des raisons de sécurité, si vous ne vous êtes pas authentifié sur le Site pendant une période
              de trois ans, vous recevrez un e-mail vous invitant à vous connecter dans les plus brefs délais,
              sans quoi vos données seront supprimées de nos bases de données.
            </p>
            
            
            <h2>11- Suppression du compte</h2>
            <p><strong>Suppression du compte à la demande</strong></p>
            <p>
              L'Utilisateur a la possibilité de supprimer son Compte à tout moment, par simple demande à
              l'Éditeur OU par le menu de suppression de Compte présent dans les paramètres du Compte le cas
              échéant.
            </p>
            <p><strong>Suppression du compte en cas de violation de la Politique de Confidentialité</strong></p>
            <p>
              En cas de violation d'une ou de plusieurs dispositions de la Politique de Confidentialité ou de
              tout autre document incorporé aux présentes par référence, l'Éditeur se réserve le droit de mettre
              fin ou restreindre sans aucun avertissement préalable et à sa seule discrétion, votre usage et
              accès aux services, à votre compte et à tous les Sites.
            </p>
            
            <h2>12- Indications en cas de faille de sécurité décelée par l'Éditeur</h2>
            <p><strong>Information de l'Utilisateur en cas de faille de sécurité</strong></p>
            <p>
              Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles
              appropriées afin de garantir un niveau de sécurité adapté au regard des risques d'accès
              accidentels, non autorisés ou illégaux, de divulgation, d'altération, de perte ou encore de
              destruction des données personnelles vous concernant. Dans l'éventualité où nous prendrions
              connaissance d'un accès illégal aux données personnelles vous concernant stockées sur nos serveurs
              ou ceux de nos prestataires, ou d'un accès non autorisé ayant pour conséquence la réalisation des
              risques identifiés ci-dessus, nous nous engageons à :
            </p>
            <p>
              Vous notifier l'incident dans les plus brefs délais ; Examiner les causes de l'incident et vous en
              informer ;
            </p>
            <p>
              Prendre les mesures nécessaires dans la limite du raisonnable afin d'amoindrir les effets négatifs
              et préjudices pouvant résulter dudit incident.
            </p>
            
            <p><strong>Limitation de la responsabilité</strong></p>
            <p>
              En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille
              de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité
              quant à la survenance de l'incident en question.
            </p>
            
            <h2>13- Transfeû des données personnelles à l'étranger</h2>
            <p><strong>Pas de transfert en dehors de l'Union européenne</strong></p>
            <p>
              L'Éditeur s'engage à ne pas transférer les données personnelles de ses Utilisateurs en dehors de
              l'Union européenne.
            </p>
            
            
            <a href="https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-mondehttps://www.cnil.fr/fr/la-protection-
            des-donnees-dans-le-monde">
              https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-mondehttps://www.cnil.fr/fr/la-protection-
              des-donnees-dans-le-monde
            </a>
            
            
            <h2>14- Modification de la politique de confidentialité</h2>
            <p>
              <strong>
                En cas de modification de la présente Politique de Confidentialité, engagement de ne pas baisser le
                niveau de confidentialité de manière substantielle sans l'information préalable des personnes
                concernées
              </strong>
            </p>
            <p>
              Nous nous engageons à vous informer en cas de modification substantielle de la présente Politique
              de Confidentialité, et à ne pas baisser le niveau de confidentialité de vos données de manière
              substantielle sans vous en informer et obtenir votre consentement.
            </p>
            
            <h2>15- Droit applicable et modalités de recours</h2>
            <p><strong>Clause d'arbitrage</strong></p>
            <p>
              Vous acceptez expressément que tout litige susceptible de naître du fait de la présente Politique
              de Confidentialité, notamment de son interprétation ou de son exécution, relèvera d'une procédure
              d'arbitrage soumise au règlement de la plateforme d'arbitrage choisie d'un commun accord, auquel
              vous adhérerez sans réserve.
            </p>
            
            </div>
            `;
        break;
      case 'contact':
        document.querySelector('#app').innerHTML = `
            <div class="title-container">
              <b>Open-Source</b>
              <h1 class="mb-5 text-5xl font-bold">
                Nous Contactez
              </h1>
              <p>Vision est une application web permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas</p>
            </div>
      
            <div class="text-container">
                <h2>1. Par Mail</h2>
                <div class="copy-mail">
                <div class="mockup-code text-primary-content">
                    <pre>
                      <code>visiondata@mail.com</code>
                    </pre>
                </div>
                <div class="copy">
                    <div class="tooltip tooltip-primary" data-tip="Copier l'adresse email">
                        <button id="copy">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </button>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </div>
            <script>
            document.querySelector('#copy').addEventListener('click',()=>{
                navigator.clipboard.writeText('vision@mail.fr');
            })
            </script>
            `;
        break;

      default:
        break;
    }
  } else {
    // Fragment doesn't exist
  }
}