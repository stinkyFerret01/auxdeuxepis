const Map = ({ setDpMap }) => {
  return (
    <div className="spread-over-all">
      <div id="map-container">
        <section id="map">
          <h2>map</h2>
        </section>
        <button
          className="winclos"
          onClick={() => {
            setDpMap(false);
          }}
        >
          <h6 className="winclos-txt">fermer</h6>
        </button>
      </div>
    </div>
  );
};

export default Map;
