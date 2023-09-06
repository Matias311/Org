import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/miOrg.js";
import Equipo from "./componentes/Equipo/equipo";
import Footer from "./componentes/Footer/footer";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://media.istockphoto.com/id/514622028/es/foto/poco-mapache-de-%C3%A1rbol.jpg?s=612x612&w=0&k=20&c=nUQIV3wWxstPf-FxFTcNAgCw5QPIRiE1H111aRrk_M0=",
      nombre: "Patricia",
      puesto: "Desarrolladora de software e instructura",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e8",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id;
    });
    actualizarColaboradores(nuevosColaboradores);
  };

  // Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  // crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  // Like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
  };

  return (
    <div>
      <Header />
      {mostrarForm === true ? (
        <Formulario
          equipos={equipos.map((equipo) => {
            return equipo.titulo;
          })}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
