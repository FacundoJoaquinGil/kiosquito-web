import "./RegistroComponents.css";

const MovimientoSkeleton = () => {
  return (
    <div className="registro-item movimiento-skeleton">
      <div className="skeleton skeleton-registro-id"></div>

      <div className="registro-info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-subtitle"></div>
      </div>

      <div className="skeleton skeleton-total"></div>
    </div>
  );
};

export default MovimientoSkeleton;