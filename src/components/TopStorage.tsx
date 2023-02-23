export default function TopStorage() {
  /* - Family: [Raleway](https://fonts.google.com/specimen/Raleway) */
  /* - Weights: 400, 700 */
  return (
    <div className="top-storage">
      <p>
        You’ve used <span className="bold">815 GB</span> of your storage
      </p>
      <div id="storage-meter">
        <div id="storage-bar" style={{ ["width" as string]: getWidth() }}>
          <div id="storage-meter-circle"></div>
        </div>
      </div>
      <div id="storage-labels">
        <div>0 GB</div>
        <div>1000 GB</div>
      </div>
      <div className="storage-left">
        <p className="storage-left-num">
          18
          <span id="gb-left-final-num">5</span>
        </p>
        <span id="gb-left-text">GB LEFT</span>
      </div>
    </div>
  );
}

function getWidth(): string {
  return "82%";
}
