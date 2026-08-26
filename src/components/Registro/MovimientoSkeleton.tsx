const MovimientoSkeleton = () => {
  return (
    <div className="movimiento-row movimiento-skeleton">
      <div className="movimiento-left">
        <div className="skeleton skeleton-avatar"></div>

        <div className="movimiento-info">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-detail"></div>
        </div>
      </div>

      <div className="skeleton skeleton-monto"></div>
    </div>
  );
};

export default MovimientoSkeleton;