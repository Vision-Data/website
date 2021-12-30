import './styles/tailwind.css'
import './styles/style.styl'

document.querySelector('#app').innerHTML = `
<div class="hero min-h-screen bg-base-200">
<div class="flex-col hero-content lg:flex-row-reverse">
  <img src="https://picsum.photos/id/1005/600/600" class="max-w-sm rounded-lg shadow-2xl"> 
  <div>
    <h1 class="mb-5 text-5xl font-bold">
          Visionnez vos données en un clin d'oeil
        </h1> 
    <p class="mb-5">
      Vision est une application web vous permettant de visualiser vos données provenant d'une API. Indiquer les données à visualiser et Vision vous créera des schémas.
    </p> 
  </div>
</div>
</div>
`
