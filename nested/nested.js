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
                <h2>1. Par Mail</h2>
                <p>vision.data@mail.Com</p>
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