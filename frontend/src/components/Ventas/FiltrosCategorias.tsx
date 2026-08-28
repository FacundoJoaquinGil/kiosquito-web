interface FiltrosCategoriasProps {
  categoriaActual: string;
  onCambiarCategoria: (categoria: string) => void;
}

const categorias = [
  "Todos",
  "Bebidas",
  "Snacks",
  "Golosinas",
  "Cigarrillos",
];

const FiltrosCategorias = ({
  categoriaActual,
  onCambiarCategoria,
}: FiltrosCategoriasProps) => {
  return (
    <div className="ventas-categorias">

      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() =>
            onCambiarCategoria(categoria)
          }
          className={
            categoriaActual === categoria
              ? "categoria-btn activa"
              : "categoria-btn"
          }
        >
          {categoria}
        </button>
      ))}

    </div>
  );
};

export default FiltrosCategorias;