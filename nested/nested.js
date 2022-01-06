import '../styles/tailwind.css'
import '../styles/style.styl'

route();

window.addEventListener('hashchange', ()=>{
  route();
});

function route() {
  if(window.location.hash) {
    const hash = window.location.hash;
    switch (hash.replace('#','')) {
        case 'aboutus':
            document.querySelector('#app').innerHTML = `
            <div class="title-container">
              <b>Open-Source</b>
              <h1 class="mb-5 text-5xl font-bold">
                A propos
              </h1>
              <p>Vision est une application web permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas</p>
            </div>
      
            <div class="text-container">
                <h2>1. Qui sont Nous</h2>
                <p>These User Terms of Service ("Terms") are between you ("you") and Postman, Inc. ("Postman" or "we") and govern your use of all versions of the Postman software and services, including the Postman API and Beta Previews (collectively, the "Services"), and the Postman websites, including but not limited to www.postman.com, blog.postman.com, learning.postman.com, community.postman.com, and store.postman.com (the "Websites").</p>
                
                <h2>2. Nos Objectifs</h2>
                <p>By downloading, installing, or using the Services on any computer system, or by accepting these Terms (either by clicking a box indicating that you accept these Terms, or by executing an ordering document ("Order") referencing these Terms), you acknowledge and agree that you have read, understand, and agree to be bound by these Terms and our Privacy Policy.</p>
      
                
                <p>You may not use the Services in violation of export control or sanctions laws of the United States or any other applicable jurisdiction. You may not use the Services if you are or are working on behalf of a Specially Designated National (SDN) or a person subject to similar blocking or denied party prohibitions administered by a U.S. government agency.</p>
                
                <h2>3. La vie du projet</h2>
                <p>Subject to your compliance with these Terms and paying the applicable fees, Postman grants you a </p>
                
                <p>The Services include certain code and libraries licensed to us by third parties, including open source software ("OSS") as listed at postman.com/legal/third-party along with the applicable OSS license. Your right to use such OSS shall be governed by the applicable OSS license agreement instead of these Terms.</p>
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
              <h2>1. Introduction</h2>
              <p>These User Terms of Service ("Terms") are between you ("you") and Postman, Inc. ("Postman" or "we") and govern your use of all versions of the Postman software and services, including the Postman API and Beta Previews (collectively, the "Services"), and the Postman websites, including but not limited to www.postman.com, blog.postman.com, learning.postman.com, community.postman.com, and store.postman.com (the "Websites").</p>
              
              <h2>2. Binding Agreement</h2>
              <p>By downloading, installing, or using the Services on any computer system, or by accepting these Terms (either by clicking a box indicating that you accept these Terms, or by executing an ordering document ("Order") referencing these Terms), you acknowledge and agree that you have read, understand, and agree to be bound by these Terms and our Privacy Policy.</p>
              
              <p>Postman reserves the right to modify these Terms at its discretion. If Postman makes any material changes to these Terms, it may notify you by email or posting a notice on www.postman.com. If you do not agree to, or cannot comply with, the modified Terms, you must stop using the Services and Websites. The updated Terms will take effect upon their posting and will apply on a going-forward basis, unless otherwise provided in a notice to you. Your continued use of the Services and Websites after any such update constitutes your acceptance of such changes. Except as set forth in this paragraph, no modification or amendment of any provision of these Terms will be effective unless in writing and signed by the party against whom the modification or amendment is to be asserted.</p>
              
              <p>If you are agreeing to these Terms not as an individual but on behalf of your company, government, or other entity for which you are acting (for example, as an employee or government official) then "you" means your entity and you are binding your entity to these Terms. If you do not have such authority or if you do not agree with these Terms, do not accept these Terms and do not use the Services.</p>
              
              <p>The Services are not intended for and should not be used by anyone under the age of 13, and we do not permit any Users under 13 on our Services. The term "User" means any individual that Uses the Services (as defined in Section 3 below). You must ensure that all of your Users are at least 13 years old. If we learn of any User under the age of 13, we will terminate that User's Account immediately. If you are a resident of a country outside the United States, your country's minimum age may be older; in that case, you are responsible for complying with your country's laws.</p>
              
              <p>You may not use the Services in violation of export control or sanctions laws of the United States or any other applicable jurisdiction. You may not use the Services if you are or are working on behalf of a Specially Designated National (SDN) or a person subject to similar blocking or denied party prohibitions administered by a U.S. government agency.</p>
              
              <h2>3. Use of the Services</h2>
              <h3>3.1 Right to Use</h3>
              <p>Subject to your compliance with these Terms and paying the applicable fees, Postman grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right to Use* the Services on a subscription basis in executable code form in accordance with these Terms. Except for the limited rights expressly set out in these Terms, Postman grants you no other license or right in the Services. Your rights will end when these Terms are terminated even if there are terms to the contrary set out elsewhere in these Terms or in other documentation entered into between Postman and you.</p>
              
              <p>*Use, Using or Used means to directly or indirectly activate the processing capabilities of the Services, load, execute, access, utilize, store, employ the Services, or display information resulting from such capabilities, including uploading any Content** or creating or generating any Content by utilizing the capabilities of the Services.</p>
              
              <p>**Content refers to content featured or displayed through the Services (including through the Websites), including without limitation code, text, data, articles, images, photographs, graphics, software, applications, packages, designs, features, and other materials that are available on the Websites or otherwise available through the Services. "User-Generated Content" is Content, written or otherwise, that Users upload into or create by Using the Services. "Your Content" is User-Generated Content that you or your Users submit to the Services.</p>
              
              <p>The Services include certain code and libraries licensed to us by third parties, including open source software ("OSS") as listed at postman.com/legal/third-party along with the applicable OSS license. Your right to use such OSS shall be governed by the applicable OSS license agreement instead of these Terms.</p>
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
                <p>vision.data@mail.Com</p>
            </div>
            `;
            break;
    
        default:
            break;
    }
} else {
    // Fragment doesn't exist
}
}