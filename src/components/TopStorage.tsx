export default function TopStorage() {
  /* - Family: [Raleway](https://fonts.google.com/specimen/Raleway) */
  /* - Weights: 400, 700 */
  return (
    <div className="top-storage">
      <label htmlFor="storage_usage">
        You’ve used <span className="bold">815 GB</span> of your storage
      </label>
      <meter id="storage_usage" value="815" min="0" max="1000" />
      {/* temp */}
      {/* <p>185 GB Left 0 GB 1000 GB</p> */}
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
