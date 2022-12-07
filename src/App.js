import './App.css';
import Testimonio from './componentes/Testimonio.js';
function App() {
  return (
    <div className="App">
   <div className='contenedor-principal'>
      <h1> Rick Y Morty</h1>
      <Testimonio  
      nombre = 'Perro '
      feeling = 'Meon'
      imagen = 'perro'
      clase = 'Perro'
      who = 'Morty'
      testimonio = 'Guau Guau Guau, soy el amigo de Morty'
      />
    
      <Testimonio  
      nombre = 'Misik '
      feeling = 'Señor Misik'
      imagen = 'azul'
      clase = 'Esclavo'
      who = 'Rick'
      testimonio = '¡Que es lo que desea, soy el Señor Misik !'
      />
        <Testimonio  
      nombre = 'Ojete'
      feeling = 'Personaje Secundario'
      imagen = 'ojete'
      clase = 'Random'
      who = 'Rick y Morty'
      testimonio = 'No se lo que estoy haciendo, aqui'
      />
      </div>
    </div>
  );
}

export default App;
