Vue.component('padre',{
    template: //html
    `
    <section>
    <h1>{{title}}</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Direccion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td :class="estilo.rojo">{{datos[0].nombre}}</td>
      <td :class="estilo.rojo">{{datos[0].apellido}}</td>
      <td :class="estilo.rojo">{{datos[0].direccion}}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td :class="estilo.azul">{{datos[1].nombre}}</td>
      <td :class="estilo.azul">{{datos[1].apellido}}</td>
      <td :class="estilo.azul">{{datos[1].direccion}}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td :class="estilo.verde">{{datos[2].nombre}}</td>
      <td :class="estilo.verde">{{datos[2].apellido}}</td>
      <td :class="estilo.verde">{{datos[2].direccion}}</td>
    </tr>
  </tbody>
</table>
    `,
    props: ['datos','title','estilo'],
    data() {
        return {
            saludo: 'text-primary'
        }
    },

    
  
})