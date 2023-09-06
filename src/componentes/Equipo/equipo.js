import "./equipo.css";
import Colaborador from "../Colaborador/colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  // Destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const fondoColor = {
    backgroundColor: colorSecundario,
  };
  const colorTitulo = {
    borderColor: hexToRgba(colorPrimario, 0.6),
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={fondoColor}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={colorTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
